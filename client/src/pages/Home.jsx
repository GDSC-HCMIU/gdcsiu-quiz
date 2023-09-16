import React from 'react'
import Card from '../components/Card'

const HEADER_LOGO = "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg"
const Home = () => {

  return (
    <React.Fragment>
      <div className='mx-auto max-w-2xl flex flex-col justify-center my-10 p-10'>
        <img src={HEADER_LOGO} alt="header_logo" />
      </div>
      <Card />
    </React.Fragment>
  )
}

export default Home
