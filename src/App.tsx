import React from 'react';
import CreateStripeCustomer from './CreateStripeCustomer';
import CreateToken from './CreateToken';

var newCustomer1 = {
    firstName: "Alex",
    lastName: "Smith",
    address: "1000 State Street",
    city: "Smalltown",
    state: "CA",
    country: "USA",
    zipcode: "91000",
    email: "as@small.com",
    phone: "8881230000",
    companyName: "Bloom",
    webUrl: "www.bloom.net",
}

var newCreditCard1 = {
    card: {
        number: 4929349297882731,
        exp_month: 1,
        exp_year: 2030,
        cvc: 618,
    }
}

const App = (props: any) => {
    return (
        <div>
            <h4>1. Create Stripe Customer</h4>
            <CreateStripeCustomer {...newCustomer1} />
            <h4>2. Create Credit Card</h4>
            <CreateToken />
            <h4>3. Balance</h4>
        </div>
    );
}

export default App;