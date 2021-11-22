import React from "react";
import  NavLink  from './hooks/NavLink';

const Nav = () => {
    const navLinks = [
        { navLinkId: 'Main', scrollToId: 'main' },
        { navLinkId: 'About', scrollToId: 'about' },
        { navLinkId: 'Portfolio', scrollToId: 'portfolio' },
        { navLinkId: 'Contact', scrollToId: 'contact' },
    ];

  return (
    <nav className="nav_container">
        <div class="nav_wrapper">
        <div class="nav_logo">
                   <h3> PB. </h3>
                </div>

        <div class ="nav-items">
        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
      </div>
      </div>
    </nav>
  );
};

export default Nav;
