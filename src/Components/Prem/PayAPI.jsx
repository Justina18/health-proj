import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()
function PaymentApi (amount) {
  let key = `key${Math.random()}`
  // console.log(amount)
  // console.log(key)
  window.Korapay.initialize({
    key: 'pk_test_amrizRvsvZcd1XaRW8CiQewSQ5XeiCxbCAyPsa4q',
    reference: key,
    amount: amount,
    currency: "NGN",
    customer: {
      name: "John Doe",
      email: "john@doe.com"
    },
    onClose: function () {
      // Handle when modal is closed
    },
    onSuccess: function (data) {
      console.log(data)
    },
    onFailed: function (data) {
      console.log(data)
    }
    // notification_url: "https://example.com/webhook"
  });
}



export default PaymentApi