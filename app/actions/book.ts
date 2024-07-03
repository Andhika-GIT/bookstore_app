"use server";

import { Book } from "@/types";

const BASE_URL = process.env.BASE_URL;

export const getBooks = async (page: number = 1): Promise<Book[] | undefined> => {
  const response = await fetch(`${BASE_URL}/book?page=${page}`, {
    cache: "no-cache",
  });

  const data = await response.json();

  return data;
};