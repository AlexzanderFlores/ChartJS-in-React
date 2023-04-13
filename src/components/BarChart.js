import React from 'react'
import {  Bar, Line, defaults } from 'react-chartjs-2'
import Homepage from './Homepage'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = (props) => {
  let suck = [];
  let temp = [];
  let tempString = props.name[1];
  if(tempString != undefined){
  const mars = tempString.split(";");

  for(let i = 0; i < mars.length; i++) {
    let newString = mars[i].replace('(', '');
    newString = newString.replace(')','');
    const splitString = newString.split(',');
    if(splitString[1] !== undefined && splitString[0] !== undefined){
    suck.push(splitString[0]);
    let newTemp = splitString[1].replace(' ','');
   
    temp.push(parseInt(newTemp));
    }
  }

}

  
  return (
    <div>
      
      <Bar
        data={{
          labels: suck,
          datasets: [
            {
              label: props.name[0],
              data: temp,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    
    
    </div>
  )
}

export default BarChart
