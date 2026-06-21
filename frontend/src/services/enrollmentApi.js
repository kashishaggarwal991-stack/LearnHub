import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/enrollments`;

export const enrollCourse = (courseId) => {
  const token = localStorage.getItem("token");

  return axios.post(
    `${API_URL}/${courseId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getMyEnrollments = () => {
  const token = localStorage.getItem("token");

  return axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProgress = (id, progress) => {
  const token = localStorage.getItem("token");

  return axios.put(
    `${API_URL}/${id}/progress`,
    { progress },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
