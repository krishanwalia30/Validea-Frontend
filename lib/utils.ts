import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchCount() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCount`
    );
    const data = await response.json();
    if (data.count) {
      return data.count;
    }
  } catch (error) {
    console.error("Error fetching count:", error);
    return 99;
  }
}
