/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kursach.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import mappers.JsonRateMapper;
import kursach.controllers.RateController;
import kursach.model.Rate;

/**
 *
 * @author olejaja
 */

    
    @WebServlet(name = "GetAllRate", urlPatterns = {"/GetAllRate"})
public class GetAllRate extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
         try (PrintWriter out = response.getWriter()) 
        {
            RateController ratecontroller = new RateController();
            List<Rate> rate =  ratecontroller.getAllRate();
            String json=JsonRateMapper.toJson(rate);
            out.println(json);
        }
    
    
    }}
