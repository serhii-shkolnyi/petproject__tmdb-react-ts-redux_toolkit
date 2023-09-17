import React, {FC} from 'react';

import css from "./MoviesBySearchPage.module.css";
import { useAppSelector} from "../../hooks";
import {Movie} from "../../components";

const MoviesBySearchPage: FC = () => {

    const {search} = useAppSelector(state => state.movie);

    return (
        <div className={"container"}>
            {search &&
                <div className={css.flex}>
                    {search.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            }
        </div>
    );
};

export {MoviesBySearchPage};
