package com.financas.model;
import javax.persistense.*;

@Entity
public class Metodo extends EntityId {
    @Column(name = "metDespesaReceita", nullable= false)
    private Byte metDespesaReceita;
    @Column(name = "metodo", nullable= false)
    private String metodo;

    public Metodo(Byte metDespesaReceita, String metodo) {
        this.metDespesaReceita = metDespesaReceita;
        this.metodo = metodo;
    }

    public Byte getMetDespesaReceita() {
        return metDespesaReceita;
    }

    public void setMetDespesaReceita(Byte metDespesaReceita) {
        this.metDespesaReceita = metDespesaReceita;
    }

    public String getMetodo() {
        return metodo;
    }

    public void setMetodo(String metodo) {
        this.metodo = metodo;
    }
}
