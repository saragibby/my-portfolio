import React from 'react';

const Education = () => {
  const degrees = [
    {
      id: 1,
      title: 'Bachelor of Science in Computer Science',
      institution: 'University of XYZ',
      year: '2015-2019',
    },
    {
      id: 2,
      title: 'Master of Science in Computer Science',
      institution: 'University of ABC',
      year: '2019-2021',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Certified React Developer',
      institution: 'React Certification Board',
      year: '2021',
    },
    {
      id: 2,
      title: 'Certified Node.js Developer',
      institution: 'Node.js Certification Board',
      year: '2020',
    },
  ];

  return (
    <div>
      <h2>Education</h2>
      {degrees.map((degree) => (
        <div key={degree.id}>
          <h3>{degree.title}</h3>
          <p>{degree.institution}</p>
          <p>{degree.year}</p>
        </div>
      ))}
      <h2>Certifications</h2>
      {certifications.map((certification) => (
        <div key={certification.id}>
          <h3>{certification.title}</h3>
          <p>{certification.institution}</p>
          <p>{certification.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;