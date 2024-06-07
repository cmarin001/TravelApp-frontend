const API_URL = import.meta.env.VITE_API_URL;

const fetchLocations = async (query: string) => {
  try {
    const response = await fetch(`${API_URL}/locations?query=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch locations.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

export { fetchLocations };
