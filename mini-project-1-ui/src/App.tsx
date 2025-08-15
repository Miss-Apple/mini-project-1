import { useEffect, useState } from 'react'
import {DataCard} from './components/DataCard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Button, Spin } from 'antd'
import useApi from './hooks/useApi'



function App() {
  const [customers, setCustomers] = useState([]);
  const getAllCustomers = 'api/customer/all';
  // const [daloading, result] = useApi(getAllCustomers)

  useEffect(() => {
    const timer = setTimeout(() => { 
      axios.get('api/customer/all').then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  // const test = () => {
  //   // fetch('api/customer/1')  
  //   axios.get('api/customer/all').then((response) => {
  //     setCustomers(response.data);
  //     console.log(customers);
  //   });
  // }

  //   const error = () => {
  //   messageApi.open({
  //     type: 'error',
  //     content: 'This is an error message',
  //   });
  // };

  return (
    <>
      {/* <DataCard customers={customers} /> */}
      {/* <Button onClick={test} ></Button> */}
      <Spin spinning={loading} tip="Loading...">
        <DataCard customers={customers} />
      </Spin>
      
    </>
  )
}

export default App;
