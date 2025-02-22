import axios from "axios";

export const fetchUserNameById = async (userId: string) => {
  try {
    const response = await axios.get(`/api/users/${userId}`); // Modify this URL based on your backend
    return response.data.username; // assuming the response contains a `username` field
  } catch (error) {
    console.error("Error fetching username:", error);
    return "Unknown User"; // return a default value if there's an error
  }
};
