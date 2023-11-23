import React, { useState } from "react";
import Input from "./Input";
import "./style.css";
import TodoList from "./TodoList";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [updateUserInput, setUpdateUserInput] = useState("");
  const [dataList, setDataList] = useState([
    {
      id: 1,
      title: "Task 1",
      status: false,
    },
    {
      id: 2,
      title: "Task 2",
      status: false,
    },
    {
      id: 3,
      title: "Task 3",
      status: false,
    },
  ]);

  const userInputUpdate = (e) => {
    setUserInput(e.target.value);
  };

  const addUserHandler = () => {
    if (userInput) {
      let num = dataList.length + 1;
      let taskAdd = { id: num, title: userInput, status: false };
      setDataList([...dataList, taskAdd]);
      setUserInput("");
    }
  };

  const changeUserInputUpdate = (e) => {
    let updateEntry = {
      id: updateUserInput.id,
      title: e.target.value,
      status: updateUserInput.status ? true : false,
    };

    setUpdateUserInput(updateEntry);
  };

  const updateUserHandler = () => {
    let filterRecords = [...dataList].filter(
      (item) => item.id !== updateUserInput.id
    );
    let updateObj = [...filterRecords, updateUserInput];
    setDataList(updateObj);
    setUpdateUserInput("");
  };

  const deleteUser = (id) => {
    let deleteItem = dataList.filter((item) => item.id !== id);
    setDataList(deleteItem);
  };

  const cancelTask = () => {
    setUpdateUserInput("");
  };

  return (
    <>
      <div className="bg-dark">
        <h1>Employees Information</h1>
        <div className="taskBlock">
          <div className="inputFlex">
            <Input
              userInput={userInput}
              updateUserInput={updateUserInput}
              changeUserInputUpdate={changeUserInputUpdate}
              userInputUpdate={userInputUpdate}
              updateUserHandler={updateUserHandler}
              addUserHandler={addUserHandler}
              cancelTask={cancelTask}
            />           
          </div>
          <div className="noData">
            {dataList && dataList.length ? "" : "No Data..."}
          </div>

          <ul className="taskList">
            {dataList
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((item, index) => {
                return (
                  <li key={item.id}>
                    <TodoList
                      data={item}
                      index={index}
                      setUpdateUserInput={setUpdateUserInput}
                      deleteUser={deleteUser}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
