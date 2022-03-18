import React, { useState } from 'react';
import data from './data';
function App() {
  const [textData, setTextData] = useState(data.random);
  const [inputValue, setInputValue] = useState({
    topic: "",
    count: "",
  });
  const [numParagraph, setNumParagraph] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputValue((inputValue) => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.count > 8) {
      setNumParagraph(8);
    } 
    else if (inputValue.count < 0) {
      setNumParagraph(1);
    } 
    else {
      setNumParagraph(inputValue.count)
    }

    setTextData(data[`${inputValue.topic}`])
  };


  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>

      <form className='lorem-form' onSubmit={handleSubmit}>
        <label>
          Select the Topic:
          <select
            name="topic"
            value={inputValue.topic}
            onChange={handleChange}>
              {Object.keys(data).map((keyName, index) => {
                return (
                  <option key={index} value={keyName}>{keyName}</option>
                )
              })}
          </select>
        </label>

        <label>
          Paragraphs:
          <input 
            type='number'
            name='count'
            value={inputValue.count}
            onChange={(event)=>handleChange(event)}>
          </input>
          <button type='submit' className='btn'>GENERATE</button>
        </label>
      </form>

      <article className='lorem-text'>
        {textData.map((paragraph, index)=>{
          if ( index < numParagraph ) {
            return (
              <p key={index}>{paragraph}</p>
            )
          }
        })}
      </article>

    </section>
    );
};

export default App;
