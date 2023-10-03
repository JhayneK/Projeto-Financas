package com.financas.model;
import javax.persistense.*;

@Entity
public class Banco extends EntityId {
    @Column(name = "banco", nullable= false)
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
