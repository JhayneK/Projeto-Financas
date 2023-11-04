package com.financas.model;
import javax.persistence.*;

@Entity
public class Banco extends EntityId {
    @Column(name = "banco", nullable = false, length = 50)
    private String banco;
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    //region Getters e Setters
    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        this.banco = banco;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    //endregion
}
