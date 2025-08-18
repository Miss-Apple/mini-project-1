//package ita.bootcamp.miniproject.controller;
//
//import ita.bootcamp.miniproject.model.User;
//import ita.bootcamp.miniproject.service.CustomUserDetailsService;
//import lombok.AllArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.web.bind.annotation.*;
//
//@AllArgsConstructor
//@RestController
//@RequestMapping("/")
//public class LoginController {
//
//    private final CustomUserDetailsService customUserDetailsService;
//
//    //private final AuthenticationManager authenticationManager;
//
//    @GetMapping("login")
//    public ResponseEntity<String> isLogin() {
//        return new ResponseEntity<>("Please log in", HttpStatus.OK);
//    }
//
//    @PostMapping("login")
//    public ResponseEntity<String> login(@RequestBody User user) {
//        Authentication auth = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
//        SecurityContextHolder.getContext().setAuthentication(auth);
//        return ResponseEntity.ok("User is logged in!");
//    }
//
//    @PostMapping("register")
//    public ResponseEntity<String> register(@RequestBody User user) {
//        return new ResponseEntity<>("User can register!", HttpStatus.OK);
//    }
//}
