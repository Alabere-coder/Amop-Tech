// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Homepage = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <br />
            {/* passing props to a component */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* re-using the component */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'fat')} title="fat's blogs" /> */}
        </div>
    );
}

export default Homepage;