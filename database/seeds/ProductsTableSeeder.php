<?php

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $products =              [
            'category_id' => 1,
            'name' => 'Xbox One S',
            'description' => 'O Xbox One S tem mais de 1.300 jogos: mais vendidos, franquias populares e títulos exclusivos do Xbox One. Jogue com amigos, acesse aplicativos de entretenimento e aproveite o 4K Ultra HD Blu-ray™ nativo e o streaming de vídeo em 4K.',
            'created_at' => '2021-02-18 15:31:49',
        ];

        Product::create($products);
    }
}
