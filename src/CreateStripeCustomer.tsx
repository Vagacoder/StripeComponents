import React from 'react';
import { stripePost } from './Stripe';
import { IStripeCustomer } from './Stripe';

const CreateStripeCustomer: React.SFC<IStripeCustomer> = (props) => {

  const handleOnClick = () => {
    stripePost({
      endpoint: 'customers',
      body: props
    }).then((resp: any) => {
      console.log(resp);
      let customerID = resp.id;
      console.log(customerID);
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <div>
      <button onClick={handleOnClick}>Create Customer</button>
    </div >
  );
}

export default CreateStripeCustomer;
