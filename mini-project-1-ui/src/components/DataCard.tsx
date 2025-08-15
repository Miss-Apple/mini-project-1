import React from "react";
import { Card, Col, Row, Spin } from "antd";

// type DataCardProps = {
//  data: number[];
// };
type CustomerProps = {
  customerId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  addressLine1: string;
  addressLine2: string;
  locationId: number;
};

type DataCardProps = {
  customers: CustomerProps[];
};

// type CustomerList1 = CustomerProps;

// interface CustomerList {
//     customer: CustomerProps[]
// }

// const DataCard: React.FC<CustomerProps> = (data) => {
//   return <Row gutter={16}>
//         <Col span={8}>
//             <Card title="Card title" variant="borderless">
//                 <h2>{data.customerId}</h2>
//             </Card>
//         </Col>
//         <Col span={8}>
//             <Card title="Card title" variant="borderless">
//                 Card content
//             </Card>
//         </Col>
//         <Col span={8}>
//             <Card title="Card title" variant="borderless">
//                 Card content
//             </Card>
//         </Col>
//     </Row>;
// };


const DataCard = ({ customers }: DataCardProps) => (
  //   <div>
  //     {customers.map(customer => (
  //       <div key={customer.customerId}>
  //         {customer.firstName} {customer.lastName}
  //       </div>
  //     ))}
  //   </div>
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        
          {customers.map((customer) => (
            <div key={customer.customerId}>
              {customer.firstName} {customer.lastName}
            </div>
          ))}
        
      </Card>
    </Col>
  </Row>
);

// const Spinner: React.FC = () => <Spin />;

export {
  DataCard
//   Spinner, 
}

