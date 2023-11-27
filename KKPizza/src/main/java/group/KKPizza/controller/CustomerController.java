package group.KKPizza.controller;

import group.KKPizza.model.Customer;
import group.KKPizza.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/getAll")
    public List<Customer> list() {
        return customerService.getAllCustomer();
    }

    @PostMapping("/add")
    public String add(@RequestBody Customer customer) {
        customerService.saveCustomer(customer);
        return ("Saved new customer");
    }

}
