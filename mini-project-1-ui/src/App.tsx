import { use, useEffect, useState } from "react";
import { DataCard } from "./components/DataCard";
import "./App.css";
import axios from "axios";
import { Spin, Typography } from "antd";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getAllCustomers = "api/customer/all";

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
  }, []);

  return (
    <>

      <Spin spinning={isLoading} tip="Loading...">
        {!isError && <DataCard customers={data} />}
        {isError && (
          <Typography.Paragraph>
            <ErrorMessage openModal={isError} />
          </Typography.Paragraph>
        )}
      </Spin>
    </>
  );
}

export default App;
