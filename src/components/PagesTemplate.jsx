// import components
import Button from "./Button";
import Footer from "../components/Footer";

const PagesTemplate = ({ title, to, className }) => {
  return (
    <section className="h-screen w-full snap-y snap-mandatory overflow-y-scroll wrapper">
      <article
        className={
          className +
          " h-screen w-full bg-cover bg-center flex justify-center items-center cursor-default snap-start"
        }
      >
        <Button to={to} btnStyle="white" title={title} />
      </article>
      <Footer />
    </section>
  );
};

export default PagesTemplate;
