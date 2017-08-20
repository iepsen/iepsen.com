import React, { Component } from 'react';

class About extends Component {
	render () {
		return (
			<section id="about-me">
				<div className="content">
					<h1 className="primary-text-color">About me</h1>
					<p className="secondary-text-color">I'm a full-stack developer with 10+ years of experience, living in Rio de Janeiro, Brazil.</p>
					<p className="secondary-text-color">Working at Globosat since 2013, I recently became an IT Specialist with focus on Connected TVs. Globosat is diving on digital platforms and making great products for cable tv customers.</p>
					<p className="secondary-text-color">If you want to know more about my experience and skills, access my <a href="https://www.linkedin.com/in/iepsen/">Linkedin</a>.</p>
				</div>
			</section>
		)
	}
}

export default About;