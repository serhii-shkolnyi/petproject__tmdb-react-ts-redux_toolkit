import React, {FC} from 'react';

import {CarouselMain} from "../../CarouselMain/CarouselMain";
import {Carousel} from "../../Carousel/Carousel";

const Main: FC = () => {
    return (
        <div>
            <CarouselMain/>

            <Carousel/>
            <Carousel/>
            <Carousel/>
            <Carousel/>
            <Carousel/>

        </div>
    );
};

export {
    Main
};
