import React, { Component } from "react";

import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
	componentDidUpdate() {
		axios
            .get("https://jsonplaceholder.typicode.com/posts/"+this.props.id)
			.then((re) => {
				console.log(re);
			})
			.catch((re) => {
				console.log(re);
			});
	}
	render() {
		let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
		if (this.props.id) {
			post = (
				<div className="FullPost">
					<h1>Title</h1>
					<p>Content</p>
					<div className="Edit">
						<button className="Delete">Delete</button>
					</div>
				</div>
			);
		}

		return post;
	}
}

export default FullPost;
