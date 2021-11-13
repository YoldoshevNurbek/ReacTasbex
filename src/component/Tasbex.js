import React, {useState} from "react";
import './Tasbex.css'
 function Tasbex (){
     let [count, setCount] = useState(0)
     let [item, setItem] = useState("")
    let [items, setName] = useState("")

    function saveItem (){
         localStorage.setItem("Number", item)
    }
    function saveName (){
        localStorage.setItem("name", items)
    }
    function add (){
        setCount(prev => prev + 1)
    }
    function clear (){
        setCount(prev => prev = 0 )
    }
     return(
      <>
      <div className="App">
          <div className="tasbeh">
              <div className="title">
              <h2>Elektron tasbeh</h2>
              </div>
            <div className="display" >
            {count}
            </div>
            <div className="click">
            <button 
            className="addBtn"
            onClick={add}
            ></button>
            <button 
            className="clearBtn"
            onClick={clear}
            ></button>
           
            
            
            </div>
          </div>
          <div className="form">
          <div>
          <input 
            type="number" 
            placeholder="Siz qilgan salovotlar sonini kiriting"
            value={item}
            onChange={(e)=> setItem(e.target.value)}
            />
            <button 
            className="saveBtn"
            onClick={saveItem} 
            >save</button>
          </div>
            <div>
                <input
                type="text"
                placeholder="Ismingizni qoldiring"
                value={items}
                onChange={(e)=> setName(e.target.value)}/>
            <button 
            className="saveBtn"
            onClick={saveName} 
            >save</button>
            </div>
          </div>
          <div className="storge">
              {localStorage.getItem("Number") && (
                  <div> 
                      <h3> Salovotlar soni: 
                          {localStorage.getItem("Number")}
                      </h3>
                  </div>
              )}
          {localStorage.getItem("name") &&(
                <div>
                    <h2>Ismim: {localStorage.getItem("name")}</h2>
                </div>
            )}
          </div>
          
      </div>
      </>  
     )
 }
 export default Tasbex