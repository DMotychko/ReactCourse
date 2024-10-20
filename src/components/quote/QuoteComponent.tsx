import React, {FC} from 'react';
import {IQuote} from "../../models/IQuote";
import './QuoteComponent.css'

const QuoteComponent: FC<{quote: IQuote}> = ({quote}) => {
    return (
        <div>
            <p className='quote'>{quote.quote}</p>
        </div>
    );
};

export default QuoteComponent;