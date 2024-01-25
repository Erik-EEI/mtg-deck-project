import {useEffect, useRef} from "react";
import Chart from "chart.js/auto";

const ColorIdentityGraph = ({ deck }) => {
    const chartRef = useRef();
    const chartInstance = useRef(null);

    const getColorGroups = () => {
        const colorFreq = {};
        const cardArray = Object.values(deck);
        console.log(cardArray);
        for (let card of cardArray) {
            const colorIdentity = card.data.color_identity[0];

            if (colorFreq[colorIdentity]) colorFreq[colorIdentity]++;
            else colorFreq[colorIdentity] = 1;
        }

        return colorFreq;
    }

    const provideRGBCode = ( colorCodeArray ) => {
        const rgbLibrary = {
            'R': 'rgb(168,8,8)',
            'G': 'rgb(1,112,1)',
            'U': 'rgb(16,51,133)',
            'W': 'rgb(250,255,108)',
            'B': 'rgb(35,34,34)',
        }

        return colorCodeArray.map((colorCode) => rgbLibrary[colorCode]);
    }


    useEffect(() => {
        if (deck) {
            const colorGroups = getColorGroups();
            const labels = Object.keys(colorGroups);
            const data = Object.values(colorGroups);
            let delayed;

            const ctx = chartRef.current.getContext('2d');

            chartInstance.current = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels,
                    datasets: [
                        {
                            label: "Card count:",
                            data,
                            backgroundColor: provideRGBCode( labels ),
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;

                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 200 + context.datasetIndex * 70;
                            }

                            return delay;
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [deck]);

    return <canvas ref={chartRef} width="400" height="200"/>;
};

export default ColorIdentityGraph;