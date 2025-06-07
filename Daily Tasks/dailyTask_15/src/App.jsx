import { useState, useContext } from "react";
import { StudentContext } from "../StudentContext";
import FeedbackForm from "./FeedbackForm";
import "./App.css";

function App() {
  const student = useContext(StudentContext);

  return (
    <>
      {/* <h1>Student Name: {student.name}</h1>
      <h1>Student Age: {student.age}</h1>
      <h1>Student ID: {student.id}</h1> */}
      <FeedbackForm />
    </>
  );
}

export default App;
