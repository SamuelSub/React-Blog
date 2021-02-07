import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok) {
          throw Error('Could Not Fetch The Data From The Server');
        }
        return res.json()
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
        setBlogs(null);
      });
  }, []);



  return (
    <div className="home">
      {error && <h2 style={ { color: 'red' , fontWeight: '1000'} }> {error} </h2>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />} 
    </div>
  )
}

export default Home
