import { motion } from "framer-motion";
import Heading from "../components/heading.component";
import BlogContainer from "../components/blog-container.component";

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative mt-24 pb-24"
    >
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex">
          <Heading
            firstPartOfText={"bl"}
            secondPartOfText={"og"}
          />
        </div>
      </motion.div>

      {/* Blog Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <BlogContainer />
      </motion.div>
    </section>
  );
};

export default Blog;
