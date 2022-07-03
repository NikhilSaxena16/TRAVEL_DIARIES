import React from 'react';

import { List, Card} from 'antd';

import GooglePayButton from '@google-pay/button-react';


const data = [
  {
    title: 'North India',
    content: [
      {
        price: '$1062.13',
        Day: '15 days',
        Place1: 'Delhi',
        Place2: 'Uttar Pradesh',
        Place3: 'Rajasthan',
        Place4: 'Himachal Pradesh',
        Place5: 'Jammu and Kashmir',
        person: '1 user',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'
      }
    ]
  },
  {
    title: 'South India',
    content: [
      {
        price: '$1991.88',
        Day: '25 days',
        Place1: 'Kochi',
        Place2: 'Ooty',
        Place3: 'Hampi',
        Place4: 'Puducherry',
        Place5: 'kerala',
        user: '1 user',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'
      }
    ]
  },
  {
    title: 'All India',
    content: [
      {
        price: '$6638.29',
        Day: '60 days',
        Place1: 'Delhi',
        Place2: 'Rajasthan',
        Place3: 'kerala',
        Place4: 'Chennai',
        Place5: 'kanyakumari to Ladakh ',
        user: '1 user',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere'
      }
    ]
  }
];


function AppPricing() {
  return (
    <>

      <div id="pricing" className="block pricingBlock bgGray">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Special Tour Packages</h2>
            <p>What's on my bucket list? Everywhere.</p>
          </div>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>
                  <p className="large">{item.content[0].price}</p>
                  <p>{item.content[0].Day}</p>
                  <p>{item.content[0].Place1}</p>
                  <p>{item.content[0].Place2}</p>
                  <p>{item.content[0].Place3}</p>
                  <p>{item.content[0].Place4}</p>
                  <p>{item.content[0].Place5}</p>
                  <p>{item.content[0].person}</p>
                  <p>{item.content[0].support}</p>
                  <p>{item.content[0].backup}</p>
                  <p>{item.content[0].access}</p>


                  <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [
                        {
                          type: 'CARD',
                          parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                          },
                          tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                              gateway: 'example',
                              gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                          },
                        },
                      ],
                      merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Payment',
                      },
                      transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '100.00',
                        currencyCode: 'INR',
                        countryCode: 'IN',
                      },
                      shippingAddressRequired: true,
                      callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                    }}
                    onLoadPaymentData={paymentRequest => {
                      console.log('Success', paymentRequest);
                    }}
                    onPaymentAuthorized={paymentData => {
                      console.log('Payment Authorised Success', paymentData)
                      return { transactionState: 'SUCCESS' }
                    }
                    }
                    onPaymentDataChanged={paymentData => {
                      console.log('On Payment Data Changed', paymentData)
                      return {}
                    }
                    }
                    existingPaymentMethodRequired='false'
                    buttonColor='black'
                    buttonType='Buy'
                  />

                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default AppPricing;