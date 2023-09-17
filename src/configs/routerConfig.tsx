import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, MovieLayout} from "../layouts";
import {MovieNowPlayingPage, MoviesAllPage, MoviesByGenrePage, MovieTopRatedPage, MovieUpcomingPage} from "../pages";
import {MoviesBySearchPage} from "../pages/MoviesBySearchPage/MoviesBySearchPage";
import {MovieDetailsPage} from "../pages/MovieDetailsPage/MovieDetailsPage";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";


const routerConfig = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'movie'}/>
            },
            {
                path: "movie",
                element: <MovieLayout/>,
                children: [
                    {
                        index: true,
                        element:<Navigate to={'all'}/>
                    },
                    {
                        path: "all",
                        element: <MoviesAllPage/>
                    },
                    {
                        path: "now",
                        element: <MovieNowPlayingPage/>
                    },
                    {
                        path: "upcoming",
                        element: <MovieUpcomingPage/>
                    },
                    {
                        path: "top-rated",
                        element: <MovieTopRatedPage/>
                    },
                    {
                        path: "genre/:id",
                        element: <MoviesByGenrePage/>
                    },
                    {
                        path: "search",
                        element: <MoviesBySearchPage/>
                    }
                ]
            },
            {
                path: "movie/:id",
                element: <MovieDetailsPage/>
            },
            {
                path: "*",
                element: <NotFoundPage/>
            }

        ]
    }
]);

export {
    routerConfig
};
