package group.KKPizza.controller;

import group.KKPizza.DatabaseManager;
import group.KKPizza.model.CustomerOrder;
import group.KKPizza.model.Employee;
import group.KKPizza.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import group.KKPizza.repository.CustomerOrderRepository;

import java.sql.*;
import java.text.*;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import static group.KKPizza.DatabaseManager.getConnection;

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
            Date orderdate = new Date(parsedDate.getTime());

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

    @GetMapping("/getOrderWeekOfByZip/{date}")
    public ResponseEntity getOrderWeekOfByZip(@PathVariable("date")String dateStr, @RequestParam("zip") String zip){
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date parsedDate = dateFormat.parse(dateStr);
            Date orderdate = new Date(parsedDate.getTime());

            List<CustomerOrder> customerOrder = customerOrderService.findByOrderdateBetweenAndZip(orderdate, zip);

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
        String updateSQL = "update CUSTOMER_ORDER set OrderID = KRUSTY_KRAB_PIZZA.PIZZERIA.SEQ_CUSTOMERORDER_ID.nextval where orderID =0";
        try {
            Connection connection = DatabaseManager.getConnection();
            System.out.println("updated ID");
            Statement stmt = connection.createStatement();
            ResultSet us = stmt.executeQuery(updateSQL);
        } catch (SQLException e) {
            e.printStackTrace();
        }
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
