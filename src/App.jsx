import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Loader } from 'components';
import css from './App.module.css'

const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyMovies = lazy(() => import('./pages/Movies'));
const LazyMovieDetails = lazy(() => import('./pages/MovieDetails'));

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className={css.nav_wrapper}>
          <Link to="/" className={css.nav}>Home</Link>
          <Link to="/movies" className={css.nav}>Movies</Link>
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
