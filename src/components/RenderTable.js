import React from 'react';

export default function RenderTable(props){
   var toreturn=  props.data.map(function (item, i){
        var entry = item.map(function (element, j) {
            //the logic is to render headings
            if(j==0){
             return ( 
                 
                <th key={j}> {element} </th>
                );
            }
            else{
                return ( 
                    <td key={j}> {element} </td>
                    );
               
            }    
        });
        
        return (
            <tr key={i}> {entry} 
            </tr>
         );
    });
  
    return(
        <tbody>
            {toreturn}
        </tbody>
    )
}