package group.KKPizza.repository;

import group.KKPizza.model.CustomerOrder;
import group.KKPizza.model.OrderDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends CrudRepository<OrderDetail, Integer> {

}
