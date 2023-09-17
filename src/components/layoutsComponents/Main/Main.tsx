import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

const Main: FC = () => {


    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {
    Main
};
