import axiosInstance from "../lib/axiosInstance";

export const fetchUserNameById = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/api/admin/user/${userId}`); // Modify this URL based on your backend
    return response.data.name; // assuming the response contains a `username` field
  } catch (error) {
    console.error("Error fetching username:", error);
    return "Unknown User"; // return a default value if there's an error
  }
};
