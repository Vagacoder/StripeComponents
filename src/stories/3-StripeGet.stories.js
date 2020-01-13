import React from 'react';
import { action } from '@storybook/addon-actions';
import StripeGetExample from '../StripeGetExample';
import GetStripeCustomer from '../GetStripeCustomer';
import GetToken from '../GetToken';
import GetCreditCard from '../GetCreditCard';

export default {
    title: "Stripe API GET Examples",
    component: StripeGetExample,
}

export const GetAStripeCustomer = () => {

    const customerId = "cus_GWVqZ2sDC0xCyn";

    return (
        <GetStripeCustomer customerId={customerId} />
    );
}

export const GetCreditCardToken = () => {
    const tokenId = "tok_amex";

    return (
        <GetToken tokenId={tokenId} />
    );
}

export const GetACreditCard = () => {
    const customerId = 'cus_GWVWNR6J0ddIRA';
    const creditCardId = 'card_1FzSUzF2Ms6BsudzBSKxgEWD';

    return <GetCreditCard customerId={customerId}
        creditCardId={creditCardId} />
}