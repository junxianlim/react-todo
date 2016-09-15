import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Tasks from '../containers/tasks.jsx';
import CreateTaskForm from './create_task_form.jsx';

function Dashboard() {
  return (
    <div className="full-page">
      <div className="content-lg">
        <Tasks />
        <CreateTaskForm />
        <div className="text-center">
          <Link to="/" className="btn btn-success">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
