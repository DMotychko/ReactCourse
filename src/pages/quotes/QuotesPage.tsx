import React, {useEffect, useState} from 'react';
import PaginationButtons from "../../components/pagination/PaginationButtons";
import {getAllQuotes} from "../../services/api.sercive";
import {IQuote} from "../../models/IQuote";
import {useParams, useSearchParams} from "react-router-dom";
import QuotesComponent from "../../components/quotes/QuotesComponent";

const QuotesPage = () => {
    const [quotes, setQuotes] = useState<IQuote[]>([])
    const [query, setQuery] = useSearchParams({page: '1'})
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page')
        if(page) {
            getAllQuotes(+page).then(value => {
                setQuotes(value.quotes)
                setFlag(value.flag)
            })
        }
    }, [query]);

    return (
        <div>
            <QuotesComponent quotes={quotes}/>
            <PaginationButtons flag={flag}/>
        </div>
    );
};

export default QuotesPage;