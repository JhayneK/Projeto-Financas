package com.financas.model;
import javax.persistense.*;

@Entity
public class Categoria extends EntityId {
    @Column(name = "catDespesaReceita", nullable= false)
    private Byte catDespesaReceita;
    @Column(name = "tpCategoria", nullable= false)
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
