package com.financas;

import com.financas.model.Despesa;
import com.financas.model.DespesaList;
import com.financas.model.ServicoDespesa;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ServicoDespesa servicoDespesa = new ServicoDespesa();
		DespesaList despesaList = new DespesaList(servicoDespesa);

		LocalDate dataDespesa1 = LocalDate.of(2023, 9, 1);
		LocalDate dataDespesa2 = LocalDate.of(2023, 9, 2);

		servicoDespesa.cadastrarDespesa(new Despesa(dataDespesa1,
				100.0,
				"Alimentação",
				"Restaurante"));

		servicoDespesa.cadastrarDespesa(new Despesa(dataDespesa2,
				50.0,
				"Transporte",
				"Uber"));

		despesaList.listarDespesas();
	}

}
