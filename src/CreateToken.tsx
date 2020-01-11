import React, { useState } from 'react';
import StripeSettings from './StripeSettings';
import * as appConfig from './StripeConfig.json';

const CreateToken = (props: any) => {

    const KEY = appConfig.api_key;
    const [cardNumber, setCardNumber] = useState(0);
    const [expMonth, setExpMonth] = useState(0)
    const [expYear, setExpYear] = useState(0)

    const handleCardNumber = (event: any) => {
        let number = event.target.value;
        setCardNumber(Number.parseInt(number));
    }
    return (
        <div>
            <p>Enter card number</p>
            <input placeholder="1000200030004000" value={cardNumber} onChange={handleCardNumber} />
            <p>Enter expiration date</p>
            <input value={expMonth} onChange={handleCardNumber} />
            <input value={expYear} onChange={handleCardNumber} />
        </div>
    );
}

export default CreateToken;
