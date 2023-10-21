import React, { useState,useEffect } from 'react'
import Course from './Course'
import axios from 'axios'
import base_url from '../api/springbootapi'
import { toast } from 'react-toastify'

const AllCourses = () => {

  /* useEffect(() => {
    alert("testing");
  },[]) */

    const getAllCourses = () => {
      axios.get(`${base_url}/courses`).then(
        (Response) => {
          console.log(Response.data);
          toast.success("courses has been loaded");
        },
        (Error) => {
          console.log(Error);
          toast.error("Something went wrong");
        }
      );
    };

    useEffect(() => {
      getAllCourses();
    });

    const [courses, setCourses] = useState([
        {title: "Android developement Course", description:"It is just a demo course with no API calling till now."},
        {title: "Spring Boot Course", description:"It is just a demo course with no API calling till now."},
        {title: "MERN Introduction Course", description:"It is just a demo course with no API calling till now."},
    ])

  return (
    <div>
        <h1 className='mx-5'>All Courses</h1>
        <p className='mx-5'>List of all courses are as follows: </p>

        {courses.length>0
        ? courses.map((item)=> <Course /* /* key={item.id} */ course={item}/>)
        : "No Courses"
        }
    </div>
  )
}

export default AllCourses