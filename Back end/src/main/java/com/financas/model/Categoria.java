package com.financas.model;

public class Categoria extends EntityId {
    private Byte catDespesaReceita;
    private String tpCategoria;

    public Categoria(Byte catDespesaReceita, String tpCategoria) {
        this.catDespesaReceita = catDespesaReceita;
        this.tpCategoria = tpCategoria;
    }

    public Byte getCatDespesaReceita() {
        return catDespesaReceita;
    }

    public void setCatDespesaReceita(Byte catDespesaReceita) {
        this.catDespesaReceita = catDespesaReceita;
    }

    public String getTpCategoria() {
        return tpCategoria;
    }

    public void setTpCategoria(String tpCategoria) {
        this.tpCategoria = tpCategoria;
    }
}
