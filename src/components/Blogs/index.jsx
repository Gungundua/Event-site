import Wrapper from "./style.js";
import Blog from "../assets/blog.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";

const blogData = [
  {
    title: "Blog Post 1",
    text: "This is the first blog post summary.",
    image: Blog,
    link: "#"
  },
  {
    title: "Blog Post 2",
    text: "This is the second blog post summary.",
    image: Blog,
    link: "#"
  },
  {
    title: "Blog Post 3",
    text: "This is the third blog post summary.",
    image: Blog,
    link: "#"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Blogs = () => {
  return (
    <Wrapper>
      {/* Top Section */}
      <motion.div
        className="image-section text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={Blog} alt="Blog" className="image" />
        <h2 className="latest-blog">Latest Blogs</h2>
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        className="container my-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="row">
          {blogData.map((item, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="card h-100 shadow-sm">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <motion.a
                    href={item.link}
                    className="btn btn-primary custom-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Blogs;