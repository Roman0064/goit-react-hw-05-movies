import { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Loader } from 'components';
import css from './App.module.css'

const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyMovies = lazy(() => import('./pages/Movies'));
const LazyMovieDetails = lazy(() => import('./pages/MovieDetails'));

const App = () => {
  return (
    <div className={css.app}>
      <header className={css.head}>
        <nav className={css.nav_wrapper}>
          <NavLink to="/" className={({ isActive }) =>
              isActive ? css.active : css.nav}>
              Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) =>
              isActive ? css.active : css.nav}>
              Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/movies" element={<LazyMovies />} />
          <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
