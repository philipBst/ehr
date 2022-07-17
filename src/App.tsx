import { Component } from "solid-js";
import { Router, Routes, Route, Navigate } from "solid-app-router";
import { Login } from "./pages";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={() => <Navigate href="/login" />}></Route>
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  );
};

export default App;
