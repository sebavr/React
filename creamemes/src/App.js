import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1]=useState('');
  const [linea2, setLinea2]=useState('');
  const [imagen, setImagen]=useState('');

  const onChangeLinea1=function(evento){
    //debugger;
    
    //colocar el valor en linea1, react actuliza la pag para que se muestre altiro
    setLinea1(evento.target.value);
  };

  const onChangeLinea2=function(evento){
    //debugger;
    //colocar el valor en linea1, react actuliza la pag para que se muestre altiro
    setLinea2(evento.target.value);
  };

  const onChangeImagen=function(evento){
    //debugger;
    //colocar el valor en linea1, react actuliza la pag para que se muestre altiro
    setImagen(evento.target.value);
  };

  const onClickExportar=function(evento){
   alert("Exportar");
   
   html2canvas(document.querySelector("#meme")).then(canvas => {
    
    var img    = canvas.toDataURL("image/png");
    

    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
});
  };

  return (
    <div className="App">

{/*Select picker de memes */}

<select onChange={onChangeImagen}>
  <option value="fire">fire</option>
  <option value="futurama">futurama</option>
  <option value="history">history</option>
  <option value="matrix">matrix</option>
  <option value="philosoraptor">philosoraptor</option>
  <option value="smart">smartguy</option>
  
</select> <br/>

{/*Input text primera linea */}
<input onChange={onChangeLinea1} type="text" placeholder=' linea 1'/><br />
{/*Input text segunda linea */}
<input onChange={onChangeLinea2} type="text" placeholder=' linea 2'/><br />
{/*boton exportar*/}
<button onClick={onClickExportar}>Exportar</button>

<div className='meme' id='meme'>
  <span>{linea1}</span><br />
  <span>{linea2}</span>
  <img src={"/img/"+imagen+".jpg"} />
</div>

    </div>
  );
}

export default App;
