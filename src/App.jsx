import React, { useState } from "react";
import './App.css';


function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);

  const generatePassword = () => {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = lowerCaseLetters;

    if (includeUpperCase) characters += upperCaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSpecial) characters += specialCharacters;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>

      <div className="controls">
        <label>
          Password Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="6"
            max="20"
          />
        </label>

        <label>
          Include Uppercase Letters
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
          />
        </label>

        <label>
          Include Numbers
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </label>

        <label>
          Include Special Characters
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={(e) => setIncludeSpecial(e.target.checked)}
          />
        </label>
      </div>

      <div className="password-display">
        <p>{password}</p>
      </div>

      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default App;
