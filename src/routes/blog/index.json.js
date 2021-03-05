import { getPostsAsync } from './_posts.js';

export async function get(req, res, next) {

	const asyncPosts = await getPostsAsync();
	const contents = JSON.stringify(asyncPosts.map(post => {
		return {
			title: post.title,
			slug: post.slug
		};
	}));

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}