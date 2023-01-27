import {React,useState} from "react";
import {keyContext} from './keyContext'

import '../App.css'

import Diatonic_Scale from './Diatonic.jsx'


function Key(){

const [ KeyM, updateKey ] = useState('');
  
  function displayDiatonic (){
    //once key is selected show correlated
    // diatonic chord scale
    const select = document.getElementById("Natural").value;
       console.log(select)
    const accent = document.getElementById("Accents").value;
      console.log(accent)

    const key = select.concat(accent)
      console.log(key)

    updateKey(key)

    console.log(KeyM)
  }
  return(
    <keyContext.Provider value={{KeyM,updateKey}}>
    <div className="selectKey">
      <h1>Select a Key</h1>
      <select onChange={displayDiatonic} id="Natural">
        <option> C </option>
        <option> D </option>
        <option> E </option>
        <option> F </option>
        <option> G </option>
        <option> A </option>
        <option> B </option>
      </select>
      <select onChange={displayDiatonic} id="Accents"> 
        <option name="sharp"> # </option>
        <option name="natural"> </option>
        <option name="flat"> b </option>
      </select>
    </div>
    <div>
      <hr></hr>
      <Diatonic_Scale/>
    </div>
    </keyContext.Provider>
  )
}

export default Key