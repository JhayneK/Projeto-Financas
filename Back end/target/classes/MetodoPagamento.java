package com.financas.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class MetodoPagamento extends EntityId {
    @Column(name = "metodo", nullable = false, length = 40)
    private String metodo;

    //region Getters e Setters
    public String getMetodo() {
        return metodo;
    }

    public void setMetodo(String metodo) {
        this.metodo = metodo;
    }
    //endregion
}
