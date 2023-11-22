package group.KKPizza.model;
import jakarta.persistence.*;

@Entity
public class OrderDetail {
    @Id
    private int orderdetailnumber;
    private int orderID;
    private int quantity;
    private float pricecharged;
    private int productnumber;

    public OrderDetail() {}

    public int getOrderDetailNumber() { return orderdetailnumber;}
    public void setOrderDetailNumber(int orderdetailnumber) {this.orderdetailnumber = orderdetailnumber;}

    public int getOrderID() {return orderID;}
    public void setOrderID(int orderID) {this.orderID = orderID;}

    public int getQuantity() {return quantity;}
    public void setQuantity (int quantity) {this.quantity = quantity;}

    public float getPriceCharged() {return pricecharged;}
    public void setPriceCharged(float pricecharged) {this.pricecharged = pricecharged;}

    public int getProductNumber() {return productnumber;}
    public void setProductNumber(int productnumber) {this.productnumber = productnumber;}


}

