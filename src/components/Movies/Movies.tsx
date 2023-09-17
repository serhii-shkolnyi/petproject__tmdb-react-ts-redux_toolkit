import React, {FC, PropsWithChildren} from 'react';

import css from "./Movies.module.css";
import {IMovie} from "../../interfaces";
import {Movie} from "../Movie/Movie";


interface IProps extends PropsWithChildren {
    data: IMovie[];
}

const Movies: FC<IProps> = ({data}) => {
    return (
        <div className={"container"}>
            {data &&
                <div className={css.flex}>
                    {data.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            }


        </div>
    );
};

export {
    Movies
};
