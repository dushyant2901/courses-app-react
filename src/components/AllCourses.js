import React from "react";
import { useState, useEffect } from "react";
import Course from "./Course";
import Data from "./Data";

/* const Data = [{
    title: 'abcd',
    description: 'twyw wyww eeeeeeeee  yw'
},
    {title: 'abcd1',
    description: 'twyw wyww eeeeeeeee  yw'
},
    {title: 'abcd2',
    description: 'twyw wyww eeeeeeeee  yw'
},
    {title: 'abcd3',
    description: 'twyw wyww eeeeeeeee  yw'
},




] */

function AllCourses() {
  useEffect(() => {}, []);

  const [Courses, setCourse] = useState(Data);
  console.log(Courses);
  const updateCourse = (id) => {
    setCourse(Courses.filter((c) => c.id !== id));
  };
  return (
    <div>
      {Courses.length > 0
        ? Courses.map((item,index) => (
            <Course course={item} update={updateCourse} index={index}/>
          ))
        : "No course"}
    </div>
  );
}

export default AllCourses;
