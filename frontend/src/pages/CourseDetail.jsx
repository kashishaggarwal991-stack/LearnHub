import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseBySlug } from "../services/courseApi";
import { enrollCourse } from "../services/enrollmentApi";

function CourseDetail() {
  const { slug } = useParams();

  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    fetchCourse();
  }, []);

  const handleEnroll = async () => {
    try {
      await enrollCourse(course._id);

      setIsEnrolled(true);

      alert("Enrollment Successful");
    } catch (error) {
      const message = error?.response?.data?.message;

      if (message === "Already enrolled") {
        setIsEnrolled(true);

        alert("You are already enrolled in this course");
      } else {
        alert(message || "Enrollment Failed");
      }
    }
  };
  const fetchCourse = async () => {
    try {
      const res = await getCourseBySlug(slug);
      setCourse(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-8">Loading...</div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <img
          src={course.thumbnailUrl}
          alt={course.title}
          className="w-full h-80 object-cover rounded-2xl mb-8"
        />

        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

        <p className="text-gray-300 mb-4">{course.description}</p>

        <div className="flex gap-4 mb-6">
          <span className="bg-slate-800 px-3 py-1 rounded">
            ₹{course.price}
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded">
            {course.difficulty}
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded">
            {course.category}
          </span>
        </div>

        {isEnrolled ? (
          <button
            disabled
            className="bg-green-600 px-8 py-3 rounded-xl cursor-not-allowed"
          >
            Already Enrolled
          </button>
        ) : (
          <button
            onClick={handleEnroll}
            className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            Enroll Now
          </button>
        )}

        <h2 className="text-2xl font-semibold mt-10 mb-4">Lessons</h2>

        {course.lessons?.length > 0 ? (
          course.lessons.map((lesson) => (
            <div
              key={lesson.order}
              className="bg-slate-800 p-4 rounded-xl mb-3"
            >
              📖 {lesson.title}
            </div>
          ))
        ) : (
          <div className="bg-slate-800 p-4 rounded-xl text-gray-400">
            No lessons added yet.
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetail;
