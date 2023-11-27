package group.KKPizza.controller;

import group.KKPizza.model.Customer;
import group.KKPizza.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAll")
    public List<Customer> list() {
        return customerService.getAllCustomer();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public String add(@RequestBody Customer customer) {
        customerService.saveCustomer(customer);
        return ("Saved new customer");
    }

}
