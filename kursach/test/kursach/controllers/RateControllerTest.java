/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kursach.controllers;

import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import kursach.model.Rate;

/**
 *
 * @author Пользователь
 */
public class RateControllerTest {
    
    public RateControllerTest() {
    }
    
    @Test
    public void testGetAllRate() {
        System.out.println("LotController getAllRate");
        RateController instance = new RateController();
        List<Rate> result = instance.getAllRate();
        assertTrue(result!=null && result.size()>0);

    }
}
