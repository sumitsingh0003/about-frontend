import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
       <div className='errepage'>
            <div>
                <h1>404</h1>
                <h2><span>Oops!</span> Page Not Found</h2>
                <p>The page you are looking for doesn't exist.</p>
                <Link to="/" className='frm_btn'> Go To Home Page </Link>
            </div>
       </div>
    </>
  )
}

export default ErrorPage
