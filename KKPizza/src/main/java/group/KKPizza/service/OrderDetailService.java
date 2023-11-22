package group.KKPizza.service;

import group.KKPizza.model.Employee;
import group.KKPizza.model.OrderDetail;

import java.util.List;

public interface OrderDetailService {
    public OrderDetail saveOrderDetail(OrderDetail orderDetail);
    public List<OrderDetail> getAllOrderDetail();
}
