/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kursach.dal;

/**
 *
 * @author olejaja
 */
import java.util.List;
import kursach.model.User;
import org.apache.ibatis.session.SqlSession;


public class UserDal extends BaseDal{

    public UserDal() {
        super();
    }
    
    public List<User> selectAll()
    {
      SqlSession session = sqlSessionFactory.openSession(); 
      List<User> list = session.selectList("user.selectAll");
      session.close();
      return list;
    }
    
     public User selectById(int id)
    {
      SqlSession session = sqlSessionFactory.openSession(); 
      User user= session.selectOne("user.selectById",id);
      session.close();
      return user;
    }
    
    public int insert(User user)
    {
      SqlSession session = sqlSessionFactory.openSession();
      int count =  session.insert("user.insert",user);
      session.commit();
      session.close();
      return count;
    }
    
    public int update(User user)
    {
      SqlSession session = sqlSessionFactory.openSession(); 
      int count =  session.update("user.update",user);
      session.commit();
      session.close();
      return count;
    }
    
        
    public int delete(User user)
    {
      SqlSession session = sqlSessionFactory.openSession(); 
      int count =  session.delete("user.delete",user);
      session.commit();
      session.close();
      return count;
    }
    
}
