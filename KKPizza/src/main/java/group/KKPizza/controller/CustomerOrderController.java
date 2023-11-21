package group.KKPizza.controller;

import group.KKPizza.model.Customer;
import group.KKPizza.model.CustomerOrder;
import group.KKPizza.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customerOrder")
public class CustomerOrderController {
    @Autowired
    private CustomerOrderService customerOrderService;
    @GetMapping("/getAll")
    public List<CustomerOrder> list(){
        return customerOrderService.getAllCustomerOrder();
    }
    @PostMapping("/add")
    public String add(@RequestBody CustomerOrder customerOrder){
        customerOrderService.saveCustomerOrder(customerOrder);
        return("Saved new customer order");
    }
}
