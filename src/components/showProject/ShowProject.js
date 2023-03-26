import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchProject } from "../redux/slices/projectSlices";
import "./ShowProject.scss";

function ShowProject() {
  const disptach = useDispatch();
  const state = useSelector((state) => state.project);
  const data = useSelector((state) => state.admin);
  const adminState = useSelector((state) => state.admin);
  const navigate = useNavigate();

  useEffect(() => {
    if (adminState.data) {
      disptach(fetchProject());
    }
  }, []);

  console.log(data);
  if (state.isLoading) {
    return (
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    );
  }
  console.log(state);

  return (
    <div className="ShowProject">
      <table>
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Project Name</th>
            <th>Project Description</th>
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowProject;
