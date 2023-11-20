package group.KKPizza.model;

import jakarta.persistence.*;


@Entity
public class Customer {

    @Id
    @Column(name = "phonenumber")
    private String phonenumber;
    private String name;
    private String address;
    private String city;
    private String state;
    private String zip;

    public Customer(){

    }
    public String getPhoneNumber() {
        return phonenumber;
    }

    public void setPhoneNumber(String PHONE_NUMBER) {
        this.phonenumber = PHONE_NUMBER;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }




}
