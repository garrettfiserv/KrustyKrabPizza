package group.KKPizza.service;

import group.KKPizza.model.Customer;
import group.KKPizza.model.CustomerOrder;
import group.KKPizza.model.Employee;
import group.KKPizza.repository.*;
import group.KKPizza.repository.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerOrderServiceImpl implements CustomerOrderService {

    @Autowired
    private CustomerOrderRepository customerOrderRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private CustomerRepository customerRepository;


//    @Override
//    public CustomerOrder saveCustomerOrder(CustomerOrder customerOrder) {
//        return customerOrderRepository.save(customerOrder);
//    }
    public CustomerOrder getCustomerOrderById(int orderID) {
        return customerOrderRepository.findById(orderID).orElse(null);
    }
    @Override
    public CustomerOrder saveCustomerOrder(CustomerOrder customerOrder) {
        return customerOrderRepository.save(customerOrder);
    }
    @Override
    public List<CustomerOrder> getAllCustomerOrder() {
        return (List<CustomerOrder>) customerOrderRepository.findAll();
    }
}
