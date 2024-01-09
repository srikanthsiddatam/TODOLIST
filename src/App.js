import { useState} from 'react'
import './App.css'

const App=()=>{

const [todoinput,settodoinput]=useState("")
  const [todo,settodo]=useState([
    {
      id:1,
      task:"learn react"
    },
    {
      id:2,
      task:"learn Angular"
    },
    // {
    //   id:3,
    //   task:"learn Web development"
    // }

    

  ])

  let nexttodo=3
  const changetodo=()=>{
    if(todoinput===""){
      alert("add some task")
    }
    else{
      const newtodos=[...todo
      ,
      {
        id: nexttodo++,
        task:todoinput
      }
    
    ]
    settodo(newtodos)
    settodoinput("")
      
    }
  }
  const delete11=(id)=>{
  let updatedtodos=  todo.fliter((todo1)=>{
      return todo1.id != id

    })

    updatedtodos(settodo)

  }






  return(
    <>

    
    <div className='container mt-5 '>

      <h1>TODO APP USING REACT</h1>
        <div className='input-group'>
               <input className='form-control' type="text" onChange={(e)=>{
                let task=e.target.value
                settodoinput(task)
               }} value={todoinput} />
               <button className='btn btn-primary' onClick={changetodo}>Add</button>
      </div>
      <ul className='list-group mt-5'>
       { todo.map((item)=>{
        return <li className='list-group-item'>
        <p>{item.task}</p> 
        <button type="button" className='btn btn-primary' onClick={delete11}>❌</button>
      </li>



        })}
        
        
      </ul>
    </div>
   
    
    </>
  )
}
export default App