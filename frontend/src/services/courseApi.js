import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/courses`;

export const getAllCourses = () => {
  return axios.get(API_URL);
};

export const getCourseById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const getCourseBySlug = (slug) => {
  return axios.get(`${API_URL}/slug/${slug}`);
};

export const createCourse = (data) => {
  const token = localStorage.getItem("token");

  return axios.post(API_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteCourse = (id) => {
  const token = localStorage.getItem("token");

  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateCourse = (id, data) => {
  const token = localStorage.getItem("token");

  return axios.put(`${API_URL}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
