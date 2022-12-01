import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import useBearStore from '../Store/bearStore'
// import { Navigate } from 'react-router-dom'

const Controls = () => {
    // const navigate = useNavigate();
//   const navigate =  Navigate()

  const increasePopulation = useBearStore((state) => state.increasePopulation)

  return (
    <>
    <h2>Hello this is the second page</h2>
    <button onClick={increasePopulation}>one up</button>

    <br /><br />

    {/* <button
    onClick={()=>{
        navigate('/one')
    }}>
      Go to /one
    </button>  */}
    <Link to="/one">Go to one</Link>
    </>
  )
}

export default Controls