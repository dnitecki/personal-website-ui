import "./Links.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";

const Links = () => {
  const shareData = {
    text: "Thanks for sharing!",
    url: "https://www.dominicknitecki.com",
  };

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
    } catch (error) {
      window.alert("Error opening share dialog");
    }
  };
  return (
    <>
      <div className="navigation-links">
        <a
          href="https://www.linkedin.com/in/dnitecki/"
          target="_blank"
          rel="noreferrer"
          className="link-btn"
        >
          <LinkedInIcon fontSize="inherit" />
        </a>
        <a
          href="https://www.instagram.com/dominick_nitecki/"
          target="_blank"
          rel="noreferrer"
          className="link-btn"
        >
          <InstagramIcon fontSize="inherit" />
        </a>
        <a
          href="https://github.com/dnitecki"
          target="_blank"
          rel="noreferrer"
          className="link-btn"
        >
          <GitHubIcon fontSize="inherit" />
        </a>
        <button className="link-btn" onClick={handleShare}>
          <ShareIcon fontSize="inherit" />
        </button>
      </div>
    </>
  );
};

export default Links;
