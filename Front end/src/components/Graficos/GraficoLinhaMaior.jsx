import ApexCharts from "react-apexcharts";
// import axios from "axios";

export default function GraficoLinhaMaior({
    titulo,
    width = 500,
    height = 500,
}) {

    // Dados ficticios - implementar puxada da API para cada tipo de gráfico
    const dadosFicticios = [10, 41, 100, 51, 77, 54, 69, 91, 138]
    const seriesData = [
        {
            name: titulo,
            data: dadosFicticios
        },
    ];

    const optionsLine = {
        chart: {
            height: 250,
            type: "line",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        title: {
            text: titulo,
            align: "left",
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
            ],
        },
    };

    return (
        <ApexCharts
            style={{ margin: "0px 2rem" }}
            width={width}
            height={height}
            series={seriesData}
            options={optionsLine}
            type="line"
        />
    );
}
