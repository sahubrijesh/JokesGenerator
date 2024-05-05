import React, { useState } from 'react'

function Jokes() {

    const [joke, setJoke] = React.useState("")

    const getJoke = () => {
        let id = Math.floor(Math.random() * 221 + 1);
        fetch(`http://localhost:8080/api/v1/public/randomjokes/${id}`)
        .then(response => response.json())
        .then(res => {
            console.log(res)
            setJoke(res.data.content)
        })
        
    }

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Layout container with fixed size */}
      <div className="flex flex-col items-center p-4 border border-gray-200 rounded shadow-lg w-2/3 h-96  backdrop-filter backdrop-blur-lg">
        <button
          onClick={getJoke}
          className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Get Joke
        </button>
        <p className="text-xl mt-4">{joke}</p>
      </div>
    </div>
  )
}

export default Jokes