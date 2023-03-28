import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchProject } from "../redux/slices/projectSlices";
import "./ShowProject.scss";
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import axiosClient from "../../axiosClient/axiosClient";

function ShowProject() {
  const disptach = useDispatch();
  const state = useSelector((state) => state.project);
  const adminState = useSelector((state) => state.admin);
  const navigate = useNavigate();

  const success = (msg) => {
    toast.success(msg);
  };
  const error = (msg) => {
    toast.error(msg);
  };

  useEffect(() => {
    if (adminState.data) {
      disptach(fetchProject());
    }
  }, []);

  async function deleteProject(e) {
    try {
      if (adminState.data) {
        const res = await axiosClient.post("/project/delete", {
          id: e,
        });
        if (res.data.status === "ok") {
          success(res.data.result);
        } else {
          error(res.data.message);
        }
      } else {
        error("Unauthorized Access");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      error(err.message);
    }
  }
  if (state.isLoading) {
    return (
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    );
  }

  return (
    <div className="ShowProject">
      <Toaster position="top-center" reverseOrder={false} />

      <table>
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Delete Project</th>
          </tr>
        </thead>
        <tbody>
          {adminState.data &&
            state.data &&
            state.data.result.map((e) => {
              return (
                <tr>
                  <th>{e._id}</th>
                  <td>{e.projectName}</td>
                  <td>{e.projectDesc}</td>
                  <td>
                    <AiFillDelete
                      onClick={() => {
                        deleteProject(e._id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowProject;
