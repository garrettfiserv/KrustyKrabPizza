package group.KKPizza.controller;

import group.KKPizza.model.CustomerOrder;
import group.KKPizza.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customerOrder")
public class CustomerOrderController {
    @Autowired
    private CustomerOrderService customerOrderService;

    @GetMapping("/{orderID}")
    public ResponseEntity<CustomerOrder> getCustomerOrderById(@PathVariable int orderID) {
        CustomerOrder customerOrder = customerOrderService.getCustomerOrderById(orderID);

        if (customerOrder != null) {
            return ResponseEntity.ok(customerOrder);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add")
    public String add(@RequestBody CustomerOrder customerOrder){
        customerOrderService.saveCustomerOrder(customerOrder);
        return("Saved new customer order");
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<CustomerOrder>> getAllCustomerOrders() {
        List<CustomerOrder> customerOrders = customerOrderService.getAllCustomerOrder();

        if (!customerOrders.isEmpty()) {
            return ResponseEntity.ok(customerOrders);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
