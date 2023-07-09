import React, { useState, useContext, FormEvent } from "react";
import { ThemeContext, ThemeContextType } from '../../App';

interface FormProps {
  onSubmitEvent: (username: string) => void;
}

const Form = ({ onSubmitEvent }: FormProps) => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
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
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
      <button type="submit">Add card</button>
    </form>
  );
};

export default Form;
