import {React,useContext, useState, useEffect} from "react";
import {keyContext} from "./keyContext";
import teoria from "teoria";
import '../App.css'


export default function Diatonic_Scale (){
const root = useContext(keyContext)

const [chords, setChords] = useState([])

useEffect(()=>{
  displayDiatonic();
},[root.KeyM])

  function displayDiatonic(){
    //const chords = document.getElementById('chord')
    const rootK = root.KeyM
    let chordArr = []
    if(rootK == ''){
      return(
        <div>Waiting for Key Selection</div>
      )
    } else {
    const scale = teoria.note(rootK).scale('ionian').simple()
      scale.forEach(function (note){
       // var row = chords.insertRow()
        if(scale.indexOf(note)==0 || scale.indexOf(note)==3 ||scale.indexOf(note)== 4)        {
          chordArr.push(teoria.note(note).chord('M').name)
          //var cell = row.insertCell();
          //cell.innerText = teoria.note(scale[i]).chord('M').name
        } 
        else if (scale.indexOf(note)==6){
          chordArr.push(teoria.note(note).chord('dim').name)
        }
        
        else {
          chordArr.push(teoria.note(note).chord('m').name)
          //var cell = row.insertCell()
          //cell.innerText =  teoria.note(scale[i]).chord('m').name
        }
        setChords(chordArr);
      })
    }
  }
  
  return (
    <div className="diatonic">
      <h2>Diatonic Scale</h2>
      <div className="diatonic_list">
        <table className="diatonic_table">
          <thead>
            <tr>
              <th>I</th>
              <th>ii</th>
              <th>iii</th>
              <th>IV</th>
              <th>V</th>
              <th>vi</th>
              <th>vii <i>dim</i></th>
            </tr>
          </thead>
          <tbody id="chord">
            <tr>
              {chords.map((chord,index)=> (
                <td key={index}>{chord}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}