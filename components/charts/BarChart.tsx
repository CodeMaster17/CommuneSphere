'use client'
import { useEffect } from "react"
import { Chart } from "chart.js";
function Example() {
    useEffect(() => {
        const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Web", "App", "Cyber", "UI/UX", "Cloud", "Youtube"],
                datasets: [{
                    data: [66, 144, 146, 116, 107, 131, 43],
                    label: "1st years",
                    borderColor: "#334155",
                    backgroundColor: "#334155",
                    borderWidth: 2
                }, {
                    data: [40, 100, 44, 70, 63, 30, 10],
                    label: "2nd years",
                    borderColor: "#64748b",
                    backgroundColor: "#64748b",
                    borderWidth: 2
                }, {
                    data: [20, 24, 50, 34, 33, 23, 12],
                    label: "3rd years",
                    borderColor: "#334155",
                    backgroundColor: "#e2e8f0",
                    borderWidth: 2
                },
                {
                    data: [6, 20, 52, 12, 11, 78, 21],
                    label: "4th years",
                    borderColor: "#475569",
                    backgroundColor: "#475569",
                    borderWidth: 2
                }
                ]
            },
        });
    }, [])


    return (
        <>

            <div className=" flex  w-full">
                <div className=' h-fit w-full rounded-xl   border-2 border-gray-400 pt-0  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Example;