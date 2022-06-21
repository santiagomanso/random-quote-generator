import { useState } from 'react'
import { quotes, authors } from './data/dataArrays'
import './styles.css'

function App() {
  const handlerClick = () => {
    let index = randomIndex(quotes.length)
    setAuthor(authors[index])
    setQuote(quotes[index])
  }

  const randomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength)
  }

  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  )
  const [author, setAuthor] = useState(
    authors[Math.floor(Math.random() * authors.length)]
  )

  return (
    <div id='quote-box'>
      <div className='p-2'>
        <div className='wrapper'>
          <div id='text' className='text-div'>
            <p>{quote}</p>
          </div>
          <div id='author'>
            <div></div>
            <p>- {author}</p>
          </div>
          <div className='buttons'>
            <div className='wrapper-icons'>
              <div className='icon cursor-pointer'>
                <a
                  href='http://twitter.com/intent/tweet'
                  target='_blank'
                  rel='norrefer noreferrer'
                  id='tweet-quote'
                >
                  <i className='fa-brands fa-twitter'></i>
                </a>
              </div>
              <div className='icon cursor-pointer'>
                <i className='fa-brands fa-tumblr'></i>
              </div>
            </div>

            <button
              id='new-quote'
              className='cursor-pointer'
              onClick={handlerClick}
            >
              new quote
            </button>
          </div>
        </div>

        <div className='footer'>
          <p className='santi'>by Santiago Manso Castro</p>
          <svg
            id='emoji'
            viewBox='0 0 72 72'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            className='emoji-footer'
          >
            <g id='color'>
              <path
                fill='#92D3F5'
                d='M58,25.7l-11.9-4.8c-0.2-4.3-1.9-11.3-10.6-11.6c-12,0-14.6,11-14.6,11l-1,2l-0.6,1.2L14,25.7'
              />
              <path
                fill='#61B2E4'
                d='M19.0858,25.7L16.8,31.4c-0.3115,0.5831-0.3832,1.2648-0.2,1.9L19.5,44 c0.0564,0.1933,0.2588,0.3043,0.4521,0.2479C20.0717,44.213,20.1651,44.1195,20.2,44l0.2-7.7l0.6-0.6l1-1.3l8-8.8'
              />
              <path
                fill='#92D3F5'
                d='M17,60.949v-4c0-4.9941,4.6413-9.3352,9.6335-9.3352c6,5,12.9974,4.9176,18.9974-0.0824 C50.625,47.5314,55,51.9549,55,56.949v4'
              />
              <path
                fill='#61B2E4'
                d='M45.6624,60.949v-4.0122c-0.1404-2.631-1.6486-5.3621-3.7023-7.0128 c0.9952-0.5542,2.6756-1.5633,3.6708-2.3927C50.625,47.5314,55,51.9549,55,56.949v4'
              />
              <path
                fill='#61B2E4'
                d='M53.3683,40.539c-2.5437-1.0747-3.7346-4.008-2.6599-6.5517s4.008-3.7346,6.5517-2.6599 s3.7346,4.008,2.6599,6.5517c-0.4479,1.0601-1.2477,1.9332-2.2646,2.4721'
              />
              <path
                fill='#92D3F5'
                d='M55.3145,32.4717c-0.8786,0.137-1.6948,0.5381-2.34,1.15c1.5407-0.3467,3.1393-0.3467,4.68,0 C57.0093,33.0098,56.1931,32.6087,55.3145,32.4717z'
              />
              <polyline
                fill='#A57939'
                points='57.314,61 57.314,40.539 53.314,40.539 53.314,61'
              />
            </g>
            <g id='hair'>
              <path
                fill='#D0CFCE'
                d='M35.7577,54.3964c13.4215-9.6934,13.0943-22.1473,11.7-27.5827h-1.7c0,0,1.5809,7.897-9.7577,7.897 s-9.496-7.897-9.496-7.897h-1.7463C23.1558,31.5588,22.3608,42.4881,35.7577,54.3964z'
              />
            </g>
            <g id='skin'>
              <path
                fill='#FCEA2B'
                d='M45.7577,25.8136c0,0,1.5809,8.897-9.7577,8.897s-9.496-8.897-9.496-8.897'
              />
            </g>
            <g id='line'>
              <path
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19.0858,25.8L16.9,31.4 c-0.3115,0.5831-0.3832,1.2648-0.2,1.9L19.5,44c0.0564,0.1933,0.2588,0.3043,0.4521,0.2479C20.0717,44.213,20.1651,44.1195,20.2,44 l0.2-7.7c0.0103-0.473,0.0775-0.943,0.2-1.4'
              />
              <path
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M26.9,17.5 c-0.4245,1.0967-0.7263,2.2369-0.9,3.4l0,0l-12,4.9h44l-11.9-4.9c-0.2-4.3-2.2-11.3-10.9-11.6C22.2,9.3,20,22.8,20,22.8'
              />
              <path
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M53.3683,40.59 c-2.5437-1.0747-3.7346-4.008-2.6599-6.5517s4.008-3.7346,6.5517-2.6599s3.7346,4.008,2.6599,6.5517 c-0.4479,1.0601-1.2477,1.9332-2.2646,2.4721'
              />
              <polyline
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                points='57.314,60.051 57.314,40.605 53.314,40.605 53.314,60.051'
              />
              <path
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M46.4401,48.109 c2.7065,0.407,5.2719,1.9246,6.8759,4.0597'
              />
              <path
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17,60v-3 c0-4.5823,4.2159-8.3326,8.7675-8.92'
              />
              <path d='M42,29.9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S42,28.8,42,29.9' />
              <path d='M34,29.9c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2s0.9-2,2-2C33.1,27.9,34,28.8,34,29.9' />
              <path
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M33,38.1c1.9,1,4.1,1,6,0'
              />
              <path
                fill='none'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M35.7577,54.3964 c13.4215-9.6934,13.0943-22.1473,11.7-27.5827h-1.7c0,0,1.5809,7.897-9.7577,7.897s-9.496-7.897-9.496-7.897h-1.7463 C23.1558,31.5588,22.3608,42.4881,35.7577,54.3964z'
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default App
