function Article({ title, src, alt }) {
  return (
    <div className="container">
      <div className="header">
        <h2>{title}</h2>
        <img src={src} alt={alt} />
      </div>
      <div className="body">{children}</div>
    </div>
  );
}

export default Article;
