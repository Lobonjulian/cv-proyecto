import { ImFacebook, ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";
import Logo from "./ui/Logo";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <section className="footer-name">
       <Logo />
        <p>
          2023 - {date}{"  "}
          <a
            href="https://github.com/lobonjulian"
            target="_blank"
            rel="noreferrer"
          >
            @Julitolos
          </a>
        </p>
      </section>
      <section className="footer-redes">
        <a
          href="https://github.com/lobonjulian"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <ImGithub />
          </i>
        </a>
        <a href="https://www.facebook.com " target="_blank">
          <i>
            <ImFacebook />
          </i>
        </a>
        <a href="https://www.twitter.com/julitolos" target="_blank">
          <i>
            <ImTwitter />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/julian-aguilar-/"
          target="_blank"
          rel="noreferrer"
        >
          <i>
            <ImLinkedin2 />
          </i>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
