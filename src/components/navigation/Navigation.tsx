import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <ul>
        <li>
          <a href="#overview">
            <p>Overview</p>
          </a>
        </li>
        <li>
          <a href="#resume">
            <p>Resume</p>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <p>Portfolio</p>
          </a>
        </li>
        <li>
          <a href="#contact">
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
