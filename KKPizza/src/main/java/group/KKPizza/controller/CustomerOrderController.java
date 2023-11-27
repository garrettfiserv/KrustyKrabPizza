package group.KKPizza.controller;

import group.KKPizza.model.CustomerOrder;
import group.KKPizza.model.Employee;
import group.KKPizza.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import group.KKPizza.repository.CustomerOrderRepository;

import java.sql.Timestamp;
import java.sql.Date;
import java.text.*;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customerOrder")
public class CustomerOrderController {
    @Autowired
    private CustomerOrderService customerOrderService;
    @Autowired
    private CustomerOrderRepository customerOrderRepository;
    @GetMapping("/getOrderWeekOfByEmployeeID/{date}")
    public ResponseEntity getOrderWeekOfByEmployeeID(@PathVariable("date") String dateStr, @RequestParam("employeeID") int employeeID) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date parsedDate = dateFormat.parse(dateStr);

            // Create a java.sql.Date using the time in milliseconds
            Date orderdate = new Date(parsedDate.getTime());

            System.out.println("Original String: " + dateStr);
            System.out.println("Converted java.sql.Date: " + orderdate);

            /*Calendar calendar = Calendar.getInstance();
            calendar.setTime(orderdate);
            calendar.add(Calendar.DAY_OF_YEAR, 7);
            Date endrange = new Date(calendar.getTimeInMillis());*/
            List<CustomerOrder> customerOrder = customerOrderService.findByOrderdateBetweenAndEmployeeID(orderdate, employeeID);

            if (!customerOrder.isEmpty()) {
                return new ResponseEntity<>(customerOrder, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (ParseException e) {
            return new ResponseEntity<>("Invalid timestamp format", HttpStatus.BAD_REQUEST);
        }

    }

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
