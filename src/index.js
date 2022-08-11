import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './books.jpg';
import calculator from './image/calculator.jpg';
import todo from './image/todo.jpg';
import dp from './image/dp.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <section className='header text-white'>
    <div className='container head'>
      <div className='row row-cols-1 '>
        <div className='col-4  im '>
          <img src={dp} className="border rounded-circle "></img>
        </div>
        <div className=' col-8 mt-4 text-end detail'>
          <h2>J DEEPAK</h2>
          <h4>Web Developer</h4>
          <h4>Madurai</h4>
          <button className='bg-danger text-white m-2 b-0'>Email Me</button>
        </div>
        <div className='col-12 text-center buttom '>
          <button className='bg-warning  '>About Me</button>
          <button className='bg-warning   '> Project</button>
          <button className='bg-warning '>Contact Me</button>
        </div>
      </div>
    </div>
  </section>

  <section className='about'>
    <div className='container '>
      <div className='row row-cols-1'>

        <div className='col-12  text-center text-white p-3'>
          <h3>PROJECT / EXPERINCE</h3>
        </div>

        <div className='col-12  ca  '>
          <div className="card col-4">
            <img src={books} ></img>
            <div className='card-body'><h4>Project-title-1</h4><p>Project description...</p></div>
          </div>
          <div className="card col-4">
            <img src={todo} ></img>
            <div className='card-body'><h4>Project-title-2</h4><p>Project description...</p></div>
          </div>
          <div className="card col-4">
            <img src={calculator} ></img>
            <div className='card-body'><h4>Project-title-3</h4><p>Project description...</p></div>
          </div>

          <div className='col-12  ca  '>
            <div className="card col-4 ">
              <img src={todo} ></img>
              <div className='card-body'><h4>Project-title-4</h4><p>Project description...</p></div>
            </div>
            <div className="card col-4 ">
              <img src={calculator} ></img>
              <div className='card-body'><h4>Project-title-5</h4><p>Project description...</p></div>
            </div>
            <div className="card col-4 ">
              <img src={books} ></img>
              <div className='card-body'><h4>Project-title-6</h4><p>Project description...</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className='contact'>
    <div className='container'>
        <h3 className=' fo'>About Me</h3>
      <div className='row  row-cols-1 ff pb-5 '>
        <div className='col-5 foot'>
          <h3 className='p-3 text-center'>Personal Details</h3>
          <ul>
            <li>Deepak</li>
            <li>DOB</li>
            <li>Location</li>
            <li>Status</li>
            <li>Ph:09876543210</li>
          </ul>
        </div>
        <div className='col-5 footr'>
          <h3 className='p-3 text-center'>Education/Skillset</h3>
          <ul>
            <li>BE ECE</li>
            <li>HTML,CSS,JS,BOOTSTRAP</li>
            <li>React JS </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
<div className='text-center m-3'>@ Copyright 2022</div>
</>

);


