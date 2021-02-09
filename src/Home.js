import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <h2 style={ { color: 'red' , fontWeight: '1000'} }> {error} </h2>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />} 
    </div>
  )
}

export default Home
