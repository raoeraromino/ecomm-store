"use server";

import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) return [];

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCategory = async (id: string): Promise<Category> => {
  try {
    const res = await fetch(`${URL}/${id}`);


    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
