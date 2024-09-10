import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Skills from './components/Skills';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:  <About />
        ,
      },
      {
        path: "Contact/",
        element: <Contact />,
      },
      {
        path: "Project/",
        element: <Project />,
      },
      {
        path: "Skills/",
        element: <Skills />,
      },
    ],
  },
],
  {
    basename: "/portfolio-app", // Set the basename to match your GitHub Pages repo name
  });
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
