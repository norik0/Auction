package kursach.dal;

import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import kursach.model.Lot;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.BeforeClass;


public class LotDalTest {
    
    public LotDalTest() {
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
        LotDal instance = new LotDal();
        List<Lot> result = instance.selectAll();
        assertTrue(result!=null && result.size()>0);
    }

  
    @Test
    public void testSelectById() {
        System.out.println("selectById");
        int id = 1;
        LotDal instance = new LotDal();
        Lot result = instance.selectById(id);
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