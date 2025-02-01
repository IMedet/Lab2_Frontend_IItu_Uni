import React, { useState } from "react";
import "./App.css";

const Header = () => (
  <header>
    <h1>IITU University</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#course-info">Course Info</a>
      <a href="#enrollment">Enrollment</a>
      <a href="#faculty">Faculty</a>
      <a href="#footer">Contact</a>
    </nav>
  </header>
);

const About = () => (
  <section id="about">
    <h2>About IITU</h2>
    <p>IITU University is a leading institution focused on technology, innovation, and academic excellence.</p>
  </section>
);

const CourseInfo = ({ courseName }) => (
  <section id="course-info">
    <h2>Course Info</h2>
    <p>Course: {courseName}</p>
    <p>This course covers fundamental concepts and practical skills.</p>
  </section>
);

const CourseEnrollment = () => {
  const [students, setStudents] = useState(0);

  return (
    <section id="enrollment">
      <h2>Course Enrollment</h2>
      <p>Enrolled Students: {students}</p>
      <button onClick={() => setStudents(students + 1)}>Enroll</button>
      <button onClick={() => setStudents(students > 0 ? students - 1 : 0)}>Unenroll</button>
    </section>
  );
};

const Faculty = () => {
  const facultyMembers = [
    { name: "Арман Бейсембаев", gpa: 4.0, position: "Professor", workplace: "IITU" },
    { name: "Асел Байманова", gpa: 3.8, position: "Lecturer", workplace: "IITU" }
  ];

  return (
    <section id="faculty">
      <h2>Faculty</h2>
      <ul>
        {facultyMembers.map((member, index) => (
          <li key={index}>
            {member.name} - {member.position} at {member.workplace} (GPA: {member.gpa})
          </li>
        ))}
      </ul>
    </section>
  );
};

const Footer = () => (
  <footer id="footer">
    <h2>Contact Us</h2>
    <p>Email: iitu.edu@iitu.kz</p>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <About />
    <CourseInfo courseName="Frontend Development" />
    <CourseEnrollment />
    <Faculty />
    <Footer />
  </div>
);

export default App;
