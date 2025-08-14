package ita.bootcamp.miniproject.repository;


import ita.bootcamp.miniproject.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    // Insert any query here that you guys want to customize
}
