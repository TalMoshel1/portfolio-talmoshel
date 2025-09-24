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
// import "../../components-css/AboutIndex.css";

export const metadata: Metadata = {
  title: "טל מושל - שיפור חווית משתמש באתר",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function UxUiPage() {
  return (
    <>
      <UxUiHeader />

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
              // maxWidth: "90%",
              //           outline: '8px ridge rgba(0, 0, 0,0.2)',
              // borderRadius: '2rem', backgroundColor:'rgba(79, 159,7,0.3)'
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
              חווית משתמש (UX): המפתח לבניית אתר מנצח וקידום אתרים (SEO) אפקטיבי
            </header>
            <AnimatedOnScrollButNotOnLoad threshold={0.1}>
              <article
                className="article"
                style={{ width: "100vw", margin: "auto", display: "flex" }}
              >
                {/* <div>
                  <p style={{ textWrap: "wrap" }}>
                    חווית משתמש (UX) היא המפתח להצלחה בעידן הדיגיטלי. היא
                    מתייחסת לכלל התחושות והרגשות של המשתמש בעת אינטראקציה עם
                    המוצר או השירות שלכם – החל מהרגע הראשון ועד לאחר השימוש.
                    חווית משתמש מצוינת פירושה אתר אינטואיטיבי, נעים לשימוש, מהיר
                    ונגיש, כזה שגורם למשתמש להרגיש שהוא מבין כיצד לנווט בו בקלות
                    ולמצוא את מבוקשו ללא תסכול. למה שיפור חווית משתמש קריטי לעסק
                    שלכם? הגברת מעורבות ושימור לקוחות: משתמשים שנהנים
                    מהאינטראקציה עם האתר שלכם יבלו בו יותר זמן, יחזרו אליו שוב
                    ושוב, ויהיו נאמנים יותר למותג. שיפור שיעורי המרה: כאשר האתר
                    קל לשימוש ומספק חוויה חיובית, המשתמשים נוטים יותר לבצע את
                    הפעולות הרצויות, בין אם זה רכישה, הרשמה או יצירת קשר, קרא
                    עוד על{" "}
                    <a className="articles-a" href="/call-to-action">
                      בניית עמודי נחיתה שמניעים לפעולה
                    </a>
                    . בידול מהמתחרים: בעולם רווי באתרי אינטרנט, חווית משתמש
                    עדיפה יכולה להוות יתרון תחרותי משמעותי שיבדיל אתכם מהשאר.
                    השפעה חיובית על קידום אורגני: גוגל ומנועי חיפוש אחרים
                    מעדיפים אתרים המספקים חווית משתמש טובה. זמן שהייה ארוך יותר
                    באתר, שיעורי נטישה נמוכים ואינטראקציות חיוביות אחרות הם
                    סימנים ברורים לאלגוריתמים של גוגל שהאתר שלכם רלוונטי
                    ואיכותי, קרא עוד על{" "}
                    <a className="link-in-text" href="/organic-seo">
                      קידום אורגני
                    </a>
                    . כיצד משפרים חווית משתמש? תהליך שיפור חווית המשתמש כולל
                    מחקר מעמיק, יצירת פרסונות משתמשים, בניית מסעות משתמש, עיצוב
                    ממשק (UI), בדיקות שימושיות וניתוח נתונים. חשוב לבחון היבטים
                    כמו מבנה האתר, ניווט קל, מהירות טעינה, עיצוב ויזואלי מושך,
                    וכמובן – לדאוג שהאתר <a className="link-in-text" href="/articles/bugs">יהיה חף מטעויות</a>. (לינק פנימי אפשרי ל:
                    תיקון באגים – באגים פוגעים באופן ישיר בחווית המשתמש). בנוסף,
                    יש לוודא שהאתר נגיש <a className="link-in-text">לכלל האוכלוסיה</a> . השקעה ב-UX היא השקעה
                    לטווח ארוך המניבה פירות רבים ומשפיעה על שורת הרווח של העסק.
                  </p>
                </div> */}
                {/* <p>עמוד זה נמצא בבנייה ויתווסף בקרוב</p> */}
                <div>
   
                  <p>
פעם דפי אינטרנט היו שוקלים עשרות קילובייטים בודדים בלבד.
היום זה לא המצב. גודל של דף סטנדרטי עם קבצי וידאו, אנימציות ולוגיקה מורכבת יכול להגיע לגודל של כמה מהגהבייט. אתר איטי או לא מקצועי מראה לגולש באתר את הדלת החוצה.
לכן חשוב להקפיד על <a className='link-in-text' href='/articles/accessibility'>מבנה HTML תקין</a>
, ייעול תמונות, וידאו, הטמעת pagination כשמדובר בטעינה של מידע ורב וcache במקרה של טעינת מידע שאינו משתנה לעיתים תכופות.
שימוש נכון בצבעים,
קביעת מימדים סטנדרטיים וגמישים לטקסט ואלמנטים,
ביצוע פעולות באתר בעזרת מקש ה Tab, Shift ו Enter.
אני כאן כדי
לייצר לכם אתר שנראה מדהים, 
  <a className='link-in-text' href='/articles/bugs'> לתקן באגים</a> <a className='link-in-text' href='/articles/landing-page'> ולעודד את המשתמש לפעולה</a>.

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
