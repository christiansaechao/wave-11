import { Routes, Route, Link, NavLink, Outlet, useParams, useNavigate } from "react-router";

/*
Requirements:
- Add a catch-all route: <Route path="*" element={<NotFound />} />
- NotFound shows a big "404", the message "Page not found", and a <Link> back home
- Test it by visiting /asdf
*/

export default function NotFound() {
  return <div>{/* CODE HERE */}</div>;
}
