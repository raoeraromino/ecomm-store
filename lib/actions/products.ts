"use server";

import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
export const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl(
      {
        url: URL,
        query: {
          colorId: query.colorId,
          categoryId: query.categoryId,
          sizeId: query.sizeId,
          isFeatured: query.isFeatured,
        },
      },
      { skipNull: true }
    );
    const res = await fetch(url);

    if (!res.ok) return [];

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProduct  = async (id: string) : Promise<Product> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
