import Link from "next/link";
import "../components-css/Footer.css";
import Image from "next/image";
import AnimatedLogo from "./AnimatedLogo";
import SearchEngineSvg from "./SearchEngineSvg";

export default function Footer() {
  return (
    <footer
      // className="p-5 text-center border-t text-sm space-y-1 text-gray-500"
      style={{
        backgroundColor: "black",
        height: "auto",
        position: "relative",
        top: "0",
        maxWidth: '100vw'
      }}
    >
      <div>
        <section style={{ color: "white" }}>
          <div className="footer-logo-container" style={{}}>
            <div
              style={{
                padding: "2em 2em 1em 2em",
                position: "relative",
                height: "10rem",
              }}
            >
              {/* <SearchEngineSvg /> */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ boxSizing: "border-box" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  fill="rgba(77, 125, 238, 0.5)"
                  stroke="black"
                />
                <polygon
                  points="34,40 49,50 34,60"
                  fill="rgba(20, 47, 111, 0.5)"
                />
                <polygon
                  points="51,40 66,50 51,60"
                  fill="rgba(77, 125, 238, 0.5)"
                />
              </svg>
            </div>
            <section className="footer-contact">
              <h1
                style={{
                  display: "inline-block",
                  marginInline: "auto",
                  marginBottom: "0.5em",
                  fontSize: "1.5rem",
                }}
              >
                צור קשר
              </h1>
              <ul
                className="contact-list"
                style={{
                  position: "relative",
                  display: "flex",
                  width: "auto",
                  padding: "1em",
                }}
              >
                <li style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "1rem", position: "relative" }}>
                    <Image src={"/email.svg"} alt={"email"} fill={true} />
                  </div>
                  <span
                    className="contact-list-span span-email"
                    style={{ alignContent: "center" }}
                  >
                    {" "}
                    <a href="mailto:talmoshel444@gmail.com" style={{color:'white'}}>
                      talmoshel444@gmail.com
                    </a>
                  </span>
                </li>
                <li style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "1rem", position: "relative" }}>
                    <Image src={"/phone.svg"} alt={"phone"} fill={true} />
                  </div>
                  <span
                    className="contact-list-span span-phone"
                    style={{ alignContent: "center", color: 'white'}}
                  >
                    0522233573
                  </span>
                </li>
              </ul>
            </section>
          </div>
          {/* <ul className="flex justify-center divide-x">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/about">אודות</Link>
            </li>
            <li>
              <Link href="/contact">צור קשר</Link>
            </li>
          </ul> */}
        </section>

        <div style={{ backgroundColor: "#262626" }}>
          <div
            style={{
              position: "relative",
              backgroundColor: "transparent",
              // color: "rgba(77, 125, 238, 1)",
              color: "white",

              height: "auto",
              width: "100%",
              // marginInline: "auto",
              display: "flex",
              padding: "1em",
              gap: "1em",
            }}
            className="bottom-footer"
          >
            <h1 dir="rtl">
              &copy; {new Date().getFullYear()} כל הזכויות שמורות לטל מושל פיתוח
              אתרים
            </h1>

            <div
              style={{
                display: "flex",
                gap: "1em",
                flexGrow: "1",
                // position: "absolute",
                // left: "0",
              }}
              className="socialmedia-container"
            >
              <span
  style={{
    // width: "max-content",
    // flexGrow: "1",
    textAlign: "right",
    alignSelf: "center",
  }}
> עקבו אחרי ב</span>
              <ul
                className="socialmedia-links"
                style={{ display: "flex", gap: "1em", position: "relative" }}
              >
                <li style={{ width: "1rem", position: "relative" }}>
                  <Link
                    href="https://www.linkedin.com/in/tal-moshel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={"/linkedin.svg"} alt={"linkedin"} fill={true} />
                  </Link>
                </li>
                <li style={{ width: "1rem", position: "relative" }}>
                  <Link
                    href="https://github.com/TalMoshel1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={"/github.svg"} alt={"github"} fill={true} />
                  </Link>
                </li>
                <li style={{ width: "1rem", position: "relative" }}>
                  <Link
                    href="https://www.facebook.com/mosheltal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={"/facebook.svg"} alt={"facebook"} fill={true} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
