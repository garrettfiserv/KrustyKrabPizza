package group.KKPizza.service;

import java.util.List;
import group.KKPizza.model.Customer;
import group.KKPizza.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> getAllCustomer() {
        return (List<Customer>) customerRepository.findAll();
    }

    @Override
    public String getZipByPhonenumber(String phonenumber) {
        return customerRepository.findZipByPhonenumber(phonenumber);
    }
}
