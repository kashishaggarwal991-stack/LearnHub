import { useEffect, useState } from "react";
import { getMyEnrollments, updateProgress } from "../services/enrollmentApi";

function Dashboard() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const res = await getMyEnrollments();
      setEnrollments(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProgress = async (id, progress) => {
    try {
      await updateProgress(id, progress);

      fetchEnrollments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">My Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {enrollments.map((enrollment) => (
          <div
            key={enrollment._id}
            className="bg-slate-800 p-5 rounded-xl shadow-lg hover:scale-105 hover:bg-slate-700 transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold">
              {enrollment.courseId.title}
            </h2>
            <p className="text-gray-400 mt-2">
              {enrollment.courseId.description}
            </p>
            <div className="mt-4">
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${enrollment.progress}%` }}
                ></div>
              </div>

              <p className="mt-2 text-sm text-gray-300">
                Progress: {enrollment.progress}%
              </p>

              {enrollment.progress < 100 && (
                <button
                  onClick={() =>
                    handleProgress(
                      enrollment._id,
                      Math.min(enrollment.progress + 10, 100),
                    )
                  }
                  className="mt-4 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Continue Learning
                </button>
              )}

              {enrollment.progress === 100 && (
                <p className="mt-2 text-green-400 font-medium">
                  ✅ Course Completed
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
