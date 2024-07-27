import axios from "axios";
const API_BASE_URL = "http://localhost:5007/api";

const apiService = {
  //Admin

  GetUsers: async (headers) => {
    const response = await axios.get(`${API_BASE_URL}/Admin/users`, {
      headers,
    });
    return response;
  },
  //Admin
  GetNutritioists: async (headers) => {
    const response = await axios.get(`${API_BASE_URL}/Admin/nutritionists`, {
      headers,
    });
    return response;
  },

  ApprovedNutritionist: async (id, isApproved, headers) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/admin/isapproved/nutritionist?id=${id}&isApproved=${isApproved}`,
        {id:id, isApproved:true},
        {
          headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error approving nutritionist:", error);
      throw error;
    }
  },

  ApprovedUser: async (id, isApproved,headers) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/admin/isapproved/users?id=${id}&isApproved=${isApproved}`,
        {id:id, isApproved:true},
        {
          headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error approving users:", error);
      throw error;
    }
  },

  // ************ End Admin API *****************///////

  /******************** Registration ***************** */

  LoginApi: async (data) => {
    const response = await axios.post(`${API_BASE_URL}/Account/login`, data);
    return response.data;
  },

  SignupApi: async (data) => {
    const response = await axios.post(`${API_BASE_URL}/Account/signup`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  /************************* User visiter *************** */
  GetUserOwnData: async (headers, id) => {
    const response = await axios.get(`${API_BASE_URL}/User/${id}`, { headers });
    return response.data;
  },

  UpdateUserProfile: async (id, data, headers) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/User/${id}`, data, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  },
  ViewNutritionists: async (headers) => {

    const response = await axios.get(`${API_BASE_URL}/User/nutritionists`, {
      headers,
    });
    return response;
  },



  GetPostedIssue: async (uid,nid) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/Issue?uid=${uid}&nid=${nid}`
       
      );
      return response.data;
    } catch (error) {
      console.error("Error geting Issue:", error);
      throw error;
    }
  },
  GetIssueResponse: async (uid,nid) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/IssueResponse?uid=${uid}&nid=${nid}`
       
      );
      return response.data;
    } catch (error) {
      console.error("Error geting Response:", error);
      throw error;
    }
  },

  PostedIssue: async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/Issue`, data
       
      );
      return response.data;
    } catch (error) {
      console.error("Error posting Issue:", error);
      throw error;
    }
  },

  ReplayIssue: async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/IssueResponse`, data
       
      );
      return response.data;
    } catch (error) {
      console.error("Error posting Replay:", error);
      throw error;
    }
  },


  /**************** Nutritionist ********************* */

  GetNutritionistOwnData: async (headers, id) => {
    const response = await axios.get(`${API_BASE_URL}/Nutritionist/${id}`, {
      headers,
    });
    return response.data;
  },

  UpdateNutritioistProfile: async (headers, id,data ) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/Nutritionist/${id}`, data, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating nutritionist profile:", error);
      throw error;
    }
  },

  GetUsersByNutritionist: async ( id ) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Issue/GetUsersByNutritionist/${id}`,);
      return response.data;
    } catch (error) {
      console.error("Error Geting user have Issue:", error);
      throw error;
    }
  },



};

export default apiService;
