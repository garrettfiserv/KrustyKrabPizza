package group.KKPizza.service;
import java.util.List;
import group.KKPizza.model.Employee;
import group.KKPizza.model.OrderDetail;
import group.KKPizza.repository.EmployeeRepository;
import group.KKPizza.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Override
    public OrderDetail saveOrderDetail(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public List<OrderDetail> getAllOrderDetail() {
        return (List<OrderDetail>) orderDetailRepository.findAll();
    }
}
