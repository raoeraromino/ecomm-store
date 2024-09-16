"use server";

import { Color} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) return [];

    

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
