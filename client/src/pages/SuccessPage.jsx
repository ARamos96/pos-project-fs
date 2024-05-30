import React from 'react'
import { Link } from 'react-router-dom'

function SuccessPage() {
  return (
    <>
    <div>Payment Completed!</div>
    <Link to='/'>Go to home page</Link>

    </>
  )
}

export default SuccessPage