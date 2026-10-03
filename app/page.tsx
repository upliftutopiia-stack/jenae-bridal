"use client";

import { useEffect, useState } from "react";

const EMAIL = "jenaebridal@gmail.com";
const INSTAGRAM = "https://www.instagram.com/jenae_bridal/";

const enquiryLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Jenae Bridal — Wedding Makeup Enquiry"
)}&body=${encodeURIComponent(
  "Hi Jenae,\n\nI'd love to enquire about bridal makeup.\n\nWedding date:\nWedding location:\nYour name:\nAnything you'd like Jenae to know:\n\nThank you!"
)}`;

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    ["Home", "#home"],
    ["The Artist", "#artist"],
    ["Bridal", "#bridal"],
    ["Portfolio", "#portfolio"],
    ["Contact", "#contact"],
  ];

  return (
    <main id="home">
      <header className={`header ${menuOpen ? "menu-active" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span>Jenae</span>
          <small>BRIDAL MAKEUP ARTISTRY</small>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={enquiryLink}>
          ENQUIRE ABOUT YOUR DATE <Arrow />
        </a>

        <button
          type="button"
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div
          id="mobile-navigation"
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <span className="mobile-label">JENAE BRIDAL / PENNSYLVANIA</span>

          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={enquiryLink}
            className="mobile-enquiry"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            ENQUIRE ABOUT YOUR DATE <Arrow />
          </a>
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="hero-topline">
          <span>BRIDAL MAKEUP ARTISTRY</span>
          <span>ALLENTOWN · LEHIGH VALLEY, PA</span>
        </div>

        <div className="hero-inner">
          <div className="hero-left">
            <span className="eyebrow">THE JENAE BRIDAL EDIT</span>

            <h1>
              For the
              <br />
              <em>beautifully</em>
              <br />
              unforgettable.
            </h1>

            <p>
              Bridal makeup artistry for one of life&apos;s most meaningful
              moments. Explore Jenae&apos;s work and get in touch to discuss
              your wedding vision.
            </p>

            <a href={enquiryLink} className="button button-dark">
              ENQUIRE ABOUT YOUR WEDDING <Arrow />
            </a>

            <span className="hero-footnote">
              BRIDAL MAKEUP ARTISTRY · PENNSYLVANIA
            </span>
          </div>

          <div className="hero-right">
            <div className="hero-art">
              <div className="art-arch arch-outer" />
              <div className="art-arch arch-inner" />
              <div className="art-sun" />

              <div className="art-words">
                <span>the bridal</span>
                <strong>edit.</strong>
                <i>✳</i>
              </div>

              <span className="art-caption">
                JENAE BRIDAL — MAKEUP ARTISTRY
              </span>
            </div>

            <div className="hero-art-bottom">
              <span>01 / A CELEBRATION OF BEAUTY</span>
              <span>SCROLL TO DISCOVER ↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}

      <div className="marquee" aria-hidden="true">
        JENAE BRIDAL ✳ THE BRIDAL EDIT ✳ MAKEUP ARTISTRY ✳
        JENAE BRIDAL ✳ THE BRIDAL EDIT ✳ MAKEUP ARTISTRY ✳
      </div>

      {/* INTRO */}

      <section className="intro section-pad" id="artist">
        <div className="section-index">
          <span>01 / THE ARTIST</span>
          <span>MEET JENAE</span>
        </div>

        <div className="intro-grid">
          <div>
            <span className="eyebrow">A NOTE FROM THE BEAUTY EDIT</span>

            <h2>
              A love for
              <br />
              <em>bridal beauty.</em>
            </h2>
          </div>

          <div className="intro-copy">
            <h3>Meet Jenae Gunderlock.</h3>

            <p>
              Jenae Bridal is the bridal makeup artistry of Jenae
              Gunderlock, connected to the Allentown and Lehigh Valley
              wedding community in Pennsylvania.
            </p>

            <p>
              Discover her published work, find inspiration for your
              wedding-day look and contact Jenae directly to discuss
              your date, location and makeup enquiry.
            </p>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GET TO KNOW HER WORK <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* BRIDAL */}

      <section className="bridal section-pad" id="bridal">
        <div className="section-index">
          <span>02 / BRIDAL ARTISTRY</span>
          <span>THE WEDDING EDIT</span>
        </div>

        <div className="bridal-heading">
          <span className="eyebrow">FOR THE MOMENTS THAT MATTER</span>

          <h2>
            Your day,
            <br />
            <em>your beauty.</em>
          </h2>

          <p>
            From the inspiration you save to the look you envision
            walking down the aisle in, your bridal makeup enquiry
            starts with a conversation.
          </p>
        </div>

        <div className="bridal-grid">
          <article className="bridal-card card-one">
            <div className="card-head">
              <span>THE WEDDING EDIT</span>
              <span>01</span>
            </div>

            <div className="card-art">
              <div className="card-circle" />
              <span>the</span>
              <strong>bride.</strong>
            </div>

            <div className="card-foot">
              <h3>Bridal Artistry</h3>
              <p>Explore Jenae&apos;s bridal makeup work.</p>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW PORTFOLIO <Arrow />
              </a>
            </div>
          </article>

          <article className="bridal-card card-two">
            <div className="card-head">
              <span>YOUR SPECIAL MOMENT</span>
              <span>02</span>
            </div>

            <div className="card-art">
              <div className="card-circle" />
              <span>your</span>
              <strong>vision.</strong>
            </div>

            <div className="card-foot">
              <h3>Wedding Enquiries</h3>
              <p>Share your date, location and makeup inspiration.</p>
              <a href={enquiryLink}>
                CONTACT JENAE <Arrow />
              </a>
            </div>
          </article>
        </div>

        <p className="bridal-note">
          Please contact Jenae directly to confirm current services,
          availability, booking arrangements and any travel details.
        </p>
      </section>

      {/* STATEMENT */}

      <section className="statement">
        <span>THE JENAE BRIDAL EDIT</span>

        <h2>
          Beauty for
          <br />
          <em>your forever.</em>
        </h2>

        <div className="statement-star">✳</div>
      </section>

      {/* PORTFOLIO */}

      <section className="portfolio section-pad" id="portfolio">
        <div className="section-index">
          <span>03 / PORTFOLIO</span>
          <span>DISCOVER THE ARTISTRY</span>
        </div>

        <div className="portfolio-layout">
          <div className="portfolio-copy">
            <span className="eyebrow">THE WORK</span>

            <h2>
              The
              <br />
              <em>beauty diary.</em>
            </h2>

            <p>
              For a closer look at Jenae&apos;s actual makeup work,
              visit her official Instagram portfolio.
            </p>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              EXPLORE HER PORTFOLIO <Arrow />
            </a>
          </div>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-art"
            aria-label="Explore Jenae Bridal's Instagram portfolio"
          >
            <div className="portfolio-border">
              <span>THE BEAUTY DIARY / JENAE BRIDAL</span>

              <div className="portfolio-flower">✳</div>

              <div className="portfolio-art-title">
                <small>A STUDY IN</small>
                <strong>bridal</strong>
                <em>beauty.</em>
              </div>

              <span>EXPLORE THE PORTFOLIO ↗</span>
            </div>
          </a>
        </div>
      </section>

      {/* PROCESS */}

      <section className="process section-pad">
        <div className="section-index">
          <span>04 / GET IN TOUCH</span>
          <span>YOUR ENQUIRY</span>
        </div>

        <div className="process-heading">
          <span className="eyebrow">LET&apos;S START A CONVERSATION</span>

          <h2>
            Your date.
            <br />
            <em>Your vision.</em>
          </h2>
        </div>

        <div className="process-grid">
          {[
            {
              n: "01",
              title: "Explore",
              text: "Discover Jenae's published bridal makeup work on Instagram.",
            },
            {
              n: "02",
              title: "Enquire",
              text: "Share your wedding date, location and the look you have in mind.",
            },
            {
              n: "03",
              title: "Connect",
              text: "Jenae can confirm availability and arrangements directly with you.",
            },
          ].map((step) => (
            <div className="process-item" key={step.n}>
              <span>{step.n} /</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact section-pad" id="contact">
        <div className="section-index">
          <span>05 / CONTACT</span>
          <span>BRIDAL ENQUIRIES</span>
        </div>

        <div className="contact-grid">
          <div>
            <span className="eyebrow">A BEAUTIFUL BEGINNING</span>

            <h2>
              Let&apos;s make
              <br />
              <em>it yours.</em>
            </h2>

            <p>
              Have a wedding date in mind? Email Jenae with your
              date, venue or location, and a little about the
              makeup look you&apos;re envisioning.
            </p>

            <a href={enquiryLink} className="button button-light">
              SEND YOUR WEDDING ENQUIRY <Arrow />
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-instagram"
            >
              CONNECT ON INSTAGRAM <Arrow />
            </a>
          </div>

          <div className="contact-details">
            <span>DIRECT ENQUIRIES</span>
            <a href={enquiryLink}>jenaebridal@gmail.com ↗</a>

            <span>INSTAGRAM</span>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              @jenae_bridal ↗
            </a>

            <span>LOCATION</span>
            <strong>ALLENTOWN / LEHIGH VALLEY, PA</strong>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-top">
          <span>JENAE BRIDAL</span>
          <span>BRIDAL MAKEUP ARTISTRY · PENNSYLVANIA</span>
        </div>

        <div className="footer-logo">
          Jenae<span>✳</span>
          <small>BRIDAL MAKEUP ARTISTRY</small>
        </div>

        <div className="footer-bottom">
          <span>JENAE BRIDAL</span>

          <div>
            <a href={enquiryLink}>EMAIL ↗</a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM ↗
            </a>

            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}