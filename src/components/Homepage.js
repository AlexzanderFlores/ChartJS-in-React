import React from 'react'
import { Pie, Bar, Line, defaults,  } from 'react-chartjs-2'
import { View, Text, input, useState} from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import RadarChart from './RadarChart'


defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

export const Homepage = () => {
   
    const [message, setMessage] = useState(" ");
    const [title, setTitle] = useState (" ");
    const [newMess, setNew] = useState([ ]);
    const [updated, setUpdated] = useState(message);
    const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };

    const handleCli = (event) => {
        setTitle(event.target.value)
    }

    const handleClick = () => {
        
        setUpdated(message);
        setNew([title, message]);

        
      };
    
      return (
        <div className='DigEdit'
            style={{
               
                scrollBehavior: "smooth",
                
            }}>
          
          <ul>
            <h1
                style={{
                    alignItems: "stretch",
                    
                }}>Welcome to DigEdit</h1>
            <h2>Please enter the title for the y-axis</h2>
            <input 
                type="text"
                id="title"
                name="title"
                onChange={handleCli}
                
                />
                
            <h3>Please enter in the format: (name,data) separated by ;</h3>
            <form>
                <textarea style={{maxHeight:'500px',
                minHeight:'250px',
                minWidth: '1000px',
                  resize:'none',
                  padding:'9px',
                  boxSizing:'border-box',
                  fontSize:'15px'}} onChange={handleChange}  />
           
      
      
      </form>
      
      <button style={{ width: "100px", height: "50px", }} onClick={handleClick} >Submit</button>
      <h5><select onChange={onChange}>
        <option defaultValue>
          Select Graph
        </option>
        <option value="BarChart">Bar Chart</option>
        <option value="LineChart">Line Chart</option>
        <option value="PieChart">Pie Chart</option>
        <option value="RadarChart">Radar Chart</option>
      </select></h5>
          </ul>
          
      {(selectValue==="BarChart") && <BarChart name={newMess}/>}
      {(selectValue==="LineChart") && <LineChart name={newMess}/>}
      {(selectValue==="PieChart") && <PieChart name={newMess}/>}
      {(selectValue==="RadarChart") && <RadarChart name={newMess}/>}
    
        </div>
        
      );
    
  }

export default Homepage
