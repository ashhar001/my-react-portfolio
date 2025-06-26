import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
          <div
            className="row row-bottom-padded-sm animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="col-md-12">
            <div className="about-desc" style={{ textAlign: 'justify' }}>
              <span className="heading-meta">About Me</span>
              <h2 className="colorlib-heading">Who Am I?</h2>
              <div>
              <p>
                I am a Certified Blockchain Architect | Smart Contract Developer | Blockchain Developer | Blockchain and Web3 Infra | Cloud and DevOps
              </p>
              <p>
                Over the past several years, I've gained expertise in building secure, scalable, and high-performance systems at the intersection of Web3 and infrastructure automation.
              </p>
              <p>
                With a strong foundation in smart contract development and years of hands-on experience in deploying large-scale staking and validator infrastructure across Ethereum, Polkadot, Solana, and other leading blockchains, I specialize in making decentralized systems production-ready.
              </p>
              <p>
                I've architected and deployed automated staking solutions, reward distribution systems, and full-node environments using tools like Solidity, Chainlink, Gelato, Terraform, Kubernetes, and Docker, all backed by battle-tested CI/CD pipelines and cloud-native designs on AWS and GCP.
              </p>
              <p>
                My work bridges smart contract logic with real-world DevOps reliability, enabling projects to ship faster, scale confidently, and maintain robust security across every layer of the stack.
              </p>
              <p>
                Whether it's crafting efficient backend systems, optimizing staking yields, or securing validator fleets, I thrive at the intersection of blockchain and infrastructure engineering.
              </p>
              </div>
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
          <div
          className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
          >
          <span className="heading-meta">What I do?</span>
          <h2 className="colorlib-heading">
            Here are some of my Certifications
          </h2>
          </div>
        </div>
        <div className="row row-pt-md">
          <div className="col-md-4 text-center animate-box">
            <div className="services color-1" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="icon">
                <i className="icon-bulb" />
              </span>
              <div className="desc">
                <h3>
                  Certified Blockchain Architect <br />
                  <small>Blockchain Council</small>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-5" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="icon">
                <i className="icon-data" />
              </span>
              <div className="desc">
                <h3>
                  Blockchain Specialization <br />
                  <small>University at Buffalo</small>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-3" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="icon">
                <i className="icon-data" />
              </span>
              <div className="desc">
                <h3>
                  Data Structures and Algorithms <br />
                  <small>Coding Ninjas</small>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-4" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="icon">
                <i className="icon-phone3" />
              </span>
              <div className="desc">
                <h3>
                  Competitive Programming <br />
                  <small>Coding Ninjas</small>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-3" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="icon">
                <i className="icon-phone3" />
              </span>
              <div className="desc">
                <h3>
                  Front-End Web Development using React <br />
                  <small>Coding Ninjas</small>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-2" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="icon">
                <i className="icon-phone3" />
              </span>
              <div className="desc">
                <h3>
                  Programming in JAVA <br />
                  <small>NIIT</small>
                </h3>
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
