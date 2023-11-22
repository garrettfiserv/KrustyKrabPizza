package group.KKPizza.service;

import group.KKPizza.model.Customer;

import java.util.List;

public interface CustomerService {
    public Customer saveCustomer(Customer customer);

    public List<Customer> getAllCustomer();
}