/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kursach.model;

import java.util.List;
import java.util.Objects;

/**
 *
 * @author olejaja
 */
public class User {
     private long id;
    private String login;
    private String password;
    private List<Lot> lot;
    private List<Rate> rate;
    
    public User()
    {}

    public User(long id, String login, String password, List<Lot> lot) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.lot = lot;
        this.rate = rate;
    }

    public long getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }

    public List<Lot> getLot() {
        return lot;
    }
    
     public List<Rate> getRate() {
        return rate;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setLot(List<Lot> lot) {
        this.lot = lot;
    }
    
     public void setRate(List<Rate> rate) {
        this.rate = rate;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 67 * hash + (int) (this.id ^ (this.id >>> 32));
        hash = 67 * hash + Objects.hashCode(this.login);
        hash = 67 * hash + Objects.hashCode(this.password);
        hash = 67 * hash + Objects.hashCode(this.lot);
         hash = 67 * hash + Objects.hashCode(this.rate);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final User other = (User) obj;
        if (this.id != other.id) {
            return false;
        }
        if (!Objects.equals(this.login, other.login)) {
            return false;
        }
        if (!Objects.equals(this.password, other.password)) {
            return false;
        }
        if (!Objects.equals(this.lot, other.lot)) {
            return false;
        }
        
        if (!Objects.equals(this.rate, other.rate)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", login=" + login + ", password=" + password + ", lot=" + lot + ", rate=" + rate + '}';
    }

     
    
}
