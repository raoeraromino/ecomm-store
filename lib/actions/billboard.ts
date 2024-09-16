"use server";

import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    // if (!res.ok) return null;

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
