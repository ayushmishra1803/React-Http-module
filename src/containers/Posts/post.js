import React, { Component } from 'react';

import axios from "axios";
class Post extends Component {
	state = {
		Post: [],
	};
	SelectedPostHandler = (id) => {
		this.setState({
			SelectedId: id,
		});
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
			<div>
				<section className="Posts">{posts}</section>
			</div>
		);
	}
}

export default Post;