import React, {Component} from 'react';
import ben from './images/ben.jpg';
import kirk from './images/kirk.jpg';
import soni from './images/soni.jpg';
import ed from './images/Ed.png';
import jordan from './images/jordan.jpg';
import './about-us.css'

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <h1 className="about-us__heading"> Shopmazing team </h1>
        <div className="about-us__cards">
          <div className="about-us__cards-card">
            <img src={kirk} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Kirk Garrison</h2>
              <p>I Previously served 4 years in the Air Force doing Law Enforcement. When my enlistment was completed, I found a new carrer path in software development. That's when I began my CodeFellows journey of becoming a full stack software developer. I am very motivated by the teamwork approach to problem solving that coding provides, and my background has taught me the importance of teamwork and how to effectively communicate with my peers. I am a passionately curious coder, and look for every opportunity to learn and have a growth mindset.</p>
            </div>
          </div>
          <div className="about-us__cards-card">
            <img src={ben} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Ben Mills</h2>
              <p>I've spent most of my career managing a small, independent paint-your-own pottery studio in Seattle. Over the years I've spent more and more of my free time tinkering late at night with command line tools, scripts and programming languages. When an opportunity to use these hobbies came up at my last job I was so excited by the challenge and so proud of how it actually turned out that I realized software development was something I could do well and be passionate about. I enjoyed working in customer service and I see those skills I learned, of offering support and being empathetic and patient, to be a huge asset while working together on projectswith a team. Now as a software developer I'm looking for a position were I can work with people that are as curious as I am about learning how technologies work and how to solve new problems. I want to work as a creator and contribute back to the industry I've enjoyed so much as a consumer.</p>
            </div>
          </div>

          <div className="about-us__cards-card">
            <img src={ed} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Edris Berg</h2>
              <p> Software developer, have background in Network Administration and Security. Passionate about software engineering, computer security and entrepreneurship</p>
            </div>
          </div>
          <div className="about-us__cards-card">
            <img src={jordan} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Jordan Fleming</h2>
              <p>mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
            </div>
          </div>
          <div className="about-us__cards-card">
            <img src={soni} alt="" />
            <div className="about-us__cards-card-text">
              <h2>Rushabh Soni</h2>
              <p>Software developer, background as an airline captain for over 11 years.
                Having spent over a decade and a half in a high skill, high risk industry where timely decision making is of utmost importance I hope to bring all of these valuable past experiences along with my thirst for knowledge and the need for constant innovation/self improvement into my new</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
