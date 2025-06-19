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
    return 99; // This will be the default count - Return 99 if the count is not available
  }
}

export const getBaseUrl = () => {
  // For Netlify deployments
  if (process.env.URL || process.env.DEPLOY_URL) {
    return process.env.URL || process.env.DEPLOY_URL;
  }
  // For local development
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  // Fallback for development 
  return `http://localhost:3000`;
}; 
