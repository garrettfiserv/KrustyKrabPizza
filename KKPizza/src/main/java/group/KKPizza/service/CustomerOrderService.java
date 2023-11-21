package group.KKPizza.service;

import group.KKPizza.model.CustomerOrder;

import java.util.List;

public interface CustomerOrderService {
    public CustomerOrder saveCustomerOrder(CustomerOrder customerOrder);
    public List<CustomerOrder> getAllCustomerOrder();
}
