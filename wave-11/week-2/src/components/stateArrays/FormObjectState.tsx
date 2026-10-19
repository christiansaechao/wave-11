import { useState } from "react";

/*
Requirements:
- Sign-up form with: username (text), plan (select: free / pro / team), bio (textarea)
- Store ALL fields in ONE state object: { username: "", plan: "free", bio: "" }
- Use ONE change handler for every field: setForm({ ...form, [e.target.name]: e.target.value })
- Show a live character count under bio, max 150 characters
- On submit: e.preventDefault(), show an error if username is empty, otherwise show the submitted data below and clear the form
*/

export default function FormObjectState() {
  return <div>{/* CODE HERE */}</div>;
}
