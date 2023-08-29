// import * as React from 'react';
// import { useState } from 'react';
// import { Stripe } from '@stripe/stripe-js';
// import { PaymentElement, Elements } from '@stripe/react-stripe-js'

// interface DonateProps {
//     stripe: Stripe | null;
// }

// const Donate = ({ stripe }: DonateProps) => {

//     const [name, setName] = useState('');
//     const [amount, setAmount] = useState('');

//     return (
//         <main className='container'>
//             <section className='row mt-5 justify-content-center'>
//                 <div className='col-md-6 justify-content-center'>
//                     <form className='form-group p-3 border rounded-lg'>
//                         <input className='form-control mb-3' value={name} onChange={e => setName(e.target.value)} />
//                         <input className='form-control mb-3' value={amount} onChange={e => setAmount(e.target.value)} />
//                         {stripe && amount && (<Elements stripe={stripe} options={{ currency: 'usd', amount: Number(amount) * 100 || 0 }}>
//                             <PaymentElement />
//                         </Elements>)}
//                         <button className='btn btn-warning'>Donate</button>
//                     </form>
//                 </div>
//             </section>
//         </main>
//     );
// };


// export default Donate;