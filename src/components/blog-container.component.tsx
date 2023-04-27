import { useFetchArticles } from "../api/services/blog.api";

const BlogContainer = () => {
  const { data, isLoading, isError } =
    useFetchArticles();

  data && console.log(data);

  return <div></div>;
};

export default BlogContainer;
