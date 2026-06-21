import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-slate-900 text-white px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold">LearnHub</h1>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center mt-3 md:mt-0">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>

        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>

            {user?.role === "Admin" && <Link to="/admin">Admin</Link>}

            <span className="text-blue-400">{user?.name}</span>

            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
