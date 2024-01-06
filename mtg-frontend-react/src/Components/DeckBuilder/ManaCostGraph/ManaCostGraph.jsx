import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ManaCostGraph = ({ deck }) => {
    const chartRef = useRef();
    const chartInstance = useRef(null);

    useEffect(() => {
        if (Object.keys(deck.cards).length !== 0) {
            const manaCosts = {};

            for (let card in deck.cards) {
                if (deck.cards[card].data.cmc && manaCosts[deck.cards[card].data.cmc]) {
                    manaCosts[deck.cards[card].data.cmc]++;
                } else if (deck.cards[card].data.cmc && !manaCosts[deck.cards[card].data.cmc]) {
                    manaCosts[deck.cards[card].data.cmc] = 1;
                }
            }

            const labels = Object.keys(manaCosts);
            const data = Object.values(manaCosts);

            const ctx = chartRef.current.getContext('2d');
            

            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Card Count',
                            data,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
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

    return <canvas ref={chartRef} width="400" height="200" />;
};

export default ManaCostGraph;
