import EMSRateTable from '@/components/EMSRateTable';
import KPacketRateTable from '@/components/KPacketRateTable';
import Shipping from '@/components/Shipping';

const ShipRate: React.FC = () => {
  return (
    <div>
        <Shipping />
        <EMSRateTable />
        <KPacketRateTable />
    </div>
  );
};

export default ShipRate;
