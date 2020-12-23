//import { render } from 'node-sass';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/index.module.scss'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//import NavigationIcon from '@material-ui/icons/Navigation';


export default function home(props) {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const second = 1;
  var [events, setEvents] = useState([])
  var [contador, setContador] = useState(0)
 //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    var timer2 = setInterval( () => check(), 1000 ); 

    return function cleanup() {
      clearInterval(timerID);
      clearInterval(timer2);
      };
 });

  function tick() {
    setDate(new Date());
   }


  function check(){
    if (hour == date.getHours() && minute == date.getMinutes()
       && second == date.getSeconds()){
        alert('hello');
       
      }
   }

  const agendarHorario = () => {

    events.push({
      name: `evento ${contador}`,
      hora: hour,
      minuto: minute
    })
    setContador(contador+1)
    console.log(events)
    
    }


  return (
    
    
     <div className={styles.form}>
        
        <h1>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h1>
        <h2>Your time is: {hour}:{minute}</h2>
        <TextField onChange={event => setHour(event.target.value)}
        id="outlined-basic" label="Hora" variant="outlined" 
        className={styles.timeInput} />
        <a className = {styles.divisor}>:</a>

        <TextField onChange={event => setMinute(event.target.value)} 
        id="outlined-basic2" label="Minutos" variant="outlined" 
        className={styles.timeInput}/>
        <br/>
        <div className={styles.hourAction}></div>
        <br /><br /> <br />

        <button onClick={agendarHorario}>aaaaaa</button>
        
        
        <div>
          {events.map(x => (
            <li>{x.name}</li>
          ))}
        </div>
      </div>
      
      
    );
}