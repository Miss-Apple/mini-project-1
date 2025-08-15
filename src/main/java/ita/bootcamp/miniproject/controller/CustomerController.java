package ita.bootcamp.miniproject.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ita.bootcamp.miniproject.model.Customer;
import ita.bootcamp.miniproject.service.CustomerService;
import lombok.AllArgsConstructor;


@AllArgsConstructor
@RestController
@RequestMapping("api/customer")
public class CustomerController {

    private CustomerService customerService;

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findCustomer(@PathVariable int id) {
        Customer customer = customerService.findCustomer(id);
        return customer == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : new ResponseEntity<>(customer, HttpStatus.OK) ;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> findAllCustomers() {
        List<Customer> customerList = customerService.viewAllCustomer();
        return new ResponseEntity<>(customerList, HttpStatus.OK);
    }

    @PostMapping("/create_customer")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        Customer newCustomer = customerService.createCustomer(customer);
        return new ResponseEntity<>(newCustomer, HttpStatus.CREATED);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable int id, @RequestBody Customer customer) {
        return new ResponseEntity<>(customerService.updateCustomer(id, customer), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable int id) {

        return customerService.deleteCustomer(id) ?
            new ResponseEntity<>("Customer deleted", HttpStatus.OK) : new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/data/count")
    public ResponseEntity<Long> findCustomerCount() {
        Long customerCount = customerService.findCustomerCount();
        return new ResponseEntity<>(customerCount, HttpStatus.OK);
    }


}
