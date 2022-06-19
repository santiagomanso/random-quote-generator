import './styles.css'

function App() {
  return (
    <div id='quote-box'>
      <div className='wrapper'>
        <div id='text'>sdlkjdfglksdjjfgkldgkjdfggfdfs</div>
        <div id='author'>- Napoleon</div>
        <div className='buttons'>
          <div className='flex'>
            <div className='icon'>
              <i class='fa-brands fa-twitter'></i>
            </div>
            <div>
              <i class='fa-brands fa-tumblr'></i>
            </div>
          </div>
          <button id='new-quote'>new quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
