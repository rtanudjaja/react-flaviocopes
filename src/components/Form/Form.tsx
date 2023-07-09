import React, { useState, FormEvent } from "react";

interface FormProps {
  onSubmitEvent: (username: string) => void;
}

const Form = ({ onSubmitEvent }: FormProps) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitEvent && onSubmitEvent(username);
    setUsername("");
  };

  const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  );
};

export default Form;
