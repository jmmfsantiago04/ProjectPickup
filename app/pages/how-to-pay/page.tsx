import HowToPay from '@/components/HowToPay';

import OrderInstructions from '@/components/OrderInstructions';
import { NextPage } from 'next';


const howPay: NextPage = () => {
  return (
      <div>
      <HowToPay />
      <OrderInstructions />
      </div>
    
  );
};

export default howPay;
