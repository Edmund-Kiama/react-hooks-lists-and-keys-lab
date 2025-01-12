import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkArray = links.map(link => {
    const id = '#'+link;
    return <a href={ id } key={ id }>{ link }</a>
  })

  return <nav>{ linkArray}</nav>;
}

export default NavBar;
