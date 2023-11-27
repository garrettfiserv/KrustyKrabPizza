package group.KKPizza.controller;

import group.KKPizza.DatabaseManager;
import group.KKPizza.model.Customer;
import group.KKPizza.model.CustomerOrder;
import group.KKPizza.model.OrderDetail;
import group.KKPizza.service.CustomerOrderService;
import group.KKPizza.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.sql.*;

@RestController
@RequestMapping("/orderDetail")
public class OrderDetailController {
    @Autowired
    private OrderDetailService orderDetailService;
    @GetMapping("/getAll")
    public List<OrderDetail> list(){
        return orderDetailService.getAllOrderDetail();
    }
    @PostMapping("/add")
    public String add(@RequestBody OrderDetail orderDetail){
        orderDetailService.saveOrderDetail(orderDetail);

        String selectSQL = "UPDATE CUSTOMER_ORDER \n" +
                "SET ORDERTOTAL = (select sum(priceCharged) from ORDER_DETAIL where CUSTOMER_ORDER.ORDERID = ORDER_DETAIL.ORDERID\n" +
                ")";
        String updateSQL = "update ORDER_DETAIL set orderDetailNumber = KRUSTY_KRAB_PIZZA.PIZZERIA.SEQ_ORDERDETAIL_ID.nextval where orderDetailNumber =0";
        try {
            Connection connection = DatabaseManager.getConnection();
            System.out.println("updated total");
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(selectSQL);
            ResultSet us = stmt.executeQuery(updateSQL);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return("Saved new order detail");
    }
}
