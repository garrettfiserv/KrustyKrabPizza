package group.KKPizza.controller;

import group.KKPizza.model.Employee;
import group.KKPizza.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/getAll")
    public List<Employee> list() {
        return employeeService.getAllEmployee();
    }

    @PostMapping("/add")
    public String add(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        return ("Saved new employee");
    }
}
