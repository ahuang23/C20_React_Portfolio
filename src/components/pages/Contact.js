import React, { useState } from "react";
import { validateEmail, validateText } from '../utils/helpers'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const [errorName, setErrorName] = useState("");
  // const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue); 
    }
  };
  
  const handleFormSubmit = (e) => {

    e.preventDefault();

    if (!validateText(name)) {
      setErrorMessage(`Please enter a name.`);
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
    if (!validateText(message)) {
      setErrorMessage(`Please leave a message.`);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    alert("Email generated");
  };
  return (
    <div className="main">
      <form className="form title" >
        <br />
        <h1>CONTACT</h1>
        <br />
        <input
          className="input"
          value={name}
          id="name"
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
        ></input>
        <p>
          {errorMessage && (
            <span className="error-text">{errorMessage}</span>
          )}
        </p>
        <input
          data-testid="email"
          className="input"
          value={email}
          id="email"
          type="email"
          placeholder="Your Email"
          onChange={handleInputChange}
        ></input>
        <p>
          {errorMessage && (
            <span className="error-text">{errorMessage}</span>
          )}
        </p>
        <textarea
          data-testid="text-box"
          value={message}
          id="message"
          placeholder="Your Message"
          type="text"
          onChange={handleInputChange}
        ></textarea>
        <p>
          {errorMessage && (
            <span className="error-text">{errorMessage}</span>
          )}
        </p>
        <input
          data-testid="submitButton"
          type="submit"
          className="Submit"
          value="Submit"
          onClick={handleFormSubmit}
        ></input>
      </form>
    </div>
  );

}
export default Contact;