import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='sm:grid sm:grid-col-2 lg:grid-cols-3 xl:grid-cols4 2xl:grid-cols-5 max-w-6xl' >
        {results.map((result) => (
            <Card key={result.di}  result={result} />
        ))}
    </div>
  )
}
