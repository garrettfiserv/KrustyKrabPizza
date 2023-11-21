package group.KKPizza.service;

import group.KKPizza.model.Product;

import java.util.List;

public interface ProductService {
    public List<Product> getAllProduct();
    public String getProductById();
}
