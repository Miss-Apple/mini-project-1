import React, { useEffect, useState } from "react";
import axios from "axios";

interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  addressLine1: string;
  addressLine2: string;
  locationId: number;
}

const CustomerSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setCustomers([]); // clear table if input empty
      return;
    }

    setLoading(true);

    axios
      .get(`http://localhost:8080/api/customer/search?keyword=${searchTerm}`)
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setCustomers([]);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Search</h2>
      <input
        type="text"
        placeholder="Enter ID, First Name, Last Name, or Full Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "15px", padding: "8px", width: "300px" }}
      />

      {loading && <p>Loading...</p>}

      {!loading && customers.length > 0 && (
        <table
          border={1}
          cellPadding={8}
          style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address Line 1</th>
              <th>Address Line 2</th>
              <th>Location ID</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customerId}>
                <td>{customer.customerId}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.contactNumber}</td>
                <td>{customer.emailAddress}</td>
                <td>{customer.addressLine1}</td>
                <td>{customer.addressLine2}</td>
                <td>{customer.locationId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && customers.length === 0 && searchTerm && (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default CustomerSearch;
