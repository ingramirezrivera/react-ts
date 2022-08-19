import React from 'react';



const Title = ({ title }: { title: string }): JSX.Element => {
  return (
    <div>
        <h1 className='text-xl text-slate-700 text-left'> { title } </h1>
    </div>
  )
}

export default Title;