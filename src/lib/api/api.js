const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

export async function postAPI(endpoint, payload = {}) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", 
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Failed: ${endpoint}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    return null;
  }
}