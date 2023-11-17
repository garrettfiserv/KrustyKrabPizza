package group.KKPizza.controller;
import java.util.List;

import group.KKPizza.model.Employee;
import group.KKPizza.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public String add(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        return "New Employee is added";
    }

    @GetMapping("/getAll")
    public List<Employee> list(){
        return employeeService.getAllEmployee();
    }
}
