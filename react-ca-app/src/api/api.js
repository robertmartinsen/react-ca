import { BASE_API_URL } from './endpoints';

export async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_API_URL}/products`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch products: ' + error.message);
  }
}

