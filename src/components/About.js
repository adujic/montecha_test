import{ useLocation, useParams } from 'react-router-dom'
import {Component} from 'react'

function About() {
    const { id } = useParams();
    console.log(id)
        return(
          <div>
            <h2>{id}</h2>
          </div>
        )
    
}

export default About;