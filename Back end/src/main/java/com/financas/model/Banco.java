package com.financas.model;

public class Banco extends EntityId {
    private String banco;

    public Banco(String banco) {
        this.banco = banco;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        this.banco = banco;
    }
}
