import React from 'react'
import PageHeading from '../components/PageHeading';

function About() {
  return (
    <div className='flex flex-col min-w-[100vh]'>
      <div className='flex flex-col items-center'>
        <PageHeading title={"About Us"}>
          This project is a personal demo application developed for learning and portfolio purposes.
          <br />
          <br />
          It was created to practice modern web development concepts such as frontend–backend integration,
          RESTful APIs, component-based UI design, and responsive layouts. The main focus is on writing clean code,
          building scalable architecture, and understanding real-world development workflows.
          <br />
          <br />
          While this is not a production or commercial product, 
          it represents my approach to software engineering, problem solving, and continuous learning.
        </PageHeading>
      </div>
    </div>
  )
}

export default About