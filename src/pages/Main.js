import { useState } from "react";
import MoadlTodo from "./ModalTodo";
function Main() {
  const [task, setTask] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [start, setStart] = useState("");
  const [status, setStatus] = useState(0);
  const [deadline, setDeadline] = useState("");
  const getData = (e) => {
    setTask([
      ...task,
      {
        taskname: taskValue,
        status: status,
        start: start,
        deadline: deadline,
      },
    ]);
    setTaskValue("");
    setStart("");
    setStatus(0);
    setDeadline("");
  };
  return (
    <>
      <div className="row main">
        <div className="col-md-3 todo">
          <h2 className="todoClass">
            <div className="circle"></div>
            To Do
          </h2>
          {task.length > 0 ? (
            task.map((ele, i) => {
              return (
                <MoadlTodo
                  i={i}
                  task={task}
                  setTask={setTask}
                  key={i}
                  data={ele}
                />
              );
            })
          ) : (
            <h5></h5>
          )}
          <br />
          {/* cards */}
          <>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-primary addtask"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add new task
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
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
                          name="task"
                          value={taskValue}
                          onChange={(e) => setTaskValue(e.target.value)}
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
                              value={start}
                              name="start"
                              onChange={(e) => setStart(e.target.value)}
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
                              value={deadline}
                              name="deadline"
                              onChange={(e) => setDeadline(e.target.value)}
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
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
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
        </div>
        <div className="col-md-3 progres">
          <h2 className="progressss">
            <div className="circle"></div>
            In Progress
          </h2>
          <>
            {task.length > 0 ? (
              task.map((ele, i) => {
                return ele.status == "1" ? (
                  <>
                    <MoadlTodo
                      i={i}
                      task={task}
                      setTask={setTask}
                      key={i}
                      data={ele}
                    />
                  </>
                ) : (
                  <></>
                );
              })
            ) : (
              <></>
            )}
          </>
        </div>
        <div className="col-md-3 review">
          <h2 className="review11">
            <div className="circle"></div>
            In Review
          </h2>
          <>
            {task.length > 0 ? (
              task.map((ele, i) => {
                return ele.status == "2" ? (
                  <>
                    <MoadlTodo
                      i={i}
                      task={task}
                      setTask={setTask}
                      key={i}
                      data={ele}
                    />
                  </>
                ) : (
                  <></>
                );
              })
            ) : (
              <></>
            )}
          </>
        </div>
        <div className="col-md-3 complete">
          <h2 className="completed">
            <div className="circle"></div>
            Completed
          </h2>
          <>
            {task.length > 0 ? (
              task.map((ele, i) => {
                return ele.status == "3" ? (
                  <>
                    <MoadlTodo
                      i={i}
                      task={task}
                      setTask={setTask}
                      key={i}
                      data={ele}
                    />
                  </>
                ) : (
                  <></>
                );
              })
            ) : (
              <></>
            )}
          </>
        </div>
      </div>
    </>
  );
}
export default Main;
