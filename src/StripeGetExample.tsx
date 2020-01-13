import React from 'react';
import GetStripeCustomer from './GetStripeCustomer';
import GetToken from './GetToken';
import GetCreditCard from './GetCreditCard';

const StripeGetExample = (props: any) => {

	return (
		<React.Fragment>
			<h4>2.1. Retrieve a customer</h4>
			<GetStripeCustomer customerId={props.customerId} />
			<h4>2.2. Retrieve a token</h4>
			<GetToken tokenId="tok_amex" />
			<h4>2.3. Retrieve a credit card</h4>
			<GetCreditCard customerId={props.customerId}
				creditCardId={props.creditCardId} />
		</React.Fragment>
	);
}

export default StripeGetExample;