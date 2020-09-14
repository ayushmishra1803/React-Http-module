import React, { Component } from "react";
import "./Blog.css";

class Blog extends Component {
	render() {
		return (
			<div className="block">
				<header>
					<nav>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">New Post</a>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		);
	}
}

export default Blog;
