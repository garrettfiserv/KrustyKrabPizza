package group.KKPizza.service;

import group.KKPizza.model.CustomerOrder;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

public interface CustomerOrderService {
    public CustomerOrder saveCustomerOrder(CustomerOrder customerOrder);
    public List<CustomerOrder> getAllCustomerOrder();

    public List<CustomerOrder> getOrderWeekOf(Date orderdate, int employeeID);

}
