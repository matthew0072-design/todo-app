import React from "react";
import classes from "./Navigation.module.css";
import { Link, Switch, Route } from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import AddTask from "../addTask/AddTask";
import AllTasks from "../AllTasks/Alltasks";
import EditTask from "../editTask/editTask";

const Navigation = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Navigation}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-task">Add Task</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className={classes.Signup}>
            <Link to="/signup" className={classes.Signup}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact component={AllTasks} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/edit/:id" component={EditTask} />
      </Switch>
    </React.Fragment>
  );
};

export default Navigation;
