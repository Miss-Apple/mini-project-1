package ita.bootcamp.miniproject.controller;

import ita.bootcamp.miniproject.model.Customer;
import ita.bootcamp.miniproject.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping("api/")
@CrossOrigin(origins = "http://localhost:5177") // URL ng frontend
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("public")
    public ResponseEntity<Boolean> isPublic() {
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("customer/{id}")
    public ResponseEntity<Customer> findCustomer(@PathVariable int id) {
        Customer customer = customerService.findCustomer(id);
        return customer == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : new ResponseEntity<>(customer, HttpStatus.OK) ;
    }

    @GetMapping("customer/all")
    public ResponseEntity<List<Customer>> findAllCustomers() {
        List<Customer> customerList = customerService.viewAllCustomer();
        return new ResponseEntity<>(customerList, HttpStatus.OK);
    }

    @PostMapping("customer/create_customer")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        Customer newCustomer = customerService.createCustomer(customer);
        return new ResponseEntity<>(newCustomer, HttpStatus.CREATED);

    }

    @PutMapping("customer/update/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable int id, @RequestBody Customer customer) {
        return new ResponseEntity<>(customerService.updateCustomer(id, customer), HttpStatus.OK);
    }

    @DeleteMapping("customer/delete/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable int id) {

        return customerService.deleteCustomer(id) ?
            new ResponseEntity<>("Customer deleted", HttpStatus.OK) : new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("customer/data/count")
    public ResponseEntity<Long> findCustomerCount() {
        Long customerCount = customerService.findCustomerCount();
        return new ResponseEntity<>(customerCount, HttpStatus.OK);
    }


}
