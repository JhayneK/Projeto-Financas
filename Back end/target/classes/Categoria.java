package com.financas.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Categoria extends EntityId {
    @Column(name = "tp_categoria", nullable = false, length = 50)
    private String tp_categoria;

    //region Getters e Setters
    public String getTp_categoria() {
        return tp_categoria;
    }

    public void setTp_categoria(String tp_categoria) {
        this.tp_categoria = tp_categoria;
    }
    //endregion
}
