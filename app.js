import express from "express";
import employees from "#db/employees";

const app = express();
export default app;

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (request, response) => {
  response.send(employees);
});

app.get("/employees/random", (request, response) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  response.send(randomEmployee);
});

app.get("/employees/:id", (request, response) => {
  const id = Number(request.params.id);
  const employee = employees.find((employee) => employee.id === id);
  if (!employee) {
    return response.status(404).send("Employee not found.");
  }
  response.send(employee);
});
