import React, { Component } from 'react';

class Work extends Component {
	render () {
		return (
			<section id="last-work">
				<div className="content">
					<h1 className="primary-text-color">Last work</h1>
					<div className="work-gallery">
						<div className="work-container">
							<h2 className="secondary-text-color">Globosat Play for Connected TVs</h2>
							<h3 className="secondary-text-color">The product</h3>
							<p className="secondary-text-color">Globosat Play provides on demand videos from Globosat channels to watch through Samsung, LG, Sony, Panasonic and Philips devices.</p>
							
							<h3 className="secondary-text-color">Role</h3>
							<p className="secondary-text-color">As a leader, I'm responsible to get things done. Acting with Product Owner, we discuss what to do in next release, tracking services that could block features, following the healthy of product and be sure that customer experience is great.</p>
							
							<h3 className="secondary-text-color">Technology</h3>
							<p className="secondary-text-color">We choose React to build our single page app with ES6 and Webpack.</p>
							
							<h3 className="secondary-text-color">Team</h3>
							<ul className="secondary-text-color">
								<li><strong>Product Coordinator:</strong> Luiza Martins</li>
								<li><strong>Product Owner:</strong> Diogo Montano</li>
								<li><strong>UX Designers:</strong> Tammy Lemos and Rodrigo Freire</li>
								<li><strong>Tech Lead:</strong> Marcelo Iepsen</li>
								<li><strong>Developers:</strong> Gabriel Dantas, Luan Garcia, Rafael Magalhães, Tiago Rocha, Raphael Guimarães, Klaus Kazlauskas and Ricardo Lino</li>
							</ul>
							<h3 className="secondary-text-color">Screens</h3>
							<img src="/work/home.png" />
							<img src="/work/menu.png" />
							<img src="/work/episodes.png" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Work;