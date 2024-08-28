import React from 'react'

const HomeProdSingle = (x) => {
  return (
    <div>
      <section>
        <div>
            <img src={x.image} className ="h-48 w-full " alt="" />
        </div>
        <div className='fc text-xl'>
            {x.title}
        </div>
        <div className='fc font-bold'>
            Upto {x.off}% off
        </div>
      </section>
    </div>
  )
}

export default HomeProdSingle
