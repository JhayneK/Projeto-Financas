import GraficoLinhas from "./GraficoLinhas";
import GraficoLinhaMaior from "./GraficoLinhaMaior";
import GraficoDonut from "./GraficoDonut";

export default function Graf() {
    return (
        <div className="graf-container">
            <div className="charts-container">
                <div className="top-charts">
                    <GraficoLinhas titulo="Entrada" />
                    <GraficoLinhas titulo="Saída" />
                    <GraficoLinhas titulo="Total" />
                </div>
                <div className="bottom-charts">
                    <GraficoLinhaMaior titulo="Valores gastos - Linha do tempo" />
                    <GraficoDonut
                        titulo="Quantidade de gastos por tipo"
                        width={600}
                    />
                </div>
            </div>
        </div>
    );
}
