import React from 'react';
import './App.css';

export default function App() {

  const handleSubmit=(e)=>{
    e.preventDefault();
    const first =e.target.fname.value;
    const last =e.target.lname.value;
    console.log("First name = " +first,"Last name = " +last);

  }


  return (


    <div>
      <form  onSubmit={handleSubmit}>
      <input type='text' name='fname' placeholder='First name'/><br/><br/>
      <input type='text' name='lname' placeholder='Last name'/><br/><br/>
      <button>Submit</button>
      </form>

    </div>
  );
};
