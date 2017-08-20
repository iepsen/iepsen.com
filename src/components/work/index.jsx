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
								<li><strong>Product Coordinator:</strong> <a href="https://www.linkedin.com/in/luiza-martins-822b6412/">Luiza Martins</a></li>
								<li><strong>Product Owner:</strong> <a href="https://www.linkedin.com/in/diogomontano/">Diogo Montano</a></li>
								<li><strong>UX Designers:</strong> <a href="https://www.linkedin.com/in/tamylemos/">Tammy Lemos</a> and <a href="https://www.linkedin.com/in/rodrigofreire/">Rodrigo Freire</a></li>
								<li><strong>Tech Lead:</strong> <a href="https://www.linkedin.com/in/iepsen/">Marcelo Iepsen</a></li>
								<li><strong>Developers:</strong> <a href="https://www.linkedin.com/in/gabriel-dantas-87b6b027/">Gabriel Dantas</a>, <a href="https://www.linkedin.com/in/garcialuan/">Luan Garcia</a>, <a href="https://www.linkedin.com/in/rafamagalhaes/">Rafael Magalhães</a>, <a href="https://www.linkedin.com/in/tiago-rocha-1a108710b/">Tiago Rocha</a>, <a href="https://www.linkedin.com/in/raphaelsguimaraes/">Raphael Guimarães</a>, <a href="https://www.linkedin.com/in/klauskpm/">Klaus Kazlauskas</a> and <a href="https://www.linkedin.com/in/ricardo-lino/">Ricardo Lino</a></li>
							</ul>
							<h3 className="secondary-text-color">Screens</h3>
							<img src="/work/home.png" alt="Home" />
							<img src="/work/menu.png" alt="Menu" />
							<img src="/work/episodes.png" alt="Episode List" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Work;