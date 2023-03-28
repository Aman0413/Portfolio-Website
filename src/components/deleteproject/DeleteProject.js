import React, { useState } from "react";
import axiosClient from "../../axiosClient/axiosClient";
import "./DeleteProject.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function DeleteProject() {
  const success = (msg) => {
    toast.success(msg);
  };
  const error = (msg) => {
    toast.error(msg);
  };
  const [id, setId] = useState("");
  const adminState = useSelector((state) => state.admin);
  const navigate = useNavigate();

  async function deleteProject(e) {
    e.preventDefault();
    try {
      if (adminState.data) {
        const res = await axiosClient.post("/project/delete", {
          id,
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
  return (
    <div className="DeleteProject">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <form onSubmit={deleteProject}>
          <div class="py-20 h-screen px-2">
            <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
              <div class="md:flex">
                <div class="w-full px-4 py-4 ">
                  <div class="mb-1">
                    <span class="text-sm">Project ID</span>
                    <input
                      type="text"
                      class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                      required="true"
                    />
                  </div>
                  <div class="mt-3 text-right">
                    <button class="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteProject;
