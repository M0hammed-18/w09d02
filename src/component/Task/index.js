// //In this file there is a problem, I will try to fix it and upload to github

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";

// const Task = () => {
//   const navigate = useNavigate();
//   const BASE_URL = process.env.REACT_APP_BASE_URL;
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");
//   const [check, setCheck] = useState("");

//   useEffect(() => {
//     gettask();
//   }, []);
//   useEffect(() => {
//     const tokenn = localStorage.getItem("token");
//     setCheck(tokenn);
//     gettask();
//   }, []);
//   const gettask = async () => {
//     const res = await axios.get(`${BASE_URL}/tasks`, {
//       headers: {
//         Authorization: `Bearer${check}`,
//       },
//     });
//     setTask(res.data);
//   };

//   const addtask = async () => {
//     await axios.post(
//       `${BASE_URL}/task`,
//       { task },
//       {
//         headers: {
//           Authorization: `Bearer${check}`,
//         },
//       }
//     );
//     gettask(check);

//     const updateTask = async (id) => {
//       await axios.put(
//         `${BASE_URL}/editTask/${id}`,
//         {
//           task: updateTask,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${check}`,
//           },
//         }
//       );
//       gettask(check);
//     };

//     const deleteTask = async (id) => {
//       await axios.delete(`${BASE_URL}/delete/${id}`, {
//         headers: {
//           Authorization: `Bearer ${check}`,
//         },
//       });
//       gettask(check);
//     };

//     const logOut = () => {
//       localStorage.clear();
//       navigate("/login");
//     };
//     return (
//       <div>
//         <input
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="new Task"
//         />
//         <button onClick={addtask}>Add</button>

//         {tasks.map((item, i) => (
//           <ul>
//             <li key={i}>{item.task}</li>
//             <div>
//               <button  onClick={() => updateTask(task._id)}>
//                 Edit
//               </button>
//               <button  onClick={() => deleteTask(task._id)}>
//                 Delete
//               </button>
//             </div>
//           </ul>
//         ))}
//         <button  onClick={logOut}>
//           logout
//         </button>
//       </div>
//     );
//   };
// };

// export default Task;

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Task = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [task, setTask] = useState([]);
  useEffect(() => {
    taskshow();
  }, []);

  const taskshow = async () => {
    const result = await axios.get(`${BASE_URL}/tasks`);
    setTask(result.data);
  };


  const del = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/delete/${id}`);
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };
  const [newtask, setNewtask] = useState("");
  const addtask = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/task`, {
        name: newtask,
      });
      taskshow();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        onChange={(e) => {
          setNewtask(e.target.value);
          console.log(e);
        }}
        placeholder="add task"
      />{" "}
      <button onClick={addtask}>add</button>
      {task.map((e) => (
        <ul>
          <li>
            {e.name}
            <button
              onClick={() => {
                del(e._id);
              }}
            >
              delete
            </button>
          </li>
          {console.log()}{" "}
        </ul>
      ))}
    </div>
  );
};

export default Task;
