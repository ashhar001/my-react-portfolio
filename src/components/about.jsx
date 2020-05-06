import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am an Electronics and Telecommunication Undergrad student from VESIT, Chembur, eagerly willing to work in the quest rewarding career by securing an eminent position at a prestigious organization which will provide me an ample opportunity to explore my technical skills towards organizational goals and be the ultimate resource to the organization.</p>
                    <p>I love to learn new Technologies, also I'm a Coding Enthusiast. 
                    Always willing to innovate new things that can improve the existing technology</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I have good grasp over fundamental concepts of DSA and a good hands-on.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                    <div className="desc">
                        <h3>C++<br/><br/></h3>
                        <p>I have a good hands-on the concepts and flow of C++ Programming Language</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <span className="icon">
                        <i className="icon-data" />
                    </span>
                    <div className="desc">
                        
                        <h3>Programming in JAVA<br/><br/></h3>
                        <p>I have a good hands-on the concepts and flow of JAVA Programming Language</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    
                <h3>Web Development<br/></h3>
                <p>I have a good experience building websites using JavaScript, React, HTML and CSS.<br/></p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    
                <h3>My SQL<br/></h3>
                    <p>I have good hands-on Database Queries, DDL, DML & DCL MySQL Commands.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    
                <h3>Python</h3>
                    <p>I have a good hands-on the concepts and flow of Python Programming Language</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
