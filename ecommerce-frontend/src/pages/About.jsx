import React from "react";
import PageHeading from "../components/PageHeading";

function About() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center py-10 sm:py-14">
        <PageHeading title="About the Project">
          <p className="text-center sm:text-left leading-relaxed">
            This project is a personal demo application developed for learning and portfolio purposes.
          </p>

          <p className="mt-6 text-center sm:text-left leading-relaxed">
            It was created to practice modern web development concepts such as frontend–backend integration,
            RESTful APIs, component-based UI design, and responsive layouts. The main focus is on writing clean code,
            building scalable architecture, and understanding real-world development workflows.
          </p>

          <p className="mt-6 text-center sm:text-left leading-relaxed">
            While this is not a production or commercial product, it represents my approach to software engineering,
            problem solving, and continuous learning.
          </p>
        </PageHeading>
      </div>
    </div>
  );
}

export default About;
