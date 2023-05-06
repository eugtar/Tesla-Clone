import { useRef } from "react";
import { Link } from "react-router-dom";
// import components
import Article from "../components/Article";
import Button from "../components/Button";
import Title from "../components/Title";
import Footer from "../components/Footer";
// import icons
import { FiChevronDown } from "react-icons/fi";

const Home = () => {
  const scrollTo = useRef(null);

  return (
    <section className="h-screen w-full snap-y snap-mandatory overflow-y-scroll wrapper">
      <Article className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/c485b2b4-d334-4a8f-87e3-5755103a367c/bvlatuR/std/800x2100/Homepage-ModelY-LHD-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop')]">
        <Title
          link={{
            on: true,
            titleText: "Model Y",
            linkText: "View Inventory",
            path: "/",
          }}
        />
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
          <Button to="/" btnStyle="black" title="Order Now" />
          <Button to="/" btnStyle="white" title="Demo Drive" />
        </div>
        <div className="flex justify-center absolute inset-x-0 bottom-[2%] animate-bounce">
          <FiChevronDown
            size={24}
            className="cursor-pointer"
            onClick={() => {
              scrollTo.current.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </Article>
      <div ref={scrollTo}>
        <Article className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/92cbede0-6d73-4753-a640-7d2acbcd9f3f/bvlatuR/std/1927x4096/Homepage-Model-3-LHD-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD')]">
          <Title
            link={{
              on: true,
              titleText: "Model 3",
              linkText: "View Inventory",
              path: "/",
            }}
          />
          <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
            <Button to="/" btnStyle="black" title="Order Now" />
            <Button to="/" btnStyle="white" title="Demo Drive" />
          </div>
        </Article>
      </div>
      <Article className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/d39b2eea-5c50-4c46-a1bb-c97f0c021bfb/bvlatuR/std/750x1624/Model-S-homepage-mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/898c2038-c428-452c-84bf-034d5c48ca8e/bvlatuR/std/4096x2560/Model-S-homepage-desktop')]">
        <Title
          link={{
            on: true,
            titleText: "Model S",
            linkText: "View Inventory",
            path: "/",
          }}
        />
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
          <Button to="/" btnStyle="black" title="Order Now" />
          <Button to="/" btnStyle="white" title="Demo Drive" />
        </div>
      </Article>
      <Article className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/bf349924-f9ef-408f-b8b3-0afb85654c07/bvlatuR/std/800x1700/Homepage-Model-X-Mobile-LHD')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/adf93943-f1b8-41d6-a47c-f6009ea1c836/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD')]">
        <Title
          link={{
            on: true,
            titleText: "Model X",
            linkText: "View Inventory",
            path: "/",
          }}
        />
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
          <Button to="/" btnStyle="black" title="Order Now" />
          <Button to="/" btnStyle="white" title="Demo Drive" />
        </div>
      </Article>
      <Article className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/da02ce3e-3ede-4fa4-8fcb-e8d5d6681cfb/bvlatuR/std/600x1576/Homepage-SolarPanels-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D')]">
        <Title
          link={{
            on: false,
            titleText: "Solar Panels",
            linkText: "Lowest Cost Solar Panels in America",
            path: "/",
          }}
        />
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
          <Button to="/" btnStyle="black" title="Order Now" />
          <Button to="/" btnStyle="white" title="Learn More" />
        </div>
      </Article>
      <Article className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/3f6f20d2-ad05-41b7-b181-9fb6f01af119/bvlatuR/std/800x2100/Homepage-SolarRoof-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global')]">
        <Title
          link={{
            on: false,
            titleText: "Solar Roof",
            linkText: "Produce Clean Energy From Your Roof",
            path: "/",
          }}
        />
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
          <Button to="/" btnStyle="black" title="Order Now" />
          <Button to="/" btnStyle="white" title="Learn More" />
        </div>
      </Article>
      <Article className="bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/12f15753-d4af-4f4a-920b-65e9e260c521/bvlatuR/std/800x2100/Homepage-Accessories-Mobile')] lg:bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046')]">
        <Title
          link={{
            on: false,
            titleText: "Accessories",
          }}
        />
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
          <Button to="/" btnStyle="black" title="Shop Now" />
        </div>
      </Article>
      <Footer />
    </section>
  );
};

export default Home;
