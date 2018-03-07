/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package kursach.model;

import java.util.Date;
import java.util.List;
import java.util.Objects;

/**
 *
 * @author olejaja
 */
public class Rate {
    private long id;
    private String login;
    private Double price;
    private List<Rate> rates;
    
     public Rate()
    {}

    public Rate(long id, String login, Double price, Date time, List<Rate> rates) {
        this.id = id;
        this.login = login;
        this.price = price;
        this.rates = rates;
    }

    public long getId() {
        return id;
    }


    public String getLogin() {
        return login;
    }

    public Double getPrice() {
        return price;
    }


    public List<Rate> getRate() {
        return rates;
    }

    public void setId(long id) {
        this.id = id;
    }


    public void setLogin(String login) {
        this.login = login;
    }

    public void setPrice(Double price) {
        this.price = price;
    }



    public void setRate(List<Rate> rates) {
        this.rates = rates;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 71 * hash + (int) (this.id ^ (this.id >>> 32));
        hash = 71 * hash + Objects.hashCode(this.login);
        hash = 71 * hash + Objects.hashCode(this.price);
        hash = 71 * hash + Objects.hashCode(this.rates);
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
        final Rate other = (Rate) obj;
        if (this.id != other.id) {
            return false;
        }
       
        if (!Objects.equals(this.login, other.login)) {
            return false;
        }
        if (!Objects.equals(this.price, other.price)) {
            return false;
        }
        if (!Objects.equals(this.rates, other.rates)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Rate{" + "id=" + id + ", login=" + login + ", price=" + price + '}';
    }

  
     
}
