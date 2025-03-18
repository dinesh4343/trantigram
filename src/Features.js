import React from 'react'

const Features = () => {
  return (
    <section className='section-feature'>
  <h3>Our Features</h3>
  <h6 className="section-lead">
    Break language barriers effortlessly with our advanced translation services, designed for seamless communication.
  </h6>
  <div className="services-grid">
    <div className="service service1">
      <i className="ti-globe"></i>
      <h4>Real-Time Translation</h4>
      <p>Translate conversations instantly and communicate fluently across different languages with ease.</p>
      <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
    </div>

    <div className="service service2">
      <i className="ti-comments"></i>
      <h4>AI-Powered Accuracy</h4>
      <p>Our AI-driven technology ensures accurate and context-aware translations for any situation </p>
      <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
    </div>

    <div className="service service3">
      <i className="ti-flag"></i>
      <h4>Multi-Language Support</h4>
      <p>Translate text, speech, and documents in over 100+ languages.</p>
      <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
    </div>
  </div>
</section>

  )
}

export default Features