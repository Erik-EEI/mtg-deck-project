import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ManaCostGraph = ({ deck }) => {
    const chartRef = useRef();
    const chartInstance = useRef(null);

    const getManaFrequencyTable = () => {
        const manaFreq = {};

        for (let card in deck.cards) {
            if ( deck.cards[card].data.cmc && manaFreq[deck.cards[card].data.cmc] ) {
                manaFreq[deck.cards[card].data.cmc]+= deck.cards[card].amount;
            } else if ( deck.cards[card].data.cmc && !manaFreq[deck.cards[card].data.cmc] ) {
                manaFreq[deck.cards[card].data.cmc] = deck.cards[card].amount;
            }
        }

        return manaFreq;
    }

    useEffect(() => {
        if (Object.keys(deck.cards).length !== 0) {
            const manaCosts = getManaFrequencyTable();
            const labels = Object.keys(manaCosts);
            const data = Object.values(manaCosts);
            let delayed;

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Card Count',
                            data,
                            backgroundColor: 'rgba(192,75,75,0.2)',
                            borderColor: 'rgb(192,75,75)',
                            borderWidth: 1,
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

    return <canvas ref={chartRef} width="400" height="200" />;
};

export default ManaCostGraph;
