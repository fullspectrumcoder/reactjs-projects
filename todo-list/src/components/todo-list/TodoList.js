import React from "react";

const TodoList = (props) => {
  const { data, index, deleteUser, setUpdateUserInput } = props;
  return (
    <div className="todoBox">
      <div className="number">{index + 1}</div>
      <h2>{data.title}</h2>
      <div className="delete_edit_icons">
        <span
          onClick={() => {
            setUpdateUserInput({
              id: data.id,
              title: data.title,
              status: data.status ? true : false,
            });
          }}
        >
          Edit
        </span>
        <span onClick={() => deleteUser(data.id)}>Delete</span>
      </div>
    </div>
  );
};

export default TodoList;
