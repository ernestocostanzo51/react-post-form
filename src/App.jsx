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
  useEffect(() =>{
    fetch(link)
    .then(res => res.json())
    .then(data => {
      usePost(data)
    })
  }, [])

  function handleChange(e) {
    const { name, value, type } = e.target.value;
    setPost({...post,[name]: type === 'radio' ? (value === 'true') : value
    });
  }


  return (
    <>
     <div className='container'>
      <form>
      <div className='row'>
          <div className='col-6 m-3'>
            <p>Autore:</p>
           <input
            type="text"
            class="form-control"
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
            class="form-control"
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
           class="form-control"
           id="exampleFormControlTextarea1"
           rows="3"
           value={post.body}
           onChange={handleChange}>
          </textarea>
          </div>
          <div className='col-1'>
            <p>Privato</p>
              <input
               class="form-check-input"
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
             class="form-check-input"
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
