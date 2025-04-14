const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const fetchBusinesses = async () => {
  const res = await fetch(`${API_BASE_URL}/api/businesses`);
  return res.json();
};
