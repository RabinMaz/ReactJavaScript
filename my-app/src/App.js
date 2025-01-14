
import { useState } from "react";

const message=[
  "Learn React *",
  "Apply for jobs",
  "Invest your new Income"
];

function App() {
  const [step,Setsetup] = useState(1)
  const [visible,Setvisible] = useState(true)
  // const step = 3;
  const len = message.length;
 
  function HandlePrevious(){
   
    Setsetup(step === 1 ? 1 : step - 1 )
   
  }

  function HandleNext(){
    Setsetup(step === len ? len : step + 1)
  }
  return (
    <div>
      <button className="Close" onClick = {()=>Setvisible(visible===true?false:true)}>{`${visible===true?"Close":"Open"}`}</button>
      { 
      visible && (
      <div className="steps">
        <div className="numbers">
          <div className={`${step===1?"active":""}`}>1</div>
          <div className={`${step===2?"active":""}`}>2</div>
          <div className={`${step===3?"active":""}`}>3</div>
        </div>
        <p className="message">Step {step}: {message[step - 1]}</p>
        <div className="buttons">
          <button style={{backgroundColor:"#7950f2", color:'#fff'}} onClick={HandlePrevious}>Previous</button>
          <button style={{backgroundColor:"#7950f2", color:'#fff'}} onClick={HandleNext}>Next</button>
        </div>
      </div>
      )
    }
    </div>
  );

}

export default App;
