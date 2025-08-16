import {useEffect, useState} from "react";
import {DataCard} from "./components/DataCard";
import "./App.css";
import axios from "axios";
import {Button, Form, Input, Spin, Typography} from "antd";
import {ErrorMessage} from "./components/ErrorMessage";
import CustomerModal from "./components/CustomerModal.tsx";



function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [recordCount, setRecordCount] = useState(0);
    const [customer, setCustomer] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const getAllCustomers = "api/customer/all";
    const findCustomerCount = "api/customer/data/count";

    const [form] = Form.useForm();

    const onFinish = (value: { inputCusId: string; }) => {
        const findCustomerById = "api/customer/" + value.inputCusId;
        axios
            .get(findCustomerById)
            .then((response) => {
                setCustomer(response.data);
                setIsLoading(false);
                setOpenModal(true)
                console.log("SUCCESS")
                console.log("openModal: " + open);
            })
            .catch((err) => {
                setIsError(err.message);
                setIsLoading(false);
                console.log("ERROR");
            });
        console.log(customer);
    };

    useEffect(() => {
        axios
            .get(getAllCustomers)
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
                console.log("SUCCESS");
            })
            .catch((err) => {
                setIsError(err.message);
                setIsLoading(false);
                console.log("ERROR");
            });
        axios
            .get(findCustomerCount)
            .then((response) => {
                setRecordCount(response.data);
                setIsLoading(false);
                console.log("SUCCESS");
            })
            .catch((err) => {
                setIsError(err.message);
                setIsLoading(false);
                console.log("ERROR");
            });
    }, []);

    return (
        <>
            <Spin spinning={isLoading} tip="Loading...">
                {!isError && <DataCard customers={data}/>}
                {isError && (
                    <Typography.Paragraph>
                        <ErrorMessage openModal={isError}/>
                    </Typography.Paragraph>
                )}
            </Spin>
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}>
                <Form.Item name="inputCusId" label="Find Customer">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Typography.Text>{recordCount}</Typography.Text>
            {openModal &&
                <CustomerModal openModal={openModal} customer={customer}/>
            }
        </>

    );
}

export default App;
