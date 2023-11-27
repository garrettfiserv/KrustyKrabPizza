package group.KKPizza.service;

import group.KKPizza.model.CustomerOrder;
import group.KKPizza.service.CustomerOrderService;
import group.KKPizza.repository.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerOrderServiceImpl implements CustomerOrderService {
    @Autowired
    private CustomerOrderRepository customerOrderRepository;

    @Override
    public CustomerOrder saveCustomerOrder(CustomerOrder customerOrder) {
        return customerOrderRepository.save(customerOrder);
    }

    @Override
    public List<CustomerOrder> getAllCustomerOrder() {
        return (List<CustomerOrder>) customerOrderRepository.findAll();
    }

    @Override
    public List<CustomerOrder> getOrderWeekOf(Date orderdate, int employeeID){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(orderdate);
        calendar.add(Calendar.DAY_OF_YEAR, 7);
        Date endrange = new Date(calendar.getTimeInMillis());

        return customerOrderRepository.findByOrderdateBetweenAndEmployeeID(orderdate, endrange, employeeID);
    }
}

