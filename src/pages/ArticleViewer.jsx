import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";
import articles from "../assets/articles.json";

function ArticleViewer() {
  const { slug } = useParams();
  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    const article = articles.find(a => a.slug === slug);

    if (!article) {
      setContent("<h2>Article not found</h2>");
      return;
    }

    fetch(article.file)
      .then(res => res.text())
      .then(md => setContent(marked(md)));
  }, [slug]);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ArticleViewer;
