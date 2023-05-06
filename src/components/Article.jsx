const Article = ({ children, className }) => {
  return (
    <article
      className={
        className +
        " h-screen w-full bg-cover bg-center relative snap-start cursor-default"
      }
    >
      {children}
    </article>
  );
};

export default Article;
