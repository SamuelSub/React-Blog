import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const [blogPost, setBlogPost] = useState();

  useEffect(() => {
    if(!error && !isPending) {
      setBlogPost({
        title: blog.title,
        body: blog.body,
        author: blog.author
      })
    }
  }, [isPending]);

  const deleteBlog = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    });
    setBlogPost(null);
  }

  return (
    <div className="blog-details">
      {!blogPost && <h2>Post Deleted</h2>}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogPost && (
        <article>
          <h2>{blogPost.title}</h2>
          <p>Written by {blogPost.author}</p>
          <div>{blogPost.body}</div>
          <button onClick={() => deleteBlog(id)}>Delete Blog</button>
        </article>
      ) }
    </div>
  )
}

export default BlogDetails
