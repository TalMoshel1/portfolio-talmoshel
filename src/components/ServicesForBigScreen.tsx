import Image from "next/image";
import Link from "next/link";
import ProjectPreview from "./ProjectPerview";
import { items } from "./HorizontalScroll";

const ServicesForBigScreen = () => {
  const services = [{}];

  //       const items = [

  //   {
  //         name: "Schedule and request boxing classes",
  //     type: 'Frontend',
  //     githubUrl: 'https://github.com/TalMoshel1/BoxingSchedule',
  //     websiteUrl: 'https://scheduleandrequest-boxingclasses.onrender.com/calendar',
  //     technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
  //   },
  //     {
  //         name: "Schedule and request boxing classes",
  //     type: 'Frontend',
  //     githubUrl: 'https://github.com/TalMoshel1/BoxingSchedule',
  //     websiteUrl: 'https://scheduleandrequest-boxingclasses.onrender.com/calendar',
  //     technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
  //   },
  //     {
  //         name: "Schedule and request boxing classes",
  //     type: 'Frontend',
  //     githubUrl: 'https://github.com/TalMoshel1/BoxingSchedule',
  //     websiteUrl: 'https://scheduleandrequest-boxingclasses.onrender.com/calendar',
  //     technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
  //   },
  //       {
  //         name: "Schedule and request boxing classes",
  //     type: 'Frontend',
  //     githubUrl: 'https://github.com/TalMoshel1/BoxingSchedule',
  //     websiteUrl: 'https://scheduleandrequest-boxingclasses.onrender.com/calendar',
  //     technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
  //   },
  //       {
  //         name: "Schedule and request boxing classes",
  //     type: 'Frontend',
  //     githubUrl: 'https://github.com/TalMoshel1/BoxingSchedule',
  //     websiteUrl: 'https://scheduleandrequest-boxingclasses.onrender.com/calendar',
  //     technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
  //   },
  //       {
  //         name: "Schedule and request boxing classes",
  //     type: 'Frontend',
  //     githubUrl: 'https://github.com/TalMoshel1/BoxingSchedule',
  //     websiteUrl: 'https://scheduleandrequest-boxingclasses.onrender.com/calendar',
  //     technologies: ['React', 'TypeScript', 'CSS', 'HTML', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
  //   },

  // ];

  return (
    <>
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className="service-item"
            // style={{
            //   alignContent:'center',
            //   height:'fit-content',
            //   // minHeight: '24.35rem',
            //   border: '1px solid black',
            //   padding:'1rem',
            //   // flexGrow: '1',
            //   display: 'flex !important',
            //   flexDirection: 'column',
            //   justifyContent: 'start !important',
            //   gap:'0.75em !important'

            // }}
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              // backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <ProjectPreview {...item} key={index} view="big-screen" />
          </li>
        );
      })}
    </>
  );
};

export default ServicesForBigScreen;

//    <li
//             className="service-item"
//             style={{
//               position: "relative",
//               // height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               // minWidth: "0",
//               // overflow: "hidden",
//               border: '1px solid brown',
//             }}
//           >
//             <span style={{width: '100%', height: '100%', border: '1px solid red'}}>
//               <a href="/articles/ux-ui" style={{width: '100%', height: '100%'}}>שיפור חווית משתמש</a>
//             </span>
//             <Image
//               src={"/user.svg"}
//               alt={"user experience"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
//           {/* </AnimatedOnScrollButNotOnLoad> */}
//           {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
//           <li
//             style={{
//               position: "relative",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               // overflow: "hidden",
//               minWidth: "0",
//             }}
//           >
//             <span>בניית עמודי נחיתה שמניעים לפעולה</span>
//             <Image
//               src={"/landing-page.svg"}
//               alt={"landing-page"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
//           {/* </AnimatedOnScrollButNotOnLoad> */}

//           {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
//           <li
//             className="service-item"
//             style={{
//               position: "relative",
//               // height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minWidth: "0",
//               // overflow: "hidden",
//             }}
//           >
//             <span>תיקון באגים</span>
//             <Image
//               src={"/bug.svg"}
//               alt={"bugs"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
//           {/* </AnimatedOnScrollButNotOnLoad> */}

//           {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
//           <li
//             className="service-item"
//             style={{
//               position: "relative",
//               // height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minWidth: "0",
//               // overflow: "hidden",
//             }}
//           >
//             <span>קידום אורגני</span>
//             <Image
//               src={"/seo.svg"}
//               alt={"seo"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
//           {/* </AnimatedOnScrollButNotOnLoad> */}
//           {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
//           <li
//             className="service-item"
//             style={{
//               position: "relative",
//               // height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minWidth: "0",
//               // overflow: "hidden",
//             }}
//           >
//             <span>שיפור נגישות</span>
//             <Image
//               src={"/accessibility.svg"}
//               alt={"accessibility"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
