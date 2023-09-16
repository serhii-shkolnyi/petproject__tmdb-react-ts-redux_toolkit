import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";

const routerConfig = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,

    }
]);

export {
    routerConfig
};
