import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new Website', body: 'Lorem ipsum...', author: 'mario', id: 0 },
    { title: 'Welcome To The Website', body: 'Lorem ipsum...', author: 'cristiano', id: 1 },
    { title: 'Web Dev Tips', body: 'Lorem ipsum...', author: 'mastoras', id: 2 }
  ]);
  

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
    </div>
  )
}

export default Home
