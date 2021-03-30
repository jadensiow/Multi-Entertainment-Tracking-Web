import "./styles/index.css";

import AppMovies from "./screens/AppMovies";
import AppManga from "./screens/AppManga";
import AppTvSeries from "./screens/AppTvSeries";
import AppAnime from "./screens/AppAnime";
import AppBooks from "./screens/AppBooks";
import NavbarComponent from "./components/NavbarComponent";

import { Route, Switch, withRouter } from "react-router-dom";
import { GlobalMovieProvider } from "./context/GlobalMovieState";
import { GlobalMangaProvider } from "./context/GlobalMangaState";
import { GlobalTvSeriesProvider } from "./context/GlobalTvSeriesState";
import { GlobalAnimeProvider } from "./context/GlobalAnimeState";
import { GlobalBooksProvider } from "./context/GlobalBooksState";
import { FirstPage } from "./screens/FirstPage";
import ScrollToTop from "./components/Helper/ScrollToTop";

function App() {
  

  return (
    <div className="container">
      <NavbarComponent />
      <Route exact path="/">
        <FirstPage />
      </Route>
      <Switch>
        <Route
          exact
          path="/movies/:listType"
          render={(routeProps) => (
            <GlobalMovieProvider>
              <AppMovies {...routeProps} />
            </GlobalMovieProvider>
          )}
        />

        <Route
          exact
          path="/manga"
          render={(routeProps) => <AppManga {...routeProps} />}
        />

        <Route
          exact
          path="/manga/:listType"
          render={(routeProps) => (
            <GlobalMangaProvider>
              <AppManga {...routeProps} />
            </GlobalMangaProvider>
          )}
        />

        <Route
          exact
          path="/tvseries"
          render={(routeProps) => <AppTvSeries {...routeProps} />}
        />

        <Route
          exact
          path="/tvseries/:listType"
          render={(routeProps) => (
            <GlobalTvSeriesProvider>
              <AppTvSeries {...routeProps} />
              <ScrollToTop/>
            </GlobalTvSeriesProvider>
          )}
        />
        <Route
          exact
          path="/anime"
          render={(routeProps) => <AppAnime {...routeProps} />}
        />

        <Route
          exact
          path="/anime/:listType"
          render={(routeProps) => (
            <GlobalAnimeProvider>
              <AppAnime {...routeProps} />
            </GlobalAnimeProvider>
          )}
        />

        <Route
          exact
          path="/books"
          render={(routeProps) => <AppBooks {...routeProps} />}
        />

        <Route
          exact
          path="/books/:listType"
          render={(routeProps) => (
            <GlobalBooksProvider>
              <AppBooks {...routeProps} />
            </GlobalBooksProvider>
          )}
        />
      </Switch>
    
    </div>
  );
}

export default withRouter(App);
