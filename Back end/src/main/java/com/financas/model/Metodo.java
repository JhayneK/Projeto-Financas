package com.financas.model;

public class Metodo extends EntityId {
    private Byte metDespesaReceita;
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
