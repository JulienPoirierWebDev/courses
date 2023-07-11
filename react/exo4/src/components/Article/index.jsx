import Title2 from "../Title2";
import Image from "../Image";

const Article = ({ title, imgPath, imgAlt, children }) => (
  <article>
    <Title2 title={title} />
    <Image imgPath={imgPath} imgAlt={imgAlt} />
    <div>{children}</div>
  </article>
);

export default Article;
