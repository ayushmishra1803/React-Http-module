import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
	state = {
		Post: [],
		SelectedId: false,
	};
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
	SelectedPostHandler = (id) => {
		this.setState({
			SelectedId: id,
		});
	};
	render() {
		const posts = this.state.Post.map((re) => {
			return (
				<Post
					title={re.title}
					key={re.id}
					author={re.author}
					clicked={() => this.SelectedPostHandler(re.id)}
				/>
			);
		});
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
				<section className="Posts">{posts}</section>
			
			</div>
		);
	}
}

export default Blog;
