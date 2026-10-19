import { Routes, Route, Link, NavLink, Outlet, useParams, useNavigate } from "react-router";
import { useState } from "react";

/*
Requirements:
- "/" has a small form: name + favorite color, and a Submit button
- On submit, use useNavigate() to go to "/result" and pass the form data:
    navigate("/result", { state: { name, color } })
- "/result" reads the data with useLocation().state and shows "Thanks {name}, you like {color}"
- If someone visits /result directly (no state), redirect them to "/" with <Navigate to="/" />
*/

export default function UseNavigatePractice() {
  return <div>{/* CODE HERE */}</div>;
}
