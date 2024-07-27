import Warehouse from "@/components/Warehouse";
import Purchase from "@/components/Purchase";
import Optional from "@/components/Optional";
import Forwading from "@/components/Forwading";

const service: React.FC = () => {
  return (
    <div>
    <Warehouse />
    <Purchase />
    <Optional />  
    <Forwading />
    </div>
  );
};

export default service;