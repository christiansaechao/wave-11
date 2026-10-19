import { Routes, Route, Link, NavLink, Outlet, useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";

/*
Requirements:
- "/users" lists users fetched from https://dummyjson.com/users?limit=10, each a <Link> to "/users/:id"
- "/users/:id" reads the id with useParams() and fetches https://dummyjson.com/users/{id}
- The detail page shows the user's name, email, age and image
- Add a "← Back to users" link
- Visit /users/99999 - show a "User not found" message instead of crashing
*/

export default function UrlParams() {
  return <div>{/* CODE HERE */}</div>;
}
