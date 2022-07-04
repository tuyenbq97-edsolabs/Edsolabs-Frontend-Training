import './App.css';
import React, { useEffect } from 'react';
import Login from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Time from './pages/Time';
import Report from './pages/Report';
import { useState } from 'react';
import { useLocalStorage } from 'react-use';
import axios from 'axios';

function App() {
  const [value, setValue, remove] = useLocalStorage('user');
  const [dbUser, setDbUser] = useState({});
  const [dbTags, setDbTags] = useState(null);
  const [dbTasks, setDbTasks] = useState(null);

  if (!value) {
    return <Login setValue={setValue} setDbUser={setDbUser} />;
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Time
              remove={remove}
              value={value}
              setDbTasks={setDbTasks}
              dbTasks={dbTasks}
              setDbTags={setDbTags}
              dbTags={dbTags}
            />
          }
        />
        <Route path="/Report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
