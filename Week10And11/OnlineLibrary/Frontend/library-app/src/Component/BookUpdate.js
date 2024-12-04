import React, {useEffect, useState } from "react";
import axios from 'axios';
import {useParams } from "react-router-dom";
function Book_UpDateForm(props) {
  const [state, setState] = useState({
    BookTitle: "",
    Author: "",
    Format: "",
    Topic:"",
    PubYear: 1990,
  });

  let url= "http://localhost:5000/"
  let params = useParams();
 
  const handleChange = (e) => {
  const value = e.target.value;
  setState({
    ...state,
    [e.target.name]: value,
  });
};

// this is on compunt Did Mount Event analogy
useEffect(() => {
  axios.get('http://localhost:5000/update-book/'+params.id)
      .then(res => {
          // set the state variable from 
          //the data received from the axios api
          console.log("update fun"+res.data)
          setState(res.data)
      }) //
     
      .catch(err => {
        console.log("error has occured")
      })
}, []);
  const OnSubmit=(e) =>
   {
   
    e.preventDefault();
    const bookdata={
            BookTitle:state.BookTitle,
            
            PubYear:state.PubYear,
            Author:state.Author,
            
            Topic:state.Topic,
            Format:state.Format

    }
    
    axios.post(url+"update-book/"+params.id, bookdata)
    .then(res => console.log(res.data));
      }
  return (
    <div style={{marginTop: 10}}>
      <h3> Update Book Id: {state.BookTitle}</h3>
      <form onSubmit={OnSubmit} method="Post">
      <div className="form-group"> 
          <label>Book Title: </label>
          <input  className="form-control" type="text" name="BookTitle"
            value={state.BookTitle}
            onChange={handleChange}
          />
      </div>
        <div className="form-group">
        <label>Book Authors: </label>
          <input  className="form-control" name="Author"
            value={state.Author}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
        <label>
          Pick Book topic :{" "}
          <select className="form-control" name="Topic"
            value={state.Topic}
onChange={handleChange}
          >
            <option value="Computer Science">Computer Science</option>
            <option value="Programming" >Programming</option>
            <option value="Data Science">Data Sceince</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </label>


        </div>
        <div className="form-group">
        <label>Formate: </label>
        <div className="form-check form-check-inline">
          <input className="form-check-label"
            type="radio"
            name="Format"
            value="Hard Copy"
            checked={state.Format === "Hard Copy"}
            onChange={handleChange}
          />
        
         <label className="form-check-label"> Hard Copy </label>
         </div>
         <div className="form-check form-check-inline">
         <input className="form-check-label"
            type="radio"
            name="Format"
            value="Electronic Copy"
            checked={state.Format === "Electronic Copy"}
            onChange={handleChange}
          />
        
         <label className="form-check-label"> Electronic Copy</label>
        </div>
        </div>
        
        <br />
        <br />
        <label>
          Publication Year (between 1980 and 2025):
          <input
            type="range"
            name="PubYear"
            min="1980"
            max="2025"
            value={state.PubYear}
            onChange={handleChange}
          />

        </label>
        <center>
        <div className="form-group">
                        <input type="submit" value="UpDate" className="btn btn-primary" />
                    </div>
        </center>            
      </form>
      
    </div>
  );
}
export default Book_UpDateForm;
