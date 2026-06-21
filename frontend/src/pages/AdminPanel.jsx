import { useState, useEffect } from "react";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  updateCourse,
} from "../services/courseApi";

function AdminPanel() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    difficulty: "Easy",
    thumbnailUrl: "",
  });

  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      if (editId) {
        await updateCourse(editId, formData);

        alert("Course Updated Successfully");

        setEditId(null);
      } else {
        await createCourse(formData);

        alert("Course Created Successfully");
      }

      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        difficulty: "Easy",
        thumbnailUrl: "",
      });

      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await getAllCourses();
      setCourses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);

      alert("Course Deleted Successfully");

      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <input
          type="text"
          value={formData.title}
          name="title"
          placeholder="Course Title"
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <textarea
          name="description"
          value={formData.description}
          placeholder="Course Description"
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input
          type="text"
          name="thumbnailUrl"
          placeholder="Thumbnail URL"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <button type="submit" className="bg-blue-600 px-6 py-3 rounded">
          {editId ? "Update Course" : "Create Course"}
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">All Courses</h2>

        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-slate-800 p-4 rounded-xl flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{course.title}</h3>

                <p className="text-gray-400">{course.category}</p>
              </div>

              <button
                onClick={() => {
                  setEditId(course._id);

                  setFormData({
                    title: course.title,
                    description: course.description,
                    price: course.price,
                    category: course.category,
                    difficulty: course.difficulty,
                    thumbnailUrl: course.thumbnailUrl,
                  });
                }}
                className="bg-yellow-500 px-4 py-2 rounded-lg mr-2"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(course._id)}
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
