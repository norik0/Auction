package kursach.dal;

import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import kursach.model.Rate;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;


public class RateDalTest {
    
    public RateDalTest() {
    }

    @BeforeClass
    public static void setUpClass() throws Exception {
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

   
    @Test
    public void testSelectAll() {
        System.out.println("LotDAL selectAll");
        RateDal instance = new RateDal();
        List<Rate> result = instance.selectAll();
        assertTrue(result!=null && result.size()>0);
    }

  
    @Test
    public void testSelectById() {
        System.out.println("selectById");
        int id = 1;
        RateDal instance = new RateDal();
        Rate result = instance.selectById(id);
        assertTrue(result!=null && result.getId()==id);
    }

    
    @Test
    public void testUpdate() {
       assertTrue(false);
    }

    
    @Test
    public void testInsert() {
       assertTrue(false);
    }

    
    @Test
    public void testDelete() {
      assertTrue(false);
    }
    
    
}