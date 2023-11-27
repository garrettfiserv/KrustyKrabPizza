package group.KKPizza.repository;

import group.KKPizza.model.Customer;
import group.KKPizza.model.CustomerOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerOrderRepository extends CrudRepository<CustomerOrder, Integer> {
    List<CustomerOrder> findByOrderdateBetweenAndEmployeeID(Date orderdate, Date endrange, int employeeID);
}
