import { useState } from "react";

/*
Requirements:
- Create inputs for:
  - First Name
  - Last Name
  - Age
  - Email
- Store values using state (controlled inputs)
- On submit:
  - Prevent page reload
  - Display submitted values or conditional success message
- Clear form after submission
*/

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(3);
  const [email, setEmail] = useState("");

  const [errorMsg, setErrorMsg] = useState<string>();

  // http://localhost:3000/api/signup
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // default behavior of a page submission:prevent propagation

    const formData = JSON.stringify({
      firstName,
      lastName,
      age,
      email,
    });

    // binary, multipart form data, files, folderse, zips, pdfs, form data

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer alksdjfoibj08942jklasdjf0izjxcaskdlfjasdfkj",
        },
        body: formData,
      };

      const response = await fetch("http://localhost:3000/api/signup", options);
      if (!response.ok) {
        throw new Error(`Sign up failed: ${response.status}`);
      }

      // home page, settings, account, 
      // request this new user information after success
      // - authenticated right now
      // - store inside database
      // why don't we request the user information later?
      // - 
      console.log("reroute to home");
        // - in home we request the user information
    } catch (error) {
      setErrorMsg("error");
      console.error("Error sending data", error);
    }
  }

  return (
    <div>
      {!errorMsg && <div>{errorMsg}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="FirstName">First Name: {firstName}</label>
        <input
          type="text"
          id="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="LastName">Last Name:</label>
        <input
          type="text"
          id="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="Age">Age:</label>
        <input
          type="number"
          id="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />

        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
