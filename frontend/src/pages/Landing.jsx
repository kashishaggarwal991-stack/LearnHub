import Header from "../components/Header";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[90vh] bg-slate-900 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn Smarter, Grow Faster
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore courses, track progress, and level up your career.
          </p>

          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Explore Courses
          </button>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="bg-slate-900 p-6 rounded-xl hover:scale-105 hover:bg-slate-800 transition-all duration-300">
            Popular Learning Paths
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-400">
                HTML, CSS, JavaScript, React and modern UI design.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Backend Development
              </h3>
              <p className="text-gray-400">
                Node.js, Express, APIs and database management.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Full Stack MERN</h3>
              <p className="text-gray-400">
                Build complete applications from scratch.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                DSA & Problem Solving
              </h3>
              <p className="text-gray-400">
                Crack coding interviews with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
            Why LearnHub?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-2xl mb-3">📚</h3>
              <h4 className="font-semibold mb-2">Structured Learning</h4>
              <p className="text-gray-400">
                Follow organized learning paths from beginner to advanced.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-2xl mb-3">🎯</h3>
              <h4 className="font-semibold mb-2">Practical Courses</h4>
              <p className="text-gray-400">
                Learn through real-world examples and projects.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-2xl mb-3">📈</h3>
              <h4 className="font-semibold mb-2">Progress Tracking</h4>
              <p className="text-gray-400">
                Track completed lessons and stay motivated.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center">
              <h3 className="text-2xl mb-3">🔒</h3>
              <h4 className="font-semibold mb-2">Secure Access</h4>
              <p className="text-gray-400">
                JWT authentication keeps your learning data safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">1</h3>
              <p>Create Account</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">2</h3>
              <p>Browse Courses</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">3</h3>
              <p>Enroll & Learn</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">4</h3>
              <p>Track Progress</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Landing;
