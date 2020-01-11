import * as StripeConfig from './StripeConfig.json';
export interface IStripeCustomer {
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  state: string,
  country: string,
  zipcode: string,
  email: string,
  phone: string,
  companyName: string,
  webUrl: string,
}

const ConvertStripeCustomerBody = (data: IStripeCustomer): string => {

  const { firstName, lastName, address, city, state, country, zipcode,
    email, phone, companyName, webUrl } = data;

  return `name=${firstName} ${lastName}&phone=${phone}&email=${email}&\
    address[line1]=${address}&address[city]=${city}&address[state]=${state}&\
    address[postal_code]=${zipcode}&address[country]=${country}&\
    description=${companyName} ${webUrl}`;
}

const Stripe = {
  origin: "https://api.stripe.com/v1",
  customerbody: ConvertStripeCustomerBody,
}

const stripeAPI = (params: any) => {

  // * Reserve for different bodies ================
  let bodyParseFunc = Stripe.customerbody;

  if (params.endpoint === 'customers') {
    bodyParseFunc = Stripe.customerbody;
  } else {
    bodyParseFunc = Stripe.customerbody;
  }
  // * =============================================

  return new Promise((accept: any, reject: any) => {
    fetch(`${Stripe.origin}/${params.endpoint}`, {
      method: params.method,
      headers: {
        'Authorization': `Bearer ${StripeConfig.api_key}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyParseFunc(params.body),
    }).then((res: any) => {
      accept(res.json());
    })
      .catch((e: any) => {
        reject(e);
      })
  })
}

export const stripePost = (params: any) => {
  return new Promise((accept, reject) => {
    stripeAPI({
      endpoint: params.endpoint,
      method: 'POST',
      body: params.body
    })
      .then((resp: any) => {
        accept(resp);
      })
      .catch((e: any) => {
        reject(e)
      })
  })

}
