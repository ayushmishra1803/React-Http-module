import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import NewPost from "../NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
	
	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((re) => {
				const GettingPost = re.data.splice(0, 4);
				const UpdatedPost = GettingPost.map((re) => {
					return {
						...re,
						author: "Ayush",
					};
				});

				this.setState({
					Post: UpdatedPost,
				});
				console.log(this.state.Post);
			})
			.catch((re) => {
				console.log(re);
			});
	}

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
