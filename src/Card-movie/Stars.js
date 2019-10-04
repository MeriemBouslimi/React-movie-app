import React from 'react'

export default function Stars({ searchRating = () => { }, count }) {
  let arr = []
  for (let i = 0; i < 5; i++) {
    if (i < count)
      arr.push(<span className='star-yellow' onClick={() => searchRating(i + 1)} >★</span>)
    else
      arr.push(<span className='star-white' onClick={() => searchRating(i + 1)} >☆</span>)
  }
  return (
    <div>
      {arr}
    </div>
  )
}



