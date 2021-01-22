import React from 'react'
import Sections from '../../Sections/Sections'
import { homeObjs } from './Data'


const Home = () => {
    return (
        <div>
            {homeObjs.map((homeObj) => (
                <Sections {...homeObj} />
            ))}

        </div>
    )
}

export default Home
