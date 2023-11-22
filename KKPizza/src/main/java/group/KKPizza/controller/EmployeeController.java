package group.KKPizza.controller;

import group.KKPizza.DatabaseManager;
import group.KKPizza.Environment;
import group.KKPizza.model.Employee;
import group.KKPizza.repository.EmployeeRepository;
import group.KKPizza.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/getEmployeeById/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") int employeeId) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);

        if (((Optional<?>) employee).isPresent()) {
            return new ResponseEntity<>(employee.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getAll")
    public List<Employee> list() {
        return employeeService.getAllEmployee();
    }

    @PostMapping("/add")
    public String add(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        // This step below is necessary to update the EmployeeID in Employee Table
        String selectSQL = "update EMPLOYEE set employeeID = KRUSTY_KRAB_PIZZA.PIZZERIA.SEQ_EMPLOYEE_ID.nextval where employeeID =0";

        try {
            Connection connection = DatabaseManager.getConnection();
            System.out.println("updated");
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(selectSQL);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ("Saved new employee");
    }
}
