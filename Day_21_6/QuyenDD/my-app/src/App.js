import './App.scss';
import Login from './pages/Login';
import Timer from './pages/Timer';
import Report from './pages/Report';
import { useLocalStorage } from 'react-use';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [value, setValue, remove] = useLocalStorage('user');
  const [tasks, setTasks] = useState(null);
  const [tags, setTags] = useState(null);

  if (!value) {
    return <Login setValue={setValue} />;
  }
  console.log(value);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Timer
              value={value}
              tasks={tasks}
              tags={tags}
              remove={remove}
              setTags={setTags}
              setTasks={setTasks}
            />
          }
        />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
