import './styles.css'

function App() {
  return (
    <div id='quote-box'>
      <div className='p-2'>
        <div className='wrapper'>
          <div id='text' className='text-div'>
            <p>
              "If you’re offered a seat on a rocket ship, don’t ask what seat!
              Just get on.""
            </p>
          </div>
          <div id='author'>
            <div></div>
            <p>- napoleon</p>
          </div>
          <div className='buttons'>
            <div className='wrapper-icons'>
              <div className='icon cursor-pointer'>
                <i className='fa-brands fa-twitter'></i>
              </div>
              <div className='icon cursor-pointer'>
                <i className='fa-brands fa-tumblr'></i>
              </div>
            </div>

            <button id='new-quote' className='cursor-pointer'>
              new quote
            </button>
          </div>
        </div>

        <p className='santi'>By Santiago Manso Castro</p>
      </div>
    </div>
  )
}

export default App
