import React , {useState,useEffect} from 'react';
import RenderTable from './RenderTable';
import {connect} from 'react-redux';
import {getData} from '../actions/index' 
import axios from 'axios';

 function DataTable({getData,fetchedentry}){

    //fetch data once
     useEffect(()=>{
         getData();
     },[]);

     const [update,setUpdate]= useState(false); 

     const  [data,setData]=useState([
        ]);
        
        useEffect(()=>{
            const fetchedfromapi = fetchedentry.message;
            if(fetchedfromapi){
                setData(fetchedfromapi);
            }
            
        })
        
     


     let len ="";
      len =data.length;

      var col = [];
      //this include our table headers

      for (var i = 0; i < data.length; i++) {
          for (var key in data[i]) {
              if (col.indexOf(key) === -1) {
                  col.push(key);
              }
          }
      }
     console.log(col);
      //this code is used to hold data in an array
      
      var tabledata=[];
      for(var i=0;i<len;i++){
          tabledata[i] = [];
          for(var j in data[i]){
               var inside = data[i][j]
              
              tabledata[i].push(inside);
          
        }
      }
     console.log(tabledata)

     //create new table array containing cols and data
     var tableArray=[];
     for (var i=0;i<=tabledata.length;i++){
         tableArray[i]=[];
            if(i==0){
                tableArray[i]=col;
            }
            else{
                tableArray[i].push(tabledata[i-1]);
            }
     }
     console.log(tableArray);
     
     let finalarray = new Array();
     for(var i=0;i<tableArray.length;i++){
         finalarray[i] = new Array();
            len = tableArray[i].length;
          if(i!=0){
              len=tableArray[i][0].length;
          }

         for (var j=0;j<len;j++){
             if(i!==0)
             {
             finalarray[i][j]=tableArray[i][0][j];
             }
             else
             {
             finalarray[i][j]=tableArray[i][j];
             }
             
        }
     }
     console.log("Final");
     console.log(finalarray);

     //finally transpose the array
     let transposearray= [];

       let cols = finalarray[0].length;
       let rows = finalarray.length;     
         for(var j=0;j<cols;j++){
              transposearray[j]=[]
            for(var i=0;i<rows;i++){
                transposearray[j][i]=finalarray[i][j];
         }
     }
     console.log(transposearray);
     //

    return (
        
        <div className="text-center ">
            <p className="h4 mb-4">Today's Entry</p>
            <div className="container manage-overflow-x">
                <table className="table table-striped manage-overflow" border='1'>
                    <RenderTable data={transposearray}/>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        fetchedentry:state.fetchedentry
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getData: ()=> dispatch(getData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataTable)

//add map dispatch here

