import React from "react";

const Input = (props) => {
  const {
    updateUserInput,
    userInput,
    changeUserInputUpdate,
    userInputUpdate,
    updateUserHandler,
    addUserHandler,
    cancelTask,
  } = props;
  return (
    <>
      <input
        type="text"
        value={updateUserInput ? updateUserInput.title : userInput}
        onChange={
          updateUserInput
            ? (e) => changeUserInputUpdate(e)
            : (e) => userInputUpdate(e)
        }
        className="form-input"
      />
      <button
        className={updateUserInput ? "updateBtn btnSubmit" : "addBtn btnSubmit"}
        onClick={updateUserInput ? updateUserHandler : addUserHandler}
        type="submit"
      >
        {updateUserInput ? "Update Task" : "Add Task"}
      </button>
      {updateUserInput ? (
        <button className="cancelBtn btnSubmit" onClick={cancelTask}>
          Cancel
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Input;
