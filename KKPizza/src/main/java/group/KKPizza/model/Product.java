package group.KKPizza.model;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    private int productnumber;
    private String description;
    private double price;

    public Product(){}
    public int getProductnumber() {
        return productnumber;
    }

    public void setProductnumber(int productnumber) {
        this.productnumber = productnumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
