import React, { Component } from 'react';

class Post extends Component {
	state = {
		Post: [],
	};
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
			<div>
				<section className="Posts">{posts}</section>
			</div>
		);
	}
}

export default Post;