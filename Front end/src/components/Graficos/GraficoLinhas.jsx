import ApexCharts from "react-apexcharts";
// import axios from "axios";

export default function GraficoLinhas({ titulo, width = 400, height = 250 }) {
    // Dados ficticios - implementar puxada da API para cada tipo de gráfico
    const dadosFicticios = [
        47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
    ];

    const seriesData = [
        {
            name: titulo,
            data: dadosFicticios,
        },
    ];

    const optionsData = {
        chart: {
            id: titulo,
            group: "sparklines",
            background: "#ffffff",
            type: "area",
            height: 160,
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            curve: "straight",
        },
        fill: {
            opacity: 1,
        },
        series: [
            {
                name: titulo,
                data: dadosFicticios,
            },
        ],
        labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
        yaxis: {
            min: 0,
        },
        xaxis: {
            type: "datetime",
        },
        colors: ["#008FFB"],
        title: {
            text: "R$455,31",
            offsetX: 30,
            style: {
                fontSize: "24px",
                cssClass: "apexcharts-yaxis-title",
            },
        },
        subtitle: {
            text: titulo,
            offsetX: 30,
            style: {
                fontSize: "14px",
                cssClass: "apexcharts-yaxis-title",
            },
        },
    };

    // const isSmallScreen = window.innerWidth <= 1366 && window.innerHeight <= 768;

    // width = isSmallScreen ? 100 : width;
    // height = isSmallScreen ? 100 : height;

    return (
        <ApexCharts
            style={{ margin: "0px 2rem" }}
            // Desabilitar o width e height quando o
            // tamanho da tela for 1366x768 para diminuir
            // seu tamanho
            width={width}
            height={height}
            // 
            series={seriesData}
            options={optionsData}
            type="area"
        />
    );
}
