import Home from "pages/Home";
import MoviesPage from "pages/MoviesPage";
import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/movies'>Movies</NavLink>
          </li>
        </nav>
      </header>
      <main>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/movies" element={ <MoviesPage/> }/>
        <Route path="/movies/:moviesId" element={ <div> Element</div>}/>
      </Routes>
      </main>
    </div>
  );
};
