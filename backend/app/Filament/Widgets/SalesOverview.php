<?php

namespace App\Filament\Widgets;

use App\Models\Enrollment;
use App\Models\Order;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

/**
 * Top-of-dashboard summary: paid revenue, paid order count and active
 * enrollments.
 */
class SalesOverview extends BaseWidget
{
    protected function getStats(): array
    {
        $paidOrders = Order::where('status', Order::STATUS_PAID);

        $revenueMinor = (int) (clone $paidOrders)->sum('amount_minor');
        $revenue = '£'.number_format($revenueMinor / 100, 2);

        return [
            Stat::make('Revenue (paid)', $revenue)
                ->description('Sum of all captured payments')
                ->color('success'),
            Stat::make('Paid orders', (string) (clone $paidOrders)->count())
                ->description('Successfully captured')
                ->color('primary'),
            Stat::make('Active enrollments', (string) Enrollment::where('status', 'active')->count())
                ->description('Learners with access')
                ->color('primary'),
        ];
    }
}
