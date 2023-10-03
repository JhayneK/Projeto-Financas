package com.financas.model;
import javax.persistense.*;

@Entity
public class Usuario extends EntityId {
    @Column(name = "username", nullable= false)
    private String username;
    @Column(name = "email", nullable= false)
    private String email;
    @Column(name = "password", nullable= false)
    private String password;

    public Usuario(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

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
}
