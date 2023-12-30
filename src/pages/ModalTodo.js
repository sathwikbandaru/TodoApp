import React, { useState } from "react";
const MoadlTodo = ({ data, key, task, i, setTask }) => {
  // const [task, setTask] = useState([]);
  const [formData, setFormData] = useState(data);
  const getData = (e) => {
    let temp = [...task];
    temp[i] = formData;
    setTask(temp);
  };
  const target = `exampleModal${i}`;
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        type="button"
        className="btn"
        data-toggle="modal"
        data-target={"#" + target}
      >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.taskname}</h5>

            <div style={{ display: "flex" }}>
              <span className="card-link">
                <h6>Start Date</h6>
                <h6>{data.start}</h6>
              </span>
              <span className="card-link">
                <h6>End Date</h6>
                <h6>{data.deadline}</h6>
              </span>
            </div>
          </div>
        </div>
      </button>
      <div
        className="modal fade"
        id={target}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add new task
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name of the task</label>
                  <input
                    type="text"
                    className="form-control"
                    name="taskname"
                    value={formData.taskname}
                    onChange={handleInput}
                    placeholder="Enter task"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <input
                        type="date"
                        value={formData.start}
                        name="start"
                        onChange={handleInput}
                        className="form-control"
                        placeholder="Enter Start Date"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Deadline</label>
                      <input
                        type="date"
                        className="form-control"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInput}
                        placeholder="Enter Deadline"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    className="form-control form-control-lg mb-3"
                    aria-label=".form-control-lg example"
                    name="status"
                    onChange={handleInput}
                    value={formData.status}
                    required
                  >
                    <option value={0} selected>
                      To Do
                    </option>
                    <option value={1}>in Progress</option>
                    <option value={2}>in Review</option>
                    <option value={3}>Completed</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={getData}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoadlTodo;
