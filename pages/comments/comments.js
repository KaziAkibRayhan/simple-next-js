const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments?.map((comment) => (
        <h1 key={comment.id} className="text-5xl my-10">
          {comment.body}
        </h1>
      ))}
    </div>
  );
};

export default Comments;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=12"
  );
  const data = await res.json();
  return {
    props: {
      comments: data,
    },
  };
};
