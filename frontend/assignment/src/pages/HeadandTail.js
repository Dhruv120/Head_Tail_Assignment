
import React, { useState } from 'react';
import Navbar from '../Components/Navbar'

function HeadandTail() {
    const [selectedValue, setSelectedValue] = useState(''); 
    const [coinColumns, setCoinColumns] = useState([[]]); 
  
    const handleDropdownChange = (e) => {
      setSelectedValue(e.target.value);
    };
  
    const handleAddCoin = () => {
      if (selectedValue !== '')
      {

        let currColumns = coinColumns;
        let lastColumn = currColumns[currColumns.length-1]
        if(lastColumn.length==0 || lastColumn[lastColumn.length-1]==selectedValue)
        {
          lastColumn.push(selectedValue)
          currColumns[currColumns.length-1] = lastColumn
        }
        else 
        {
          currColumns.push([selectedValue])
        }
        setCoinColumns(currColumns);

        // setCoinColumns((prevColumns) => {
        //   const lastColumn = prevColumns[prevColumns.length - 1];
        //   if (lastColumn.length > 0 && lastColumn[0] !== selectedValue) {
        //    
        //     return [...prevColumns, [selectedValue]];
        //   } else {
        //    
        //     lastColumn.push(selectedValue);
        //     return [...prevColumns];
        //   }
        // });
      }
      setSelectedValue('');
  
    };
  
    return (
      <div>
      <Navbar/>
      <br />
      <br />
      <div>
        <h2>Head & Tail</h2>
        <select style={{border:'2px solid black',margin:'30px',padding:"10px"}} value={selectedValue} onChange={handleDropdownChange}>
          <option value="">Select value</option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button style={{border:'2px solid black',padding:"10px"}} onClick={handleAddCoin}>Add</button>
  
        <div className="flex">
          {coinColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="mx-2">
              {column.map((coin, coinIndex) => (
                <div key={coinIndex}>{coin}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
  
  export default HeadandTail;
    
      
  