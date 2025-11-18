import articles from "../assets/articles.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px", margin: "auto" }}>
      <h1>Coinkey Tutorials</h1>
      <p>Learn crypto the safe way.</p>

      {articles.map((a) => (
        <div
          key={a.slug}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "15px"
          }}
        >
          <h2>{a.title}</h2>
          <p>{a.description}</p>
          <Link to={`/article/${a.slug}`}>Read →</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
