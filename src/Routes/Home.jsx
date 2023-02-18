import { style } from "@mui/system";
import { Link } from "react-router-dom";
function Home() {
  let style = {
    textDecoration: "none",
    marginLeft: "10px",
    color: "white",
    // border: "1px solid white",
  };
  return (
    <div className="Home">
      <Link to={"/create"} style={style}>
        <button>Create Task</button>
      </Link>
      <Link to={"/task"} style={style}>
        <button>Show Task</button>
      </Link>
    </div>
  );
}

export { Home };
