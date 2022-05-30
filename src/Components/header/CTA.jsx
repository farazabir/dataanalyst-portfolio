import React from 'react'
import CV from '../../Asset/CV.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="" className='btn btn-primary'>Contact Now</a>
    </div>
  )
}

export default CTA