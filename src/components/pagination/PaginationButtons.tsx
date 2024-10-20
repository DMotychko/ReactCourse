import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationButtons: FC<{flag: boolean}> = ({flag}) => {
    const [query, setQuery] = useSearchParams({page: '1'})

    const clickPrevHandler = () => {
        const page = query.get('page')
        if(page && +page > 1) {
            let currentPage = +page
            currentPage--
            setQuery({page: currentPage.toString()})
        }
    };
    const clickNextHandler = () => {
        const page = query.get('page')
        if(page) {
            let currentPage = +page
            currentPage++
            setQuery({page: currentPage.toString()})
        }
    };

    return (
        <div>
            <button onClick={clickPrevHandler}>prev</button>
            <button onClick={clickNextHandler} disabled={flag}>next</button>
        </div>
    );
};

export default PaginationButtons;