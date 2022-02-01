import { Link } from "remix";

const AdminIndexPage = () => {
  return (
    <p>
      <Link to="new">Create a New Post</Link>
    </p>
  );
};

export default AdminIndexPage;
