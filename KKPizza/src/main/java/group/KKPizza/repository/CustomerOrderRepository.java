package group.KKPizza.repository;

import group.KKPizza.model.Customer;
import group.KKPizza.model.CustomerOrder;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerOrderRepository extends CrudRepository<CustomerOrder, Integer> {
    // List<CustomerOrder> findByOrderdateBetweenAndEmployeeID(Date orderdate, Date
    // endrange, int employeeID);

    // List<CustomerOrder> findByOrderdateBetweenAndZip(Date orderdate, Date
    // endrange, String zip);
}
