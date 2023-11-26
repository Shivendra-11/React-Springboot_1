import React, { useState,useEffect } from 'react'
import Course from './Course'
import axios from 'axios'
import base_url from '../api/springbootapi'
import { ToastContainer, toast } from 'react-toastify'

const AllCourses = () => {

  /* useEffect(() => {
    alert("testing");
  },[]) */

    const getAllCourses = () => {
      axios.get(`${base_url}/courses`).then(
        (Response) => {
          console.log(Response.data);
          toast.success("courses has been loaded", {
            position: "bottom-center",
          });
          setCourses(Response.data);
        },
        (Error) => {
          console.log(Error);
          toast.error("Something went wrong");
        }
      );
    };

    useEffect(() => {
      getAllCourses();
    },[]);

    const [courses, setCourses] = useState([])

  return (
    <div>
        <ToastContainer/>
        <h1 className='mx-5'>All Courses</h1>
        <p className='mx-5'>List of all courses are as follows: </p>

        {courses.length>0
        ? courses.map((item)=> <Course key={item.id} course={item}/>)
        : "No Courses"
        }
    </div>
  )
}

export default AllCourses