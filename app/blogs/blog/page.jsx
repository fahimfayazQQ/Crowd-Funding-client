import React from 'react'
import Navbar from '../../shared/navbar'
import BlogDetails from './blogdetails'
import Footer from '../../shared/footer'

const BlogDetailsLayout = () => {
  return (
    <>
      <Navbar />
      <BlogDetails />
      <Footer />
    </>
  );
}

export default BlogDetailsLayout;