import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { getBillboard } from "@/lib/actions/billboard";
import { getProducts } from "@/lib/actions/products";
import React from "react";


export const revalidate = 0
const HomePage = async () => {
  const data = await getBillboard("cm0qvyicb0002x4zhbv6bkzuz");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={data} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
      </div>
    </Container>
  );
};

export default HomePage;
