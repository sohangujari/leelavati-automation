import { useEffect } from "react";
import homeData from "../../data/home.json";
import dots from "../../assets/images/dots.png";
import iconLogo from "../../assets/images/icon_logo2.png";
import logo from "../../assets/images/icon_logo4.png";
import mainImage01 from "../../assets/images/smart-industry/4.avif";
import mainVideo from "../../assets/Main Video.mp4";
import { markdownToHTML } from "../../utils/converter";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty(
        "--scroll-position",
        `${scrollPosition}s`
      );

      const logoIcon = document.querySelector(".logo-icon");
      if (logoIcon) {
        // Check if logoIcon is not null
        const rect = logoIcon.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          document.body.classList.add("animated");
        } else {
          document.body.classList.remove("animated");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="section no-page-title">
      {/* <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="title">
            <img src={logo} alt="" />
            <div className="title-text">
              <h1
                className="entry-title big-title"
                dangerouslySetInnerHTML={{
                  __html: markdownToHTML(homeData.welcomeText),
                }}
              />
              <p
                className="site-description"
                dangerouslySetInnerHTML={{
                  __html: markdownToHTML(homeData.description),
                }}
              />
            </div>
          </div>
          <br />
        </div>
      </div> */}
      <div
        className="home-full-width"
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "0",
          }}
        />
        <div className="home-full-width-background">
          <div className="section-wrapper block content-1170 center-relative">
            <div className="content-wrapper">
            <img src={logo} alt="" />
              <div className="title">
                <div className="title-text">
                  <h1
                    className="entry-title big-title"
                    dangerouslySetInnerHTML={{
                      __html: markdownToHTML(homeData.welcomeText),
                    }}
                  />
                  {/* <p
                    className="site-description"
                    dangerouslySetInnerHTML={{
                      __html: markdownToHTML(homeData.description),
                    }}
                  /> */}
                </div>

              </div>
              <ScrollLink
          className="button home-button"
          smooth
          to={"contact"}
          offset={-77}
        >
          CONTACT US
        </ScrollLink>
              <br />
            </div>
          </div>
          {/* <img
            className="logo-icon"
            src={iconLogo}
            alt="Meelo Icon"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
