import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleIputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 0) {
      return;
    }

    const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };
  
      handleAddTodo(newTodo);
      reset()
  };

  return (
    <>
      <h4>agregar todo</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          value={description}
          onChange={handleIputChange}
          className="form-control"
          type="text"
          name="description"
          placeholder="Aprender... "
          autoComplete="off"
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          agregar
        </button>
      </form>
    </>
  );
};
