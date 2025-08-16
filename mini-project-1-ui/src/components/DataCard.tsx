import {Card} from "antd";

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

export const DataCard = ({customers}: DataCardProps) => (
    <Card title="Card title" variant="borderless">

        {customers.map((customer) => (
            <div key={customer.customerId}>
                {customer.firstName} {customer.lastName}
            </div>
        ))}

    </Card>
);

