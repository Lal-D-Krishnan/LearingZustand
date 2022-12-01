import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import useBearStore from '../Store/bearStore'
import Controls from './Controls'

const BearCounter = () => {
    // const navigate = useNavigate();
    // const navigate = Navigate()

    const bears = useBearStore((state) => state.bears)
  return (
    <>
    <h1>Hello this is the first page</h1>
    <h3>
        {bears} around here ...
    </h3>

    <br />
    {/* <Controls/> */}
    {/* <button
    onClick={()=>{ navigate('/two') }}>
      Go to /two
    </button>  */}

      <Link to="/two">Go to two</Link>
    </>
  )
}

export default BearCounter