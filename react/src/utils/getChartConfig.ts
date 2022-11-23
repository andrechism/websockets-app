import { ApexOptions } from "apexcharts"
import { DefaultTheme } from "styled-components"

export const getChartOptions = (theme: DefaultTheme) => {
    const options: ApexOptions = {
        colors: [
            theme.colors.strokes.primary,
            theme.colors.strokes.secondary
        ],
        legend: {
            position: 'top',
            markers: {
                width: 23,   
                height: 10,
                radius: 0,
            },
        },
        stroke: {
            curve: "straight",
            width: 2,
        },
        markers: {
            size: 2,
            strokeColors: [
                theme.colors.strokes.primary,
                theme.colors.strokes.secondary
            ],
            colors: ['white'],
            strokeWidth: 1,
            shape: 'circle'
        },
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            foreColor: theme.colors.primary
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                right: 30
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        xaxis: {
            type: 'datetime',

            labels: {
                style: {
                    fontSize: '10',
                },
                formatter(value) {
                    return new Date(value).toLocaleDateString('pt-BR', {
                        day: "2-digit",
                        month: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                    }).split(' ')
                },
            }
        },
    }

    return options
}