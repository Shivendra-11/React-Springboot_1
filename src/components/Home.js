import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from 'reactstrap'
import Course from './Course'
/* import {Jumbotron} from "reactstrap" */

const Home = () => {

  // const btnHandle = () => {
  //   toast.success("Success")
  // }

  return (
    <div>
      <ToastContainer/>
      <h1 className='mx-5 my-5'>Spring-Boot Application using React web/app   </h1>
      <Button color='primary text-center mx-5' size='lg' outline>Create a toast    </Button>
      <Course course={{title: "Android developement Course", description: "This course contains tutorials about all the basic implementations of android app."}}/>
    </div>
  )
}

export default Home