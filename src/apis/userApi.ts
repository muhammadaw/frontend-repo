import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; 

export const fetchUserDataApi = async () => {
  const response = await axios.get(`${API_BASE_URL}/fetch-user-data`);
  return response.data;
};

export const updateUserData = async (userId: string, data: any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update-user-data`, 
      { userId, ...data },
      { 
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        } 
      }
    );
    console.log(response);
    return response.data;

  } catch (error) {
    console.error('Error in updateUserData:', error);
    throw error;
  }
};