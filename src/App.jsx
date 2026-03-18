import { useState } from 'react'
import { useEffect } from 'react'


function App() {

const [post, usePost] = useState({
  
})

  const link = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
  useEffect(() =>{
    fetch(link)
    .then(res => res.json())
    .then(data => {
      usePost(data)
    })
  }, [])



  return (
    <>
     <div className='container'>
      <div className='row'>
          <div className='col-6 m-3'>
            <p>Autore:</p>
           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='inserisci autore'></input>
           </div>
          <div className='col m-3'>
            <p>Titolo:</p>
           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="inserisci titolo"></input>
          </div>
        </div>
        <div className='row'>
          <div className='col-8'>
          <p>inserisci il testo</p>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className='col-2'>
            <p>Privato</p>
              <input class="form-check-input" type="radio"></input>
              </div>
              <div className='col-2'>
                <p>Publico</p>
            <input class="form-check-input" type="radio"></input>
              </div>
             

          
        </div>

          
        
        
    
          
      </div>
     
    </>
  )
}

export default App
