package com.financas.model;

import com.sun.istack.NotNull;

import java.util.ArrayList;
import java.util.List;

public class ServicoDespesa {
    private List<Despesa> despesas;
    private int proximoId;

    public ServicoDespesa() {
        this.despesas = new ArrayList<>();
        this.proximoId = 1;
    }
    public void cadastrarDespesa(@NotNull Despesa despesa) {
        despesa.setId(proximoId);
        despesas.add(despesa);
        proximoId++;
    }

    public List<Despesa> obterTodasDespesas() {
        return despesas;
    }

    public void excluirDespesa(int id) {
        for (Despesa despesa : despesas) {
            if (despesa.getId() == id) {
                despesas.remove(despesa);
                return;
            }
        }
        throw new IllegalArgumentException("Despesa com ID " + id + " não encontrada.");
    }
}
