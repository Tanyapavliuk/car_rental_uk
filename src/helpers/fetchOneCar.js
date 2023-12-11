import axios from "axios";

export const fetchOneCar = async (id) => {
  try {
    const response = await axios.get(
      `https://6573288d192318b7db41a7b3.mockapi.io/api/v1/adverts/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
