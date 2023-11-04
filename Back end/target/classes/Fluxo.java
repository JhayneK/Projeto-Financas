package com.financas.model;
import javax.persistence.*;
import java.util.Date;

@Entity
public class Fluxo extends EntityId {
    @Column(name = "gasto_receita", columnDefinition = "BIT", nullable = false)
    private Boolean gasto_receita;
    @Column(name = "recorrente", columnDefinition = "BIT", nullable = false)
    private Boolean recorrente;
    @ManyToOne
    @JoinColumn(name = "banco_id")
    private Banco banco;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
    @ManyToOne
    @JoinColumn(name = "metodo_pagamento_id")
    private MetodoPagamento metodo_pagamento;
    @Column(name = "parcelamento", precision = 2)
    private Double parcelamento;
    @Column(name = "valor", nullable = false, precision = 14, scale = 2)
    private Double valor;
    @Column(name = "data", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date data;
    @Column(name = "observacao", nullable = false, length = 250)
    private String observacao;

    //region Getters e Setters
    public Boolean getGasto_receita() {
        return gasto_receita;
    }

    public void setGasto_receita(Boolean gasto_receita) {
        this.gasto_receita = gasto_receita;
    }

    public Boolean getRecorrente() {
        return recorrente;
    }

    public void setRecorrente(Boolean recorrente) {
        this.recorrente = recorrente;
    }

    public Banco getBanco() {
        return banco;
    }

    public void setBanco(Banco banco) {
        this.banco = banco;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public MetodoPagamento getMetodo_pagamento() {
        return metodo_pagamento;
    }

    public void setMetodo_pagamento(MetodoPagamento metodo_pagamento) {
        this.metodo_pagamento = metodo_pagamento;
    }

    public Double getParcelamento() {
        return parcelamento;
    }

    public void setParcelamento(Double parcelamento) {
        this.parcelamento = parcelamento;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
    //endregion
}
