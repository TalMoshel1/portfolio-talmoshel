import AboutHeaderLayout from "@/components/AboutLayout";
import FormContainer from "@/components/FormContainer";
import TermsOfUse from "@/components/headers/TermsOfUse";
import React from "react";


const TermsOfUsePage: React.FC = () => {
    return <>
    <TermsOfUse />
      <main

            dir='rtl'
            style={{
              maxWidth: "100vw",
              margin: "auto",  
              backgroundColor: "white",
              color: "black",
              // zIndex: "10000",
              // overflow: 'hidden',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1em",
              height: "100%",
              flexGrow:'1',
              padding: '1em'
              // border: '10px solid red'
            }}
          >
            {/* <h2 id="modal-title" style={{textAlign:'center'}}>ברוכים הבאים לאתר</h2>
            <p style={{width: 'fit-content',  marginInline:'auto'}}>כדי להמשיך, אנא אשרו שקראתם את תנאי השימוש</p> */}
            {/* <TermsOfUsePage /> */}
            <main
              dir="rtl"
              style={{
                lineHeight: 1.75,
                wordBreak: "break-word",
                textWrap: "wrap",
                height: "100%",
                // maxHeight: "80vh",
                overflowY: "auto",
                overflowX: "hidden",
                width: "calc(100vw-1em)",
                padding:'1em'
              }}
            >
              <header style={{ marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "2rem", margin: 0 }}>תנאי שימוש</h1>
                <p style={{ margin: 0, opacity: 0.8 }}>
                  עודכן לאחרונה: 21 באוגוסט 2025
                </p>
              </header>
    
              <section aria-labelledby="acceptance">
                <h2 id="acceptance">1) הסכמה לתנאים</h2>
                <p>
                  ברוך/ה הבא/ה לאתר <strong>talmoshel.co.il</strong>,
                  המופעל על ידי
                  <strong> טל מושל — פיתוח אתרים</strong>. השימוש באתר
                  כפוף לתנאים המפורטים במסמך זה. שימוש באתר משמעו כי קראת ואת/ה
                  מסכים/ה לתנאים.
                </p>
              </section>
    
              <section aria-labelledby="services" style={{ marginTop: "1rem" }}>
                <h2 id="services">2) השירותים באתר</h2>
                <p>
                  האתר מציג מידע אודות שירותים כגון: שיפור חוויית משתמש (UX/UI),
                  בניית עמודי נחיתה, תיקון באגים, בוטים עסקיים, ושיפור נגישות. יצירת
                  קשר נעשית באופן יזום על-ידי המשתמש/ת באמצעות טופס באתר או פנייה
                  ישירה.
                </p>
              </section>
    
              <section aria-labelledby="no-cookies" style={{ marginTop: "1rem" }}>
                <h2 id="no-cookies">3) עוגיות (Cookies) וכלי מעקב</h2>
                <p>
                  האתר <strong>אינו</strong> אוסף מידע על גולשים באמצעות עוגיות
                  (Cookies) או כלי מעקב דומים, למעט שימוש ב-
                  <strong>Local Storage</strong> בדפדפן שלך לצורך שמירת סטטוס ההסכמה
                  לתנאי השימוש בלבד. לא נשמרים פרטים מזהים נוספים.
                </p>
              </section>
    
              <section aria-labelledby="contact" style={{ marginTop: "1rem" }}>
                <h2 id="contact">4) יצירת קשר והסכמה לקבלת פנייה</h2>
                <p>
                  אם בחרת להשאיר פרטים בטופס יצירת קשר (שם מלא ומספר טלפון), את/ה
                  מאשר/ת למפעיל לחזור אליך באמצעות הודעת וואטסאפ או שיחה טלפונית
                  לצורך טיפול בפנייתך ומתן שירות. מסירת פרטים היא וולונטרית, ומטרתה
                  הבלעדית היא מענה לפנייה שלך.
                </p>
              </section>
    
              <section aria-labelledby="user-resp" style={{ marginTop: "1rem" }}>
                <h2 id="user-resp">5) אחריות המשתמש/ת</h2>
                <ul>
                  <li>יש להשתמש באתר בהתאם לדין החל ולתנאים אלה בלבד.</li>
                  <li>
                    אין לפרסם או להעביר באמצעות האתר תכנים פוגעניים, בלתי חוקיים או
                    מפרים זכויות.
                  </li>
                  <li>
                    אין לבצע ניסיונות חדירה, סקירה אוטומטית או פגיעה באבטחת האתר.
                  </li>
                </ul>
              </section>
    
              <section aria-labelledby="ip" style={{ marginTop: "1rem" }}>
                <h2 id="ip">6) זכויות קניין רוחני</h2>
                <p>
                  אלא אם צוין אחרת, כל הזכויות בתכני האתר, בעיצובו ובקודו שמורות
                  למפעיל. אין להעתיק, לשכפל, להפיץ או ליצור יצירות נגזרות ללא קבלת
                  רשות מפורשת מראש ובכתב.
                </p>
              </section>
    
              <section aria-labelledby="liability" style={{ marginTop: "1rem" }}>
                <h2 id="liability">7) הגבלת אחריות</h2>
                <p>
                  האתר והשירותים בו מסופקים כפי שהם (AS IS). המפעיל עושה מאמץ להציג
                  מידע מדויק ועדכני, אך אינו מתחייב לחוסר שגיאות או לזמינות מלאה של
                  האתר. המפעיל לא יהיה אחראי לכל נזק ישיר או עקיף שנגרם עקב שימוש
                  באתר.
                </p>
              </section>
    
              <section aria-labelledby="changes" style={{ marginTop: "1rem" }}>
                <h2 id="changes">8) שינויים בתנאים</h2>
                <p>
                  המפעיל רשאי לעדכן מעת לעת את תנאי השימוש. תאריך העדכון האחרון
                  מופיע בראש העמוד. המשך שימוש באתר לאחר שינוי מהווה הסכמה לתנאים
                  המעודכנים.
                </p>
              </section>
    
              <section aria-labelledby="law" style={{ marginTop: "1rem" }}>
                <h2 id="law">9) דין וסמכות שיפוט</h2>
                <p>
                  על תנאים אלה יחולו דיני מדינת ישראל, וסמכות השיפוט הבלעדית בכל
                  מחלוקת בקשר אליהם נתונה לבתי המשפט המוסמכים במחוז תל‑אביב–יפו.
                </p>
              </section>
    
              <section
                aria-labelledby="contact-details"
                style={{ marginTop: "1rem" }}
              >
                <h2 id="contact-details">פרטי התקשרות</h2>
                <p>
                  אימייל:{" "}
                  <a href="mailto:talmoshel444@gmail.com">talmoshel444@gmail.com</a>{" "}
                  · טלפון: <a href="tel:+972522233573">0522233573</a>
                </p>
              </section>
    
              <footer
                style={{ marginTop: "2rem", fontSize: "0.95rem", opacity: 0.85 }}
              >
                {/* <p>
                  הערה: תנאים אלה מנוסחים בהתבסס על ההצהרה כי אין שימוש בעוגיות או
                  בכלי אנליטיקה חיצוניים, וכי נשמר בדפדפן רק סטטוס הסכמה לתנאים. אם
                  המדיניות תשתנה בעתיד (למשל הוספת כלי ניתוח), יש לעדכן מסמך זה.
                </p> */}
              
              </footer>
            </main>
          </main>
          <FormContainer />
    </>
    
    
};

export default TermsOfUsePage;