import { addPost, deletePost } from "@/lib/action";

const ServerAction = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="desc" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button>add post</button>
      </form>
      <form action={deletePost}>
        <input type="text" name="id" placeholder="id to delete post" />
        <button>delete post</button>
      </form>
    </div>
  );
};

export default ServerAction;
