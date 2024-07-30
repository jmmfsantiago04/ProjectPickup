import ExpressRate from '@/components/ExpressRate';
import ServiceTable from '@/components/ServiceTable';
import ExpressTable from '@/components/ExpressTable';

const ShipExpress: React.FC = () => {
  return (
    <div>
        <ExpressRate />
        <ServiceTable />
        <ExpressTable />
    </div>
  );
};

export default ShipExpress;