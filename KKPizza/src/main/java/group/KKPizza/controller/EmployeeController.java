package group.KKPizza.controller;

import group.KKPizza.DatabaseManager;
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
    @GetMapping("/deactivateEmployee/{id}")
    public ResponseEntity<Employee> deactivateEmployee(@PathVariable("id") int employeeId) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);

        if (employee.isPresent()) {
            Employee modifiedemployee = employee.get();
            modifiedemployee.setIsactive(false); // Set isActive to false

            // Save the updated employee entity
            employeeRepository.save(modifiedemployee);

            return ResponseEntity.ok(modifiedemployee); // Return a response indicating successful deactivation
        } else {
            return ResponseEntity.notFound().build(); // Return 404 if the employee with the provided ID is not found
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

    @PutMapping("/updateEmployee/{id}")
    public ResponseEntity<Employee> updateEmployeeDetails(@PathVariable("id") int employeeId,
                                                          @RequestBody Employee updatedEmployee) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);

        if (optionalEmployee.isPresent()) {
            Employee existingEmployee = optionalEmployee.get();

            // Update employee details if provided in the request body
            existingEmployee.setName(updatedEmployee.getName());
            existingEmployee.setPhonenumber(updatedEmployee.getPhonenumber());
            existingEmployee.setPassword(updatedEmployee.getPassword());
            existingEmployee.setIsactive(updatedEmployee.isIsactive());
            existingEmployee.setIsadmin(updatedEmployee.isIsadmin());
            existingEmployee.setTitle(updatedEmployee.getTitle());
            // Update other fields as needed

            // Save the updated employee entity
            Employee savedEmployee = employeeRepository.save(existingEmployee);

            return ResponseEntity.ok(savedEmployee); // Return a response indicating successful update
        } else {
            return ResponseEntity.notFound().build(); // Return 404 if the employee with the provided ID is not found
        }
    }

}
