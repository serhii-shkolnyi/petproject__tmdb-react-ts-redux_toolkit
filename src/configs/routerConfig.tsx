import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {MovieNowPlayingPage} from "../pages";

const routerConfig = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: "top",
                element: <MovieNowPlayingPage/>
            }
        ]
    }
]);

export {
    routerConfig
};
