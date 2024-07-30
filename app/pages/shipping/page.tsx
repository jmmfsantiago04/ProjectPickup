import InfoRate from '@/components/RateTable';
import EMSRateTable from '@/components/EMSRateTable';
import KPacketRateTable from '@/components/KPacketRateTable';

const ShipRate: React.FC = () => {
  return (
    <div>
        <InfoRate />
        <EMSRateTable />
        <KPacketRateTable />
    </div>
  );
};

export default ShipRate;
