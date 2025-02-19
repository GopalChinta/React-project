import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";

import Auth from "./components/Auth";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Counter</Link> | <Link to="/form">Form</Link> |
        <Link to="/editor">Editor</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |<Link to="/auth">Auth</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/editor" element={<RichTextEditor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}
