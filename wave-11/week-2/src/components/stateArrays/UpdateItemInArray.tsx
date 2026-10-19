import { useState } from "react";

/*
Requirements:
- Render the playlist below with a 👍 button next to each song
- Clicking 👍 increases ONLY that song's likes by 1
- Use .map + spread to update one item: songs.map(s => s.id === id ? { ...s, likes: s.likes + 1 } : s)
- Show total likes across all songs at the top (use .reduce)
*/

const startingSongs = [
  { id: 1, title: "Blinding Lights", likes: 0 },
  { id: 2, title: "Levitating", likes: 0 },
  { id: 3, title: "As It Was", likes: 0 },
];

export default function UpdateItemInArray() {
  return <div>{/* CODE HERE */}</div>;
}
