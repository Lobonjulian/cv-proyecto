import { ImFacebook, ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer>
      <section className="footer-name">
        <p>2024 - {date} a@Julitolos</p>
      </section>
      <section className="footer-redes">
        <ImGithub />
        <ImFacebook />
        <ImTwitter />
        <ImLinkedin2 />
      </section>
    </footer>
  );
};

export default Footer;
