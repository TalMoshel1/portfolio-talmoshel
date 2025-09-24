import { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Image from "next/image";
import "./page.css";
import FormContainer from "@/components/FormContainer";
// import AnimatedOnScrollButNotOnLoad from "@/components/AnimatedOnScrollButNotOnLoad";
import "../../components-css/AboutIndex.css";
import "./page.css";
import WebAccessibility from "@/components/headers/WebAccessibility";

export const metadata: Metadata = {
  title: "טל מושל - שיפור נגישות באתר",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function Accessibility() {
  return (
    <>
      {/* <UxUiHeader /> */}
      <WebAccessibility />

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
              <h1>נגישות</h1>
            </header>
            {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
            <article
              className="article"
              style={{ width: "100vw", margin: "auto", display: "flex" }}
            >
              <div>
                <p>
                  בשביל נגישות טובה, יש להשתמש במבנה HTML תקין, בין היתר בשביל
                  קוראי מסך. למשל, יש להשתמש בתגית ה button כאשר יוצרים כפתור
                  באתר. מנגד, שימוש באלמנט div או span לא נכונים סמנטית, קורא
                  המסך לא יעביר למשתמש שמדובר בכפתור מה שעלול לבלבל אותו ופוגע
                  בנגישות.
                  <br />
                  <strong>כותרות</strong>
                  <br />
                  יש להשתמש בכותרות מסוג h1 בדף, פעם אחת בלבד. זוהי הכותרות
                  הראשית של הדף. לכותרות הראשית נוכל להצמיד תת כותרות ראשיות
                  שיקראו h2. אפשר להסתכל על זה כעל עץ בעל גזע אחד שממנו ענפים.
                  לכל תת כותרות נוכל להצמיד אחד או יותר מתגיות h3 וכך הלאה. יש
                  שש תגיות כותרת:
                  <br />
                  h1, h2, h3, h4, h5 ו h6.
                  <br />
                  אי התחשבות בסדר זה פוגע בנגישות וחושף אתכם לתביעה, חווית
                  משתמש פחות טובה ובין היתר גם דירוג קידום אורגני נמוך יותר.
                  <br />
                  <strong>aria-label</strong>
                  <br />
                  ניתן להשתמש בתכונה aria-label כדי לספק תיאור קצר, ברור ונהיר
                  לרכיבי ממשק שאין להם תווית ויזואלית מובנית או שהתווית הקיימת
                  לא מספקת מספיק מידע. תכונה זו עוזרת לקוראי מסך להבין טוב יותר
                  את הפונקציה של הרכיב, במיוחד במקרים של אייקונים או כפתורים
                  שמוצגים רק באמצעות תמונה. לדוגמה, אם יש לכם כפתור עם אייקון
                  של סל קניות, תוכלו להוסיף לו aria-label=&quot;הוסף לסל&quot;
                  כדי שמשתמשים עם קוראי מסך יבינו בדיוק מה הפעולה שהכפתור
                  מבצע.
                  <br />
                  <strong>alt (Alternate Text)</strong>
                  <br />
                  בנוסף, עבור תגיות תמונה img, ישנה חשיבות עצומה לשימוש נכון
                  בתכונה alt. תכונה זו מכילה טקסט חלופי שמתאר את תוכן התמונה.
                  הוא מוצג במקרים שבהם התמונה לא נטענת או שמשתמשים משתמשים
                  בקורא מסך. תיאור ה-alt צריך להיות קצר אך מדויק, ולתאר את מה
                  שרואים בתמונה. לדוגמה, אם יש תמונה של כלב משחק בפארק, תיאור
                  ה-alt המתאים יהיה &quot;כלב גולדן רטריבר משחק בכדור בפארק
                  ירוק.&quot; שימוש נכון ב-alt משפר את הנגישות, תורם לקידום
                  האורגני של האתר (SEO) ומבטיח שגם אם התמונה לא נטענת, המשתמש
                  עדיין יבין את הקונטקסט. במקרים שבהם התמונה היא קישוטית בלבד
                  ואין לה חשיבות תוכנית, ניתן להשאיר את התכונה ריקה
                  (alt=&quot;&quot;) כדי שקוראי מסך יתעלמו ממנה.
                </p>
              </div>
            </article>
            {/* </AnimatedOnScrollButNotOnLoad> */}
          </div>
        </div>
      </main>

      <FormContainer />
    </>
  );
}