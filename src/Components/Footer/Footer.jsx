import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab)

function Footer() {
  return (
    <footer>
      <p className="copyright">Shirley Damiron Ⓒ 2019</p>

      <div>
          <a className="Logo" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shirley-damiron-85ba6b146/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
          <a className="Logo divider" target="_blank" rel="noopener noreferrer" href="https://www.google.com/gmail/"><FontAwesomeIcon  icon={["fab", "google-plus-square"]}/></a>
          <a className="Logo" target="_blank" rel="noopener noreferrer" href="https://github.com/ShirleyDamiron"><FontAwesomeIcon icon={["fab", "github-square"]} /></a>
      </div>
    </footer>
  );
}

export default Footer;
