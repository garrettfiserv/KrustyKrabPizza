package group.KKPizza.model;
import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Time;

@Entity
public class CustomerOrder {
    @Id
    private int orderID;
    //@ManyToOne(cascade = CascadeType.ALL, targetEntity = Employee.class)
    //@JoinColumn(name = "employeeid")
    private int employeeID;
    //@ManyToOne(cascade = CascadeType.ALL, targetEntity = Customer.class)
    //@JoinColumn(name = "phonenumber")
    private String phonenumber;
    private Date orderdate;
    private Time ordertime;
    private float ordertotal;
    private boolean iscomplete;
    private String zip;


    public CustomerOrder(){

    }

    public Date getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(Date orderdate) {
        this.orderdate = orderdate;
    }

    public Time getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Time ordertime) {
        this.ordertime = ordertime;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public int getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(int employeeID) {
        this.employeeID = employeeID;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public Date getDate() {
        return orderdate;
    }

    public void setDate(Date orderdate) {
        this.orderdate = orderdate;
    }

    public float getOrdertotal() {
        return ordertotal;
    }

    public void setOrdertotal(float ordertotal) {
        this.ordertotal = ordertotal;
    }

    public boolean isIscomplete() {
        return iscomplete;
    }

    public void setIscomplete(boolean iscomplete) {
        this.iscomplete = iscomplete;
    }

    public Time getTime() {
        return ordertime;
    }

    public void setTime(Time ordertime) {
        this.ordertime = ordertime;
    }
}
