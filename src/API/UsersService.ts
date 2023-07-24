import axios from "axios";

export const getUsers = async () => {
  const responce = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return responce.data;
};
