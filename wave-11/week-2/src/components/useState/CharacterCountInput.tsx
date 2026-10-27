import { useState } from "react";

/*
Requirements:
- Create a textarea input
- Show character count
- Limit to 20 characters
- If limit exceeded:
  - Show warning or change style
  - Disable submit button
*/

export default function CharacterCounter() {
  const [characters, setCharacters] = useState(""); // stores our text value in the textarea
  const limitExceeded = characters.length >= 20;

  return (
    <div>
      <textarea onChange={(e) => setCharacters(e.target.value)} />
      {limitExceeded && <p>Number of words exceeded!</p>}
      <button disabled={limitExceeded}>Submit</button>
      <p>Current length: {characters.length}</p>
    </div>
  );
}
