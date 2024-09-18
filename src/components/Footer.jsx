import { ImFacebook, ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <section className="footer-name">
        <img src="../assets/Logo.svg" alt="elPoderDeCrear" className="logo" width="100px" />
        <p>2024 - {date} a @Julitolos</p>
      </section>
      <section className="footer-redes">
        <a href="https://github" target="_blank">
          <i>
            <ImGithub />
          </i>
        </a>
        <a href="https://www.facebook.com " target="_blank">
          <i>
            <ImFacebook />
          </i>
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <i>
            <ImTwitter />
          </i>
        </a>
        <a href="https://www.linkedin.com /" target="_blank">
          <i>
            <ImLinkedin2 />
          </i>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
