package group.KKPizza.controller;

import group.KKPizza.model.Customer;
import group.KKPizza.model.CustomerOrder;
import group.KKPizza.model.OrderDetail;
import group.KKPizza.service.CustomerOrderService;
import group.KKPizza.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return("Saved new order detail");
    }
}
