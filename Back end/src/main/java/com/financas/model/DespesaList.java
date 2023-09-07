package com.financas.model;

import java.time.LocalDate;
import java.util.List;

public class DespesaList {
    private ServicoDespesa servicoDespesa;

    public DespesaList(ServicoDespesa servicoDespesa) {
        this.servicoDespesa = servicoDespesa;
    }

    public void listarDespesas() {
        List<Despesa> despesas = servicoDespesa.obterTodasDespesas();

        if (despesas.isEmpty()) {
            System.out.println("Nenhuma despesa cadastrada.");
        } else {
            System.out.println("Lista de Despesas:");
            for (Despesa despesa : despesas) {
                exibirDespesa(despesa);
            }
        }
    }

    private void exibirDespesa(Despesa despesa) {
        System.out.println("ID: " + despesa.getId());
        System.out.println("Data: " + despesa.getData());
        System.out.println("Valor: " + despesa.getValor());
        System.out.println("Categoria: " + despesa.getCategoria());
        System.out.println("Descrição: " + despesa.getDescricao());
        System.out.println("-----------------------------");
    }

}