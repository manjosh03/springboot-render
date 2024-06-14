package demo.demo.controllers;
import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import demo.demo.models.Users;
@Controller
public class UsersController {
    @GetMapping("/users/view")
    public String getAllUsers(Model model){
        System.out.println("Getting all users");
        //TODO: get all users from a database
        List<Users> users = new ArrayList<>();
        users.add(new Users("Bobby","1234",25));
        users.add(new Users("sara","1234",15)); 
        users.add(new Users("steve","1234",35));
        users.add(new Users("jacob","1234",5));
        //end of database call
        model.addAttribute("us", users);
        return "users/showAll";
    }
}
