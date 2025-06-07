import { createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const student = {
    id: 1,
    name: "Aman",
    age: "20",
  };

  return <StudentContext.Provider value={student}>{children}</StudentContext.Provider>;
};
