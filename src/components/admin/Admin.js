import "./Admin.scss";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { adminLogin } from "../redux/slices/adminSlice";

function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(adminLogin());
    navigate("/");
  }

  return (
    <div className="Admin">
      <div className="container">
        <div className="head">
          <button
            className="login"
            onClick={() => {
              navigate("/admin/login");
            }}
          >
            Login
          </button>
          <h1>Admin Panel</h1>
          <div className="logo">
            <button className="logout" onClick={logout}>
              <FiLogOut />
              <p>Logout</p>
            </button>
          </div>
        </div>
        <div className="panel">
          <Link to={"project/show/"}>
            <div className="box">Get All Project</div>
          </Link>
          <Link to={"project/add/"}>
            <div className="box">Add New Project</div>
          </Link>
          <Link to={"project/update/"}>
            <div className="box">Update Project</div>
          </Link>
          <Link to={"project/delete/"}>
            <div className="box">Delete Project</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
