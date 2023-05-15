import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// pages
import Amplop from '../pages/Amplop';
import MainPages from '../pages/MainPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages />,
  },
  {
    path: "/Amplop",
    element: <Amplop />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;