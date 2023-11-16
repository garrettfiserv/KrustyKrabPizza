package group.KKPizza.controller;

import group.KKPizza.model.Customer;
import group.KKPizza.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping
    public String add(@RequestBody Customer customer){
        customerService.saveCustomer(customer);
        return("Saved new customer");
    }
}
