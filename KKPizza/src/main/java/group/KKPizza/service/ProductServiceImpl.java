package group.KKPizza.service;
import java.util.List;
import group.KKPizza.model.Customer;
import group.KKPizza.model.Product;
import group.KKPizza.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Product> getAllProduct() {
        return null;
    }

    @Override
    public String getProductById() {
        return null;
    }
}
