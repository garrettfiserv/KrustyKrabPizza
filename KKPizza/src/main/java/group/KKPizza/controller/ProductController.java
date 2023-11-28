package group.KKPizza.controller;

import group.KKPizza.model.Employee;
import group.KKPizza.model.Product;
import group.KKPizza.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import group.KKPizza.repository.ProductRepository;
import java.sql.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductRepository productRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAll")
    public List<Product> list() {
        return productService.getAllProduct();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getProductById/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") int productId) {
        Optional<Product> product = productRepository.findById(productId);

        if (((Optional<?>) product).isPresent()) {
            return new ResponseEntity<>(product.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}