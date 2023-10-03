package com.financas.model;
import java.util.Date;
import javax.persistense.*;

@Entity
public class Fluxo extends EntityId {
    @Column(name = "flxDespesaReceita", nullable= false)
    private Byte flxDespesaReceita;
    @Column(name = "usuario", nullable= false)
    private Usuario usuario;
    @Column(name = "idReceitaUsuario", nullable= false)
    private Integer idReceitaUsuario;
    @Column(name = "idDespesaUsuario", nullable= false)
    private Integer idDespesaUsuario;
    @Column(name = "recorrente", nullable= false)
    private Byte recorrente;
    @Column(name = "banco", nullable= false)
    private Banco banco;
    @Column(name = "metodo", nullable= false)
    private Metodo metodo;
    @Column(name = "categoria", nullable= false)
    private Categoria categoria;
    @Column(name = "parcelamento", nullable= false)
    private Integer parcelamento;
    @Column(name = "valor", nullable= false)
    private Integer valor;
    @Column(name = "data", nullable= false)
    private Date data;
    @Column(name = "descricao", nullable= false)
    private String descricao;

    public Fluxo(Byte flxDespesaReceita, Usuario usuario, Integer idReceitaUsuario, Integer idDespesaUsuario, Byte recorrente, Banco banco, Metodo metodo, Categoria categoria, Integer parcelamento, Integer valor, Date data, String descricao) {
        this.flxDespesaReceita = flxDespesaReceita;
        this.usuario = usuario;
        this.idReceitaUsuario = idReceitaUsuario;
        this.idDespesaUsuario = idDespesaUsuario;
        this.recorrente = recorrente;
        this.banco = banco;
        this.metodo = metodo;
        this.categoria = categoria;
        this.parcelamento = parcelamento;
        this.valor = valor;
        this.data = data;
        this.descricao = descricao;
    }

    public Byte getFlxDespesaReceita() {
        return flxDespesaReceita;
    }

    public void setFlxDespesaReceita(Byte flxDespesaReceita) {
        this.flxDespesaReceita = flxDespesaReceita;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Integer getIdReceitaUsuario() {
        return idReceitaUsuario;
    }

    public void setIdReceitaUsuario(Integer idReceitaUsuario) {
        this.idReceitaUsuario = idReceitaUsuario;
    }

    public Integer getIdDespesaUsuario() {
        return idDespesaUsuario;
    }

    public void setIdDespesaUsuario(Integer idDespesaUsuario) {
        this.idDespesaUsuario = idDespesaUsuario;
    }

    public Byte getRecorrente() {
        return recorrente;
    }

    public void setRecorrente(Byte recorrente) {
        this.recorrente = recorrente;
    }

    public Banco getBanco() {
        return banco;
    }

    public void setBanco(Banco banco) {
        this.banco = banco;
    }

    public Metodo getMetodo() {
        return metodo;
    }

    public void setMetodo(Metodo metodo) {
        this.metodo = metodo;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Integer getParcelamento() {
        return parcelamento;
    }

    public void setParcelamento(Integer parcelamento) {
        this.parcelamento = parcelamento;
    }

    public Integer getValor() {
        return valor;
    }

    public void setValor(Integer valor) {
        this.valor = valor;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
