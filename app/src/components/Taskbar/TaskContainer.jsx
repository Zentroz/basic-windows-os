import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import AllApplication from '../../applications/AllApplications';

const TaskContainer = () => {
  const tasks = useSelector(state => state.windowSession.sessions);
  const taskApp = useSelector(state => state.installedApplication.applications);

  const getTaskIcon = (name) => {
    const app = taskApp.find((app) => app["name"] === name);
    return app["icon"];
  }

  return (
    <div className='task-container flex gap-2 h-full items-center'>
      {tasks.map((t, i) =>
        <Task key={i} sessionId={t["_id"]} taskName={t["name"]} icon={getTaskIcon(t["name"])} />
      )}
    </div>
  )
};

export default TaskContainer;