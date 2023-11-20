package group.KKPizza.service;

import group.KKPizza.model.CustomerOrder;
import group.KKPizza.repository.CustomerOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
