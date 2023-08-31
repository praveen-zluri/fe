import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import data from '../../public/data.json'

const Prompt = () => {

const [prompt, setPrompt] = useState('');
// const [prompt, setPrompt] = useState('');

useEffect(() => {
    if(prompt.length > 10) {
        console.log(`prompt: `, prompt);
    }
}, [prompt]);

function sendPrompt(prompts) {
    console.log(`after clicking on send btn: `, prompts);
    axios.get('data.json').then(res => console.log(`res: `, res)).catch(err => console.log(`err: `, err));
}

  return (
    <div className="d-flex flex-column justify-content-center">
      <legend className="text-center">Enter your prompt</legend>
      <textarea
        name="prompt"
        id="prompt-main"
        cols="30"
        rows="10"
        placeholder="example prompt..."
        onChange={(e) => {
            e.preventDefault();
            setPrompt(e.target.value);
            }}>
        </textarea>
    &nbsp;
    <button className="btn btn-primary" onClick={() => sendPrompt(prompt) }>Send Prompt</button>
</div>
  )
}

export default Prompt
