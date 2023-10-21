import React, { useState } from 'react'
import Course from './Course'

const AllCourses = () => {

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
        ? courses.map((item)=> <Course course={item}/>)
        : "No Courses"
        }
    </div>
  )
}

export default AllCourses