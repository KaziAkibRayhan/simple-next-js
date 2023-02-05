import Post from "@/Components/Post/Post";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h3 className="text-3xl">The number of {posts.length}</h3>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
