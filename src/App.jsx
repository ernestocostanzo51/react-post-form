import { useState } from 'react'
import { useEffect } from 'react'


function App() {

const [post, usePost] = useState({
  name: "",
  title: "",
  body: "",
  public: false
})



  const link = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
  

  function handleChange(e) {
    const { name, value, type } = e.target.value;
    usePost({...post,[name]: type === 'radio' ? (value === 'true') : value
    });
  }

  function apiCall(a){
    e.preventDefault();

    fetch(link) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

  }

  return (
    <>
     <div className='container'>
      <form onSubmit={apiCall}>
      <div className='row'>
          <div className='col-6 m-3'>
            <p>Autore:</p>
           <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder='inserisci autore'
            name='name'
            value={post.name}
            onChange={handleChange}>
            </input>
           </div>
          <div className='col m-3'>
            <p>Titolo:</p>
           <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="inserisci titolo"
            name='title'
            value={post.title}
            onChange={handleChange}>
            </input>
          </div>
        </div>
        <div className='row'>
          <div className='col-8'>
          <p>inserisci il testo</p>
          <textarea
           className="form-control"
           id="exampleFormControlTextarea1"
           rows="3"
           value={post.body}
           onChange={handleChange}>
          </textarea>
          </div>
          <div className='col-1'>
            <p>Privato</p>
              <input
               className="form-check-input"
               type="radio"
               name="public" 
               value="false" 
               checked={post.public === false}
               onChange={handleChange}>
               </input>
              </div>
              <div className='col-1'>
                <p>Publico</p>
            <input
             className="form-check-input"
              type="radio"
              name="public" 
              value="false" 
              checked={post.public === false}
              onChange={handleChange}>

              </input>
              </div>
              <div className='col'>
                <button type='submit' className='btn btn-primary'>Posta</button>
              </div>
        </div>
</form>
      </div>
     
    </>
  )
}

export default App
