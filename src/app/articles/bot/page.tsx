import UxUiHeader from "@/components/headers/ux-ui";
import BotHeader from "@/components/headers/Bot";

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

export const metadata: Metadata = {
  title: "טל מושל - פיתוח אוטומציה עסקית - צ&apos;אט בוט - ווצאפ בוט",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function BuisnessBot() {
  return (
    <>
      <BotHeader />

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
              בוט עסקי
            </header>
            <AnimatedOnScrollButNotOnLoad threshold={0.1}>
              <article
                className="article"
                style={{ width: "100vw", margin: "auto", display: "flex" }}
              >
                {/* <p>עמוד זה נמצא בבנייה ויתווסף בקרוב</p> */}
                <div>
                  <p>
                    בשנים האחרונות, צ&apos;אט בוטים הפכו מכלי עזר נישתי למרכיב
                    חיוני בנוף הדיגיטלי. הם שם כדי לשפר את חווית המשתמש, לייעל
                    תהליכים ולספק מענה מיידי, 24/7. בניית בוט יעיל היא כבר לא
                    מותרות, אלא הכרח לכל עסק שרוצה להישאר תחרותי.
                  </p>
                  <p>
                    תהליך בניית צ&apos;אט בוט מתחיל בהגדרת המטרה. האם הבוט נועד
                    לשפר את שירות הלקוחות? לסייע במכירות? או אולי לספק מידע
                    בסיסי? ברגע שהיעד ברור, אפשר להתחיל לתכנן את השיחה. תכנון
                    שיחה יעיל דורש מחשבה מחוץ לקופסה – חשבו על תרחישים שונים,
                    שאלות נפוצות, ואפילו על טעויות שהמשתמשים עלולים לעשות.
                  </p>
                  <p>
                    השלב הבא הוא בחירת הפלטפורמה המתאימה. ישנן פלטפורמות רבות
                    בשוק, החל מפלטפורמות קוד פתוח גמישות ועד לכלים מובנים ונוחים
                    לשימוש. לכל פלטפורמה יתרונות וחסרונות משלה, ובחירה נכונה
                    תלויה במורכבות הבוט, בתקציב וביכולות הטכניות של הצוות.
                  </p>
                  <p>
                    לאחר שהשלד נבנה, מגיע שלב התוכן. ניסוח תשובות ברורות,
                    ידידותיות ומדויקות הוא קריטי להצלחת הבוט. חשוב להתאים את הטון
                    והסגנון למותג שלכם. בוט עם אישיות משלו יהיה הרבה יותר מזמין
                    וייצור חיבור טוב יותר עם המשתמשים.
                  </p>
                  <p>
                    לבסוף, חשוב לזכור שהעבודה לא נגמרת ברגע שהבוט עולה לאוויר.
                    בוטים דורשים תחזוקה שוטפת ושיפור מתמיד. ניתוח נתונים, זיהוי
                    נקודות תורפה ועדכון התשובות באופן קבוע הם המפתח לשמירה על
                    בוט רלוונטי ויעיל.{" "}
                    <a className="link-in-text" href="/articles/bugs">
                      תיקון באגים
                    </a>{" "}
                    ו{" "}
                    <a className="link-in-text" href="/articles/landing-page">
                      עידוד המשתמש לפעולה
                    </a>{" "}
                    הם חלק בלתי נפרד מהתהליך.
                  </p>
                </div>
              </article>
            </AnimatedOnScrollButNotOnLoad>
          </div>
        </div>
      </main>

      <FormContainer />
    </>
  );
}
