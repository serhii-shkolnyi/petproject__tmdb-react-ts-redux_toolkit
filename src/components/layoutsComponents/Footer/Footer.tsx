import React, {FC} from 'react';

import css from "./Footer.module.css";
const Footer: FC = () => {
    return (
        <div className={`container ${css.wrapper}`}>
            <div>Serhii Shkonyi 2023</div>
        </div>
    );
};

export {
    Footer
};
