import { useEffect, useState } from "react";
import { getAllCourses } from "../services/courseApi";
import { Link } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await getAllCourses();
      setCourses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-white text-4xl mb-8">Courses</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
            to={`/courses/${course.slug}`}
            key={course._id}
            className="bg-slate-800 p-5 rounded-xl block hover:bg-slate-700 transition"
          >
            <h2 className="text-white text-xl font-bold">{course.title}</h2>

            <p className="text-gray-400 mt-2">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;
