import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Blockchain Developer at Launchnodes LTD, London{' '}
                          <span>May 2020-Present</span>
                        </h2>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Associate Software Developer at 1SilverBullet,
                          Bangalore <span>Jan 2021-April 2021</span>
                        </h2>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Graduation at VESIT, Chembur <span>2017-2020</span>
                        </h2>
                        {/* <p>
                          I am pursued my graduation with major in EXTC
                          (Electronics & Telecommunication), with an aggregate
                          CGPI of 7.52. I have taken courses like DSA, OOPs,
                          JAVA, C++, Web Development over the years and have
                          better understanding of these subjects. I have also
                          been awarded as Top Performer in those courses.
                        </p> */}
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Diploma at M.H.S.S.P <span>2012-2017</span>
                        </h2>
                        {/* <p>
                          I pursued my Diploma with major in EXTC (Electronics &
                          TeleCommunication) with 82 merit. During this period
                          of my academics I have participated in various Project
                          Presentation, Paper Presentation competition which
                          helped me develop my Presentation Skills.
                        </p> */}
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary Education <span>2000-2012</span>
                        </h2>
                        {/* <p>
                          I have completed my higher secondary education with
                          major subjects as Physics, Chemistry & Maths with 80
                          merit. During my time at school, I have developed
                          interest in solving complex problems of the
                          fundamental physics which helped me to improve my
                          understanding of any problem and also my mathematical
                          skills to actually solve the problems.
                        </p> */}
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
