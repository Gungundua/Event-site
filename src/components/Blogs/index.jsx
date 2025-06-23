import Wrapper from "./style.js";
import Blog from "../assets/blog.jpg";
import Blog1 from "../assets/blog1.jpeg";
import Blog2 from "../assets/blog2.jpeg";
import Blog3 from "../assets/blog3.jpeg";
import Blog4 from "../assets/blog4.jpeg";
import Blog5 from "../assets/blog5.jpeg";
import Blog6 from "../assets/blog6.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";

const blogData = [
  {
    title: " ",
    text: "Get Wedding Ready With the Best Wedding Planners in Jaipur!",
    image: Blog1,
    link: "#"
  },
  {
    title: " ",
    text: "Plan an Royal wedding in Jaipur.",
    image: Blog4,
    link: "#"
  },
  {
    title: " ",
    text: "Sunset Weddings in Jaipur: Venues With Stunning Views",
    image: Blog5,
    link: "#"
  },  {
    title: " ",
    text: "Host a Fairytale Wedding at These Iconic Jaipur Forts",
    image: Blog6,
    link: "#"
  },
  {
    title: " ",
    text: "Top 10 Palace Venues in Jaipur for a Dream Wedding",
    image: Blog2,
    link: "#"
  },
  {
    title: " ",
    text: "Best Budget-Friendly Wedding Venues in Jaipur (With Royal Vibes)",
    image: Blog3,
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
                <img src={item.image} className="card-img-top " alt={item.title} />
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