import UxUiHeader from "@/components/headers/ux-ui";
import HeroImage from "@/components/HeroImage";
import { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Customer_ux from "../../assets/customer-ux.svg";
import Image from "next/image";
import "./page.css";
import Form from "@/components/Form";
import FormContainer from "@/components/FormContainer";
import AnimatedOnScrollButNotOnLoad from "@/components/AnimatedOnScrollButNotOnLoad";
import "../../components-css/AboutIndex.css";
import "./page.css";
import LandingPageHeader from "@/components/headers/Landing-Page";

export const metadata: Metadata = {
  title:
    "טל מושל - פיתוח עמודי נחיתה מקצועיים ומניעים לפעולה",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function LandingPage() {
  return (
    <>
      {/* <UxUiHeader /> */}
      <LandingPageHeader />

      <main
        className={varela.className}
        style={{
          position: "relative",
          top: "0",
          minHeight: "70svh",
          height: "fit-content",
          width: "100vw",
        }}
      >
        <div
          className="about-background-container"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            minHeight: "100%",
            height: "fit-content",
          }}
        >
          <Image
            src={"/sofa-living-room-with-copy-space2.webp"}
            alt={"living room"}
            fill={true}
          />
        </div>

        <div
          style={{
            position: "relative",
            top: "0",
            backgroundColor: "rgba(255,255,255,0.8)",
                        minHeight: '70svh',

            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "fit-content",
              margin: "5.5em auto",
              width: "auto",
            }}
          >
            <header
              style={{
                padding: "2rem",
                fontSize: "1.5rem",
                backgroundColor: "transparent",
                textAlign: "center",
                width: "100%",
                margin: "auto",
              }}
            >
              עמודי נחיתה
            </header>
            <AnimatedOnScrollButNotOnLoad threshold={0.1}>
              <article
                className="article"
                style={{ width: "100vw", margin: "auto", display: "flex" }}
              >
                <div>
                  <p style={{ width: "100%" }}>
                    עמוד נחיתה הוא הרבה יותר מסתם דף אינטרנט; הוא כלי שיווקי
                    עוצמתי שנועד להשיג מטרה אחת וברורה: להניע את המבקר לבצע
                    פעולה ספציפית. בניגוד לאתר אינטרנט רגיל, עמוד נחיתה מוצלח
                    ממוקד, נטול הסחות דעת ומכוון כולו לביצוע אותה פעולה נחשקת,
                    בין אם זו השארת פרטים, הורדת קובץ, או רכישת מוצר. אבל איך
                    בונים עמוד כזה שיעבוד באמת?
                  </p>
                  <br />
                  <p style={{ width: "100%" }}>
                    <strong>
                      הנה העקרונות המרכזיים לבניית עמוד נחיתה מנצח:
                    </strong>
                  </p>
                  <br />

                  <ul className="landing-page-list" style={{ width: "100%" }}>
                    <li>
                      <strong>כותרת עוצמתית ותמציתית:</strong> הכותרת היא הדבר
                      הראשון שהמבקר רואה. היא צריכה לתפוס את תשומת ליבו באופן
                      מיידי, להסביר במדויק על מה העמוד ומה היתרון המרכזי שהוא
                      מציע. כותרת טובה מייצרת סקרנות ומעודדת את הקריאה.
                    </li>
                    <li>
                      <strong>הצעת ערך ברורה (Value Proposition):</strong> מדוע
                      שהמבקר יבצע את הפעולה הרצויה? הצעת הערך שלכם צריכה לענות
                      על השאלה הזו בצורה בהירה ומשכנעת. הסבירו מה המבקר יקבל
                      בתמורה לזמנו או לפרטיו.
                    </li>
                    <li>
                      <strong>הוכחה חברתית:</strong> אנשים סומכים
                      על אנשים אחרים. שילוב של עדויות לקוחות, לוגואים של חברות
                      מוכרות, נתוני שימוש או דירוגים יכול להגביר את האמינות שלכם
                      ולשכנע מתלבטים.
                    </li>
                    <li>
                      <strong>הנעה לפעולה:</strong> כפתור
                      ה-CTA הוא לב ליבו של העמוד. הוא חייב להיות בולט, ברור ובעל
                      ניסוח שמבהיר בדיוק מה יקרה כאשר לוחצים עליו (למשל, &quot;הורד
                      את המדריך החינמי&quot; במקום &quot;שלח&quot;).
                    </li>
                    <li>
                      <strong>טופס קצר ופשוט:</strong> אם המטרה היא השארת פרטים,
                      ודאו שהטופס קצר ככל האפשר. בקשו רק את המידע החיוני ביותר
                      כדי להפחית את החיכוך ולהגדיל את הסיכויים להשלמת התהליך.
                    </li>
                    <li>
                      <strong>עיצוב ויזואלי נקי ומזמין:</strong> עמוד נחיתה לא
                      צריך להיות עמוס. השתמשו ברווחים לבנים, תמונות או סרטונים
                      איכותיים ועיצוב שמשתלב עם המותג שלכם. בנוסף, יש לוודא
                      שהעמוד נגיש לכלל האוכלוסייה. קראו עוד על <a
                        className="link-in-text"
                        href="/articles/accessibility"
                      >
                        שיפור נגישות
                      </a>
                      .
                    </li>
                  </ul>
                  <br />
                  <p>
                    עמוד נחיתה מעוצב היטב הוא כלי חיוני לכל קמפיין שיווקי. הוא
                    מפחית את עלויות הקמפיין, מגביר את שיעורי ההמרה ומשמש כחוליה
                    חיונית בשרשרת השיווקית שלכם. קראו עוד על <a
                      className="link-in-text"
                      href="/articles/ux-ui"
                    >
                      שיפור חווית משתמש
                    </a>
                    .
                  </p>
                </div>
                {/* <p>עמוד זה נמצא בבנייה ויתווסף בקרוב</p> */}
              </article>
            </AnimatedOnScrollButNotOnLoad>
          </div>
        </div>
      </main>

      <FormContainer />
    </>
  );
}
