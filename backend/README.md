# TRAIBCERT Payments API (Laravel)

A small, standalone **Laravel 11** API that adds a **PayPal payment gateway**
and a **SQL database** to the TRAIBCERT training pages. The existing React
(TanStack Start) frontend calls this API to sell training courses.

The React app never handles PayPal secrets or trusts client-side prices — this
backend is the single source of truth for prices and payment verification.

---

## Architecture

```
React training page  ──HTTP/JSON──►  Laravel API  ──Eloquent──►  SQL database
  (PayPal buttons)                   (this app)                  (courses,
        ▲                                 │                       orders,
        └──────── PayPal JS SDK ──────────┴── PayPal Orders v2 ──► enrollments)
```

1. Buyer clicks **Pay** on `/training/{slug}`.
2. React calls `POST /api/paypal/create-order` → Laravel reads the course
   **price from the database**, creates a PayPal order, stores a `pending`
   order row, and returns the PayPal order id.
3. Buyer approves in the PayPal popup.
4. React calls `POST /api/paypal/capture-order` → Laravel captures the payment,
   **verifies the captured amount matches** the stored order, marks it `paid`,
   and creates an `enrollment`.
5. React redirects to `/training/success?ref=TRB-XXXXXXXX`, which reads the
   receipt via `GET /api/enrollments/{reference}`.

---

## Requirements

- PHP 8.2+
- Composer 2
- One SQL database: **MySQL 8** (default), PostgreSQL, or SQLite (zero-setup)

---

## Setup

> Note: `composer install` requires internet access to packagist. It could not
> be run in the build sandbox, so run it in your own environment.

```bash
cd backend

# 1. Install dependencies
composer install

# 2. Environment
cp .env.example .env
php artisan key:generate

# 3a. Fastest start — SQLite (no DB server needed)
#     In .env set: DB_CONNECTION=sqlite
touch database/database.sqlite

# 3b. Or MySQL — in .env set DB_CONNECTION=mysql and the DB_* credentials,
#     then create the database:
#     mysql -u root -e "CREATE DATABASE traibcert CHARACTER SET utf8mb4;"

# 4. Create the schema and seed the courses (with PLACEHOLDER prices)
php artisan migrate --seed

# 5. Run the API (http://localhost:8000)
php artisan serve
```

---

## PayPal credentials

1. Create an app at <https://developer.paypal.com/dashboard/> (Sandbox first).
2. Copy the **Client ID** and **Secret** into `.env`:

```env
PAYPAL_MODE=sandbox
PAYPAL_CURRENCY=GBP
PAYPAL_SANDBOX_CLIENT_ID=your-sandbox-client-id
PAYPAL_SANDBOX_CLIENT_SECRET=your-sandbox-secret
```

3. Put the **same Client ID** in the frontend `.env` as `VITE_PAYPAL_CLIENT_ID`
   (the client id is public; the **secret stays only in this backend**).
4. For production, set `PAYPAL_MODE=live` and fill the `PAYPAL_LIVE_*` values.

---

## ⚠️ Prices are placeholders

`database/seeders/CourseSeeder.php` uses **indicative placeholder prices**
(e.g. `iso-9001` = £495.00, stored as `49500` pence). **Replace them with
TRAIBCERT's real fees before going live.** Prices are stored as integer minor
units (pence) to avoid floating-point rounding. To update prices later, edit
the seeder and re-run `php artisan db:seed --class=CourseSeeder`, or update the
`courses` table directly.

The React file `src/data/courses.ts` carries matching placeholder prices for
display only — the authoritative price at checkout always comes from this API.

---

## API reference

| Method | Path | Body | Returns |
| --- | --- | --- | --- |
| GET | `/api/courses` | — | `{ data: Course[] }` |
| GET | `/api/courses/{slug}` | — | `{ data: Course }` |
| POST | `/api/paypal/create-order` | `{ courseSlug, customerName?, customerEmail? }` | `{ id, status }` |
| POST | `/api/paypal/capture-order` | `{ orderId, customerName?, customerEmail? }` | `{ status: "paid", reference }` |
| POST | `/api/paypal/webhook` | PayPal event | `{ received: true }` |
| GET | `/api/enrollments/{reference}` | — | `{ data: Enrollment }` |

`Course` shape: `{ slug, code, title, category, price, priceMinor, currency, isActive }`.

---

## Database schema

- **courses** — catalogue with server-side `price_minor` + `currency`.
- **orders** — one per checkout attempt: `status` (pending/paid/failed/refunded),
  amount snapshot, PayPal order/capture ids, buyer details, raw PayPal payload.
- **enrollments** — created on successful payment; carries the public
  `reference` (`TRB-XXXXXXXX`) shown on the receipt page.

---

## Security notes

- The PayPal **secret never leaves the backend**; the browser only exchanges
  opaque order ids.
- The charged amount is taken from the **database**, never the request body.
- `capture-order` **verifies** the captured amount equals the stored amount and
  the PayPal status is `COMPLETED` before granting an enrollment.
- Capture is **idempotent** — replaying a captured order returns the existing
  enrollment rather than double-processing.
- The webhook handler is a stub: **verify the PayPal webhook signature**
  (against `PAYPAL_WEBHOOK_ID`) before trusting it in production.
- Lock `FRONTEND_URL` in `.env` to your real frontend origin for CORS.

---

## CORS

`config/cors.php` allows the origin(s) in `FRONTEND_URL` / `FRONTEND_URL_ALT`
to call `/api/*`. Default dev origin is `http://localhost:3000`.
