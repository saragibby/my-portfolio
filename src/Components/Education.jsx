import React from "react";

const Education = () => {
  const education = [
    {
      institution: "University of XYZ",
      location: "City, State",
      degree: "Bachelor of Arts in English",
      year: "2010",
    },
    {
      institution: "ABC Certification Program",
      location: "Online",
      degree: "Certified XYZ Specialist",
      year: "2015",
    },
  ];

  return (
    <section id="education" className="min-height">
      <div className="education-container">
        <h2>Education</h2>
        {education.map((item, index) => (
          <div key={index}>
            <h3>{item.institution}</h3>
            <h4>{item.location}</h4>
            <h5>{item.degree}</h5>
            <p>{item.year}</p>
          </div>
        ))}
        <h2>Certifications</h2>
        <div>
          <h3>ABC Certification Program</h3>
          <h4>Online</h4>
          <h5>Certified XYZ Specialist</h5>
          <p>2015</p>
        </div>
      </div>
    </section>
  );
};

export default Education;