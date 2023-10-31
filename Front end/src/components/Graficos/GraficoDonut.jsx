import ApexCharts from "react-apexcharts";
// import axios from "axios";

export default function GraficoDonut({ titulo, width = 500, height = 500 }) {
    const seriesData = [21, 23, 19, 14, 6];

    const colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"];

    const optionsDonut = {
        chart: {
            type: "donut",
            width: "100%",
            height: 400,
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                customScale: 1,
                donut: {
                    size: "75%",
                },
                offsetY: 10,
            },
            stroke: {
                colors: undefined,
            },
        },
        colors: colorPalette,
        title: {
            text: titulo,
            style: {
                fontSize: "18px",
            },
        },
        // Todas as categorias - Puxas da API
        labels: ["Gasolina", "Energia", "Comida", "Assinatura", "Remédio"],
        legend: {
            position: "left",
            offsetY: 90,
        },
    };

    return (
        <ApexCharts
            style={{ margin: "0px 2rem" }}
            width={width}
            height={height}
            series={seriesData}
            options={optionsDonut}
            type="donut"
        />
    );
}
