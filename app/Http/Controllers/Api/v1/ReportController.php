<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ReportController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api');

    }

    public function products(Product $product, Request $request)
    {
        $year = $request->year;

        $products = $product->where('created_at', '>=', "{$year}-01-01")
                                ->where('created_at', '<=', date('Y-m-t', strtotime("{$year}-12")))
                                ->get()
                                ->groupBy(function ($query) {
                                    return $query->created_at->format('m');
                                });
        
        $labels = [];
        $datasets = [];
        foreach ($products as $product) {
            $label = $product[0]->created_at->format('m');

            switch ($label) {
                case '01':
                    $label = "Janeiro";
                    break;
                case '02':
                    $label = "Fevereiro";
                    break;
                case '03':
                    $label = "Março";
                    break;
                case '04':
                    $label = "Abril";
                    break;
                case '05':
                    $label = "Maio";
                    break;
                case '06':
                    $label = "Junho";
                    break;
                case '07':
                    $label = "Julho";
                    break;
                case '08':
                    $label = "Agosto";
                    break;
                case '09':
                    $label = "Setembro";
                    break;
                case '10':
                    $label = "Outubro";
                    break;
                case '11':
                    $label = "Novembro";
                    break;
                case '12':
                    $label = "Dezembro";
                    break;
            }

            $labels[] = $label;
            $datasets[] = count($product);
        }

        return response()->json([
            'labels' => $labels,
            'datasets' => $datasets,
        ]);
    }
}
