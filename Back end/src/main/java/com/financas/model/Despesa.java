package com.financas.model;

import java.time.LocalDate;

public class Despesa extends EntityId{
    private LocalDate data;
    private double valor;
    private String categoria;
    private String descricao;

    public Despesa(LocalDate data, double valor, String categoria, String descricao) {
        this.data = data;
        this.valor = valor;
        this.categoria = categoria;
        this.descricao = descricao;
    }

    //region getter e setter
    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    //endregion
}
