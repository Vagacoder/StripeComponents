import { IStripeCustomer } from './Stripe';

const ConvertStripeCustomerBody = (data: IStripeCustomer): string => {

  const { firstName, lastName, address, city, state, country, zipcode,
    email, phone, companyName, webUrl } = data;

  return `name=${firstName} ${lastName}&phone=${phone}&email=${email}&\
    address[line1]=${address}&address[city]=${city}&address[state]=${state}&\
    address[postal_code]=${zipcode}&address[country]=${country}&\
    description=${companyName} ${webUrl}`;
}

export default ConvertStripeCustomerBody;