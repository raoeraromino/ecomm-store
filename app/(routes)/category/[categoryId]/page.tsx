import React from 'react';
import {getProducts} from "@/lib/actions/products";
import {getSizes} from "@/lib/actions/sizes";
import {getColors} from "@/lib/actions/colors";
import {getCategory} from "@/lib/actions/categories";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import Filter from "@/components/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/Card";
import MobileFilters from "@/components/MobileFilters";

export const revalidate = 0;
interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string
        sizeId: string
    }
}
const CategoryPage = async ({params, searchParams}: CategoryPageProps) => {

    const [products, sizes, colors, category] = await Promise.all([
        getProducts({categoryId: params.categoryId, colorId: searchParams.colorId, sizeId: searchParams.sizeId}),
        getSizes(),
        getColors(),
        getCategory(params.categoryId)
    ]);
    console.log(products)


    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard}/>

                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors}/>
                        <div className="hidden lg:block">
                            <Filter valueKey="sizeId" name="Size" data={sizes}/>
                            <Filter valueKey="colorId" name="Color" data={colors}/>
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && (<NoResults/>)}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                                {products.map((item) => ( <ProductCard data={item} key={item.id}/>) )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CategoryPage;