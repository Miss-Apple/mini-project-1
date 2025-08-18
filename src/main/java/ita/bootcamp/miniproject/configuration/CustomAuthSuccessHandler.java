//package ita.bootcamp.miniproject.configuration;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
//import org.springframework.stereotype.Component;
//
//import java.io.IOException;
//
//@Component
//public class CustomAuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
//
//    @Override
//    public void onAuthenticationSuccess(HttpServletRequest request,
//                                        HttpServletResponse response,
//                                        Authentication authentication) throws IOException, ServletException {
//        response.setContentType("application/json");
//        response.setStatus(HttpServletResponse.SC_OK);
//        response.setCharacterEncoding("UTF-8");
//        response.getWriter().write("{\"status\":\"success\"},\"user\":\"" + authentication.getName() + "\"}");
//
//    }
//}
