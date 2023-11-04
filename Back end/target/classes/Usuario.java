package com.financas.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Usuario extends EntityId {
    @Column(name = "username", nullable = false, length = 64)
    private String username;
    @Column(name = "email", nullable = false, length = 64)
    private String email;
    @Column(name = "password", nullable = false, length = 64)
    private String password;
    @Column(name = "saldo", nullable = false, precision = 14, scale = 2)
    private Double saldo;
    @OneToMany(mappedBy = "usuario")
    private List<Banco> bancos;

    //region Getters e Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }

    public List<Banco> getBancos() {
        return bancos;
    }

    public void setBancos(List<Banco> bancos) {
        this.bancos = bancos;
    }
    //endregion
}
