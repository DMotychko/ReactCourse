import React, {FC} from 'react';
import {IQuote} from "../../models/IQuote";
import QuoteComponent from "../quote/QuoteComponent";

const QuotesComponent: FC<{quotes: IQuote[]}> = ({quotes}) => {
    return (
        <div>
            {quotes.map((quote: IQuote, index: number) => <QuoteComponent quote={quote} key={index}/>)}
        </div>
    );
};

export default QuotesComponent;