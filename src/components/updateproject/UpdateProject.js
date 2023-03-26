import React, { useState } from "react";
import axiosClient from "../../axiosClient/axiosClient";
import "./UpdateProject.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function UpdateProject() {
  const [image, setImage] = useState();
  const [projectName, setProjectName] = useState();
  const [projectDesc, setProjectDesc] = useState();
  const [live, setLive] = useState();
  const [code, setCode] = useState();
  const [data, setData] = useState();
  const [id, setId] = useState();
  const navigate = useNavigate();
  const adminState = useSelector((state) => state.admin);

  async function updateProject(e) {
    e.preventDefault();

    if (adminState.data) {
      const res = axiosClient.put("/project", {
        id,
        image,
        projectName,
        projectDesc,
        live,
        code,
      });
    } else {
      navigate("/");
    }
  }

  if (data) {
    console.log(data);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImage(fileReader.result);
        console.log("img data", fileReader.result);
      }
    };
  }
  return (
    <div className="UpdateProject">
      <div className="container">
        <form onSubmit={updateProject}>
          <div class="py-20 h-screen px-2">
            <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
              <div class="md:flex">
                <div class="w-full px-4 py-4 ">
                  <div class="mb-1">
                    <span class="text-sm">Project ID</span>
                    <input
                      type="text"
                      class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                      required="true"
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-1">
                    <span class="text-sm">Project Name</span>
                    <input
                      type="text"
                      class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                      onChange={(e) => {
                        setProjectName(e.target.value);
                      }}
                    />
                  </div>

                  <div class="mb-1">
                    <span class="text-sm">Project Description</span>
                    <textarea
                      type="text"
                      class="h-24 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"
                      onChange={(e) => {
                        setProjectDesc(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div class="mb-1">
                    <span class="text-sm">Project Live URl</span>
                    <input
                      type="text"
                      class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                      onChange={(e) => {
                        setLive(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-1">
                    <span class="text-sm">Project Code Link</span>
                    <input
                      type="text"
                      class="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
                      onChange={(e) => {
                        setCode(e.target.value);
                      }}
                    />
                  </div>

                  <div class="mb-1">
                    <span>Project Preview</span>

                    <div class="relative border-dotted h-32 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                      <div class="absolute">
                        <div class="flex flex-col items-center">
                          {" "}
                          <i class="fa fa-folder-open fa-3x text-blue-700"></i>{" "}
                          <span class="block text-gray-400 font-normal">
                            Attach you files here
                          </span>{" "}
                        </div>
                      </div>{" "}
                      <input
                        type="file"
                        class="h-full w-full opacity-0"
                        name=""
                        onChange={handleImageChange}
                        required="true"
                      />
                    </div>
                  </div>

                  <div class="mt-3 text-right">
                    <button class="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700">
                      Update
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

export default UpdateProject;
