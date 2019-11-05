import React,{useState} from 'react';
import { connect } from "react-redux";
import {addEntry} from '../actions';

 function AddEntry({response , addEntry}){

    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [department,setDepartment]=useState('');
    const [purpose,setPurpose]=useState('');
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        var today = new Date();
        const time= today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        var date= today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
        var id =Math.floor(Math.random() * 10000000);

        const data ={
            id:id,
            name:name,
            address:address,
            phone:phone,
            department:department,
            purpose:purpose,
            entrydate:date,
            entrytime:time
            

        }
        alert(`Submitting data for ${name}`)
        console.log(data);
        addEntry(data);
    }
    const successBox= response.message &&  <div className="alert alert-success">{response.message}</div>;
    const errorBox = response.error && <div className="alert alert-danger">{response.error}</div>;
    return(
        <form className="text-center border border-light p-5" onSubmit={handleSubmit}>
            <p className="h4 mb-4">Add New Visitor</p>
            <input type="text" name="name" className="form-control mb-4" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name="address" className="form-control mb-4" value={address} placeholder="enter address" onChange={e=>setAddress(e.target.value)}/>
            <input type="text" name="phone" className="form-control mb-4" value={phone} placeholder="Enter phone number" onChange={e=>setPhone(e.target.value)}/>
            <input type="text" name="department" className="form-control mb-4" value={department} placeholder="Enter Department to visit" onChange={e=>setDepartment(e.target.value)}/>
            <input type="text" name="purpose" className="form-control mb-4" value={purpose} placeholder="Enter purpose of visit" onChange={e=>setPurpose(e.target.value)}/>
            <button className="btn btn-info btn-block" type="submit" >Add </button>
            {successBox}
            {errorBox}
           
        </form>
    )
}

const mapStateToProps = state=>{
    return {
        response:state.itemresponse
    }
}
const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
        addEntry: (value) => dispatch(addEntry(value)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddEntry);
