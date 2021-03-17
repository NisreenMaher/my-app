export const ArticalTitle = ({ title }) => <h1>{title}</h1>;
export const Pargraph = ({ text }) => <p>{text}</p>;

const ArticleB = ({ title, body }) => (
  <div>
    <div>
      <article className="artical">
        <ArticalTitle title={title} />
        {body ? <p>{body}</p> : ""}
        <button onClick={() => alert(title + "\n" + body)}>click</button>
      </article>
    </div>
  </div>
);
/*
 <article className="artical">
    <ArticalTitle title={title} />
    {body ? <p>{body}</p> : ""}
    <button onClick={() => onClick()}>click</button>
  </article>
*/

export default ArticleB;
