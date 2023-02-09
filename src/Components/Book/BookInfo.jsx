import React,{useContext} from 'react'
import { Contexts } from '../../Api/Context'

const BookInfo = () => {
    const {totalAmount}=useContext(Contexts)
    const payment=()=>{
        const refVal = "my-ref" + Math.random () * 1000;
        
          window.Korapay.initialize({
              key:"pk_test_X3AXhz3wRAETd6TrgfBXdcVwpVwJMq8XifBAakPe",
              reference: `${refVal}`,
              amount: totalAmount, 
              currency: "NGN",
              customer: {
                name: "John Doe",
                email: "john@doe.com"
              },
              notification_url: "https://example.com/webhook"
          });
    
      
    
      }

  return (
    <div>
      BookInfo
      <button  onClick={payment}  className='book-butt'>
                Proceed to Payments
             </button>
    </div>
  )
}

export default BookInfo;