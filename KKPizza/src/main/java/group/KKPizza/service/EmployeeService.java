package group.KKPizza.service;
import group.KKPizza.model.Employee;
import java.util.List;
public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAllEmployee();
}
