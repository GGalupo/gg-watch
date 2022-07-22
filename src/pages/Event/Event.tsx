import { useState } from "react";
import { useParams } from "react-router-dom";

import { Header, Menu, Sidebar, Video } from "../../components";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
};
