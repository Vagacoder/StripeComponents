import ConvertStripeCustomerBody from './ConvertStripeCustomerBody';

const StripeSettings = {
  origin: "https://api.stripe.com/v1",
  balance: 'balance',
  customers: 'customers',
  card: 'card',
  token: 'tokens',
  customerbody: ConvertStripeCustomerBody,
}

export default StripeSettings;
