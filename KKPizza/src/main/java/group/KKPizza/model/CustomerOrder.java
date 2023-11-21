package group.KKPizza.model;
import jakarta.persistence.*;
import net.snowflake.client.jdbc.internal.joda.time.DateTime;

import java.text.DateFormat;
import java.sql.Timestamp;

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
    private Timestamp timestamp;
    private float ordertotal;
    private boolean iscomplete;


    public CustomerOrder(){

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

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
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
}
