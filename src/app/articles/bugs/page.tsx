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
import BugsHeader from "@/components/headers/Bugs";

export const metadata: Metadata = {
  title: "טל מושל - תיקון של באגים ושגיאות באתר",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function Bugs() {
  return (
    <>
      {/* <BugsHeader /> */}
      <BugsHeader />

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
            minHeight: "70svh",

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
              תיקון באגים
            </header>
            <AnimatedOnScrollButNotOnLoad threshold={0.1}>
              <article
                className="article"
                style={{ width: "100vw", margin: "auto", display: "flex" }}
              >
                <div>
                  <p style={{ width: "100%" }}>
                    בעולם הפיתוח, באגים הם חלק בלתי נפרד מהתהליך. הם יכולים
                    להופיע בכל שלב, משינוי קטן בקוד ועד להשקת פיצ&apos;ר חדש
                    לגמרי. תיקון באגים אינו רק משימה טכנית, אלא אמנות של חקירה,
                    הבנה ופתרון בעיות. מפתח טוב יודע שתיקון מהיר הוא לא תמיד
                    התיקון הטוב ביותר, ושנדרשת גישה שיטתית כדי למנוע את הופעת
                    הבאג שוב בעתיד. אז איך ניגשים למלאכה המורכבת הזו בצורה
                    נכונה?
                  </p>
                  <br />
                  <p style={{ width: "100%" }}>
                    <strong>
                      הנה כמה עקרונות מנחים לתהליך תיקון באגים יעיל:
                    </strong>
                  </p>
                  <br />
                  <ul className="landing-page-list" style={{ width: "100%" }}>
                    <li>
                      <strong>שחזור הבעיה:</strong> הצעד הראשון הוא להיות מסוגל
                      לשחזר את הבאג באופן עקבי. אם לא ניתן לשחזר את הבעיה, קשה
                      מאוד למצוא את השורש שלה. השתמשו ביומני רישום, בכלי ניפוי
                      (Debugger) ובכלים נוספים כדי לאסוף כמה שיותר מידע על
                      הנסיבות שבהן הבאג הופיע.
                    </li>
                    <li>
                      <strong>הבנת שורש הבעיה:</strong> לפני שמתחילים לכתוב קוד,
                      יש להבין לעומק מה בדיוק גורם לבאג. האם זו טעות לוגית?
                      בעיית תאימות? שגיאה בכתיבת קוד? ההבנה הזו תחסוך זמן רב
                      ותמנע פתרונות שטחיים שיגרמו לבאגים חדשים.
                    </li>
                    <li>
                      <strong>בידוד הקוד הבעייתי:</strong> לאחר שזיהיתם את שורש
                      הבעיה, בודדו את הקוד הבעייתי. צמצמו את הקוד למקרה המינימלי
                      שמייצר את הבאג. ככל שהקוד שתבדקו יהיה קטן יותר, כך יהיה קל
                      יותר לאתר את הטעות ולתקן אותה.
                    </li>
                    <li>
                      <strong>בדיקת התיקון:</strong> לאחר שהבאתם פתרון, יש לבדוק
                      אותו ביסודיות. ודאו שהתיקון לא רק פתר את הבאג המקורי, אלא
                      גם שלא יצר באגים חדשים במערכת. זהו שלב חיוני למניעת מצבים
                      של &quot;אחד בפה ואחד בחוץ&quot;. שימו לב במיוחד לבאגים
                      שפוגעים במבנה האתר או בתכנים, שכן הם עלולים להזיק ל
                      {/* <a
                        className="link-in-text"
                        href="https://www.example.com/seo-guide"
                      > */}
                        קידום האורגני
                      {/* </a>{" "} */}
                      שלכם.
                    </li>
                    <li>
                      <strong>בדיקת רגרסיה:</strong> חשוב לבצע בדיקות רגרסיה כדי
                      לוודא שתיקון הבאג לא פגע בפונקציונליות קיימת שכבר עבדה.
                      תהליך בדיקות יסודי יכול לשפר משמעותית את{" "}
                      <a
                        className="link-in-text"
                        href="/articles/ux-ui"
                      >
                        חווית המשתמש
                      </a>{" "}
                      ולשמור על יציבות המערכת.
                    </li>
                    <li>
                      <strong>תיעוד:</strong> תיעוד הוא חלק קריטי בתהליך. כתבו
                      על הבאג שנמצא, על הפתרון שיושם ועל הסיבה שהבאג הופיע
                      מלכתחילה. תיעוד טוב יכול לעזור למנוע טעויות דומות בעתיד
                      ולחסוך זמן לכל הצוות. בנוסף, ודאו שתיקון הבאג אינו יוצר
                      חסמים חדשים למשתמשים עם מוגבלויות, מה שפוגע ב<a
                        className="link-in-text"
                        href="/articles/accessibility"
                      >
                        שיפור נגישות
                      </a>{" "}
                      האתר.
                    </li>
                  </ul>
                  <br />
                  <p>
                    תיקון באגים הוא תהליך מתמיד של למידה ושיפור. גישה שיטתית
                    ונכונה תבטיח לא רק שהקוד יפעל כצפוי, אלא גם שתשמרו על יציבות
                    ואמינות המוצר שלכם לאורך זמן.
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
