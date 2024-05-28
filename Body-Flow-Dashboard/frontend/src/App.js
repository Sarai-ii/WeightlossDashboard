//DEPENDENCIES
import { useRoutes } from 'react-router-dom'
// Stylesheet
import './App.css';
// Firebase
import { AuthProvider } from "./context/authContext";
//COMPONENTS
// import Login from "./components/auth/login";
// import Register from "./components/auth/register";

// import Header from "./components/header";
// import Home from "./components/home";


function App() {
  return (
    <div className="App">
      <header className="">
        {/* <Routes */}
        <a
          className=""
          href="https://github.com/Sarai-ii/BodyFlow-FrontEnd"
        >
          Local Repository
        </a>
        {/* <button 
        onClick={loginWithGoogle}>
          Login With Google 
        </button> */}
      </header>
    </div>
  );
}

export default App;
