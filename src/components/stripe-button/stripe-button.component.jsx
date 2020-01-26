import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe=price * 100;
    const publisableKey= 'pk_test_JAmHWKgL6jLNW8NpSr53V5nC00T1uz0JrO';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name= "Online Shopping"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            pannelLabel='Pay Now'
            token={onToken}
            stripeKey={publisableKey}
        />
    );
}

export default StripeCheckoutButton;