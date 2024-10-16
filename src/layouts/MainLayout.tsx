import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/paginationComponent/PaginationComponent";

const MainLayout = () => {


    return (
        <div>
            main layout

            <PaginationComponent />
        </div>
    );
};

export default MainLayout;