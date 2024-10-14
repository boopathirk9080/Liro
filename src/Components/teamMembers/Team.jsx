import React from 'react';
import './Team.css'; // Make sure to have your styles in a separate CSS file.

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'Olivia Rhye',
      title: 'Founder & CEO',
      description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
      image: './webDev/webDesign.png',
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Phoenix Baker',
      title: 'Engineering Manager',
      description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
      image: './webDev/webDesign.png',
      linkedin: '#',
      instagram: '#'
    },
    {
        name: 'Olivia Rhye',
        title: 'Founder & CEO',
        description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
        image: './webDev/webDesign.png',
        linkedin: '#',
        instagram: '#'
      },
      {
        name: 'Phoenix Baker',
        title: 'Engineering Manager',
        description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
        image: './webDev/webDesign.png',
        linkedin: '#',
        instagram: '#'
      },
      {
        name: 'Olivia Rhye',
        title: 'Founder & CEO',
        description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
        image: './webDev/webDesign.png',
        linkedin: '#',
        instagram: '#'
      },
      {
        name: 'Phoenix Baker',
        title: 'Engineering Manager',
        description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
        image: './webDev/webDesign.png',
        linkedin: '#',
        instagram: '#'
      },
      {
          name: 'Olivia Rhye',
          title: 'Founder & CEO',
          description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
          image: './webDev/webDesign.png',
          linkedin: '#',
          instagram: '#'
        },
        {
          name: 'Phoenix Baker',
          title: 'Engineering Manager',
          description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
          image: './webDev/webDesign.png',
          linkedin: '#',
          instagram: '#'
        }

  ];

  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p className="role">{member.title}</p>
            <p>{member.description}</p>
            <div className="social-icons">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
