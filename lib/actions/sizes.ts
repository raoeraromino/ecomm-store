"use server";

import { Size} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) return [];



    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
