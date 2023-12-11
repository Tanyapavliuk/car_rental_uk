import axios from "axios";

export const fetchCars = async (page, limit = 12) => {
  const url = new URL(
    "https://6573288d192318b7db41a7b3.mockapi.io/api/v1/adverts"
  );
  url.searchParams.append("completed", false);
  url.searchParams.append("page", page);
  url.searchParams.append("limit", limit);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
