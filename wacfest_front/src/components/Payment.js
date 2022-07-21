import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    ElementsConsumer,
    CardElement,
} from "@stripe/react-stripe-js";
import React from "react";

let api_key = "pk_test_51LNv4mKAT2I1OkCNAKcrmPm0quvr0CB2SH5qzD0dBdZO3O9lbAT8rewaH7WIsK6Y8qvnzODw9h8r6UaRIwuTHZED00JncVoPvk";
const stripePromise = loadStripe(api_key);

export default class StripePaymentForm extends React.Component {
    render() {
        return (
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {(ctx: any) => <PaymentForm {...ctx} />}
                </ElementsConsumer>
            </Elements>
        );
    }
}


class PaymentForm extends React.Component<any> {
    handleSubmit = async () => {
        const { elements, stripe } = this.props;
        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('error:', error);
        } else {
            console.log('Payment method:', paymentMethod);
            // ... POST: /api/charge/user
        }
    };
    render() {
        return (
            <>
                <h1>stripe form</h1>
                <CardElement />
                <button onClick={this.handleSubmit}>Buy</button>
            </>
        );
    }
}
