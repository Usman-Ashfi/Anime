import "./navbar.css";

const navbar = () => {
  return (
    <nav>
      <div className="logo">
      <span></span>
      </div>
      <div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/blogs/blogsadd">Add</a>
          </li>
        </ul>
      </div>
      <div>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default navbar;
