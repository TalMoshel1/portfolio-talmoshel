// app/privacy/page.tsx
// "use client";
import './page.css'
import FormContainer from "@/components/FormContainer";
import Privacy from "@/components/headers/Privacy";
import React from "react";


export default function PrivacyPolicy() {
  return <>
      <Privacy />
     <main  style={{backgroundColor:'white', width: '100%'}}>
      <article className="card" style={{width: '100%'}} itemScope itemType="https://schema.org/PrivacyPolicy">
        <header>
          {/* <h1 itemProp="name">הצהרת פרטיות</h1> */}
          <div className="meta muted">
            <span>עודכן לאחרונה:</span> <time dateTime="2025-08" itemProp="dateModified">
              אוגוסט 2025
            </time>
          </div>
          <p>
            אני, טל מושל, מכבד את פרטיות המשתמשים באתר{" "}
            <a href="https://www.talmoshel.co.il" target="_blank" rel="noopener noreferrer">
              talmoshel.co.il
            </a>
            . מסמך זה נועד להסביר כיצד נאסף מידע, כיצד הוא נשמר וכיצד נעשה בו שימוש.
          </p>
        </header>

        <section className="section">
          <h2>איזה מידע נאסף?</h2>
          <p>
            האתר כשלעצמו אינו אוסף מידע אישי מזהה, אלא אם המשתמש בוחר ליצור קשר באופן יזום
            (לדוגמה, דרך טופס יצירת קשר או פנייה ישירה באימייל).
          </p>
          <p>
            בנוסף, האתר עשוי להשתמש בכלי ניתוח (כמו Google Analytics או כלי דומים) אשר אוספים מידע
            סטטיסטי אנונימי, כגון:
          </p>
          <ul>
            <li>סוג הדפדפן ומערכת ההפעלה</li>
            <li>עמודים שנצפו</li>
            <li>משך הביקור באתר</li>
            <li>כתובת IP (לצורכי אבטחה וסטטיסטיקה)</li>
          </ul>
        </section>

        <section className="section">
          <h2>שימוש במידע</h2>
          <p>המידע שנאסף משמש ל:</p>
          <ul>
            <li>שיפור חוויית המשתמש באתר</li>
            <li>מענה לפניות שנשלחות דרך טפסי יצירת קשר</li>
            <li>שמירה על אבטחת האתר</li>
          </ul>
          <p>
            המידע <strong>לא יימכר ולא יועבר</strong> לגורמים שלישיים אלא אם כן הדבר נדרש על פי חוק.
          </p>
        </section>

        <section className="section">
          <h2>עוגיות (Cookies)</h2>
          <p>
               האתר <strong>אינו</strong> אוסף מידע על גולשים באמצעות עוגיות
              (Cookies) או כלי מעקב דומים, למעט שימוש ב-
              <strong>Local Storage</strong> בדפדפן שלך לצורך שמירת סטטוס ההסכמה
              לתנאי השימוש בלבד. לא נשמרים פרטים מזהים נוספים.
          </p>
          <p>
            ניתן לחסום עוגיות דרך הגדרות הדפדפן, אך ייתכן שחלק מהשירותים באתר לא יעבדו בצורה מיטבית.
          </p>
        </section>

        <section className="section">
          <h2>קישורים לאתרים חיצוניים</h2>
          <p>
            באתר עשויים להופיע קישורים לאתרים חיצוניים. איני אחראי למדיניות הפרטיות או התוכן של
            אתרים אלה.
          </p>
        </section>

        <section className="section">
          <h2>שמירת מידע</h2>
          <p>
            כל מידע אישי שנמסר באמצעות יצירת קשר נשמר בצורה מאובטחת, ונגיש לי בלבד. המשתמש רשאי
            לבקש לעיין, לעדכן או למחוק את המידע האישי שלו באמצעות פנייה אליי ישירות.
          </p>
        </section>

        <section className="section">
          <h2>יצירת קשר</h2>
          <p>
            לכל שאלה בנושא פרטיות ניתן לפנות אליי בכתובת: 📧{" "}
            <a href="mailto:talmoshel444@gmail.com">talmoshel444@gmail.com</a>
          </p>
        </section>
      </article>

      {/* <style jsx>{`
     
 
        .card {
          background: var(--card);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 2rem;
          max-width: var(--max);
          line-height: 1.75;
        }
        h1 {
          margin: 0 0 1rem;
          font-size: 2rem;
        }
        h2 {
          margin: 2rem 0 1rem;
          font-size: 1.25rem;
        }
        p {
          margin: 0.5rem 0;
        }
        ul {
          margin: 0.5rem 0 1rem;
        }
        li {
          margin: 0.35rem 0;
        }
        a {
          color: var(--link);
        }
        .muted {
          color: var(--muted);
        }
      `}</style> */}
    </main>
    <FormContainer />
    </>
}
