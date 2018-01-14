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
import kursach.model.Lot;

/**
 *
 * @author Пользователь
 */
public class LotControllerTest {
    
    public LotControllerTest() {
    }
    
    @Test
    public void testGetLotAll() {
        System.out.println("LotController getLotAll");
        LotController instance = new LotController();
        List<Lot> result = instance.getAllLotes();
        assertTrue(result!=null && result.size()>0);

    }

 
    @Test
    public void testGetLotById() {
        System.out.println("LotController getLotById");
        int id = 4;
        LotController instance = new LotController();
        Lot result = instance.getLotById(id);
        assertTrue(result!=null && result.getId()==4);
    }
}