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
        <h1>All Courses</h1>
    </div>
  )
}

export default AllCourses