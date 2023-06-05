import React, { useEffect } from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import TawkTo from "tawkto-react";
// import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
// import SectionButtons from "views/index-sections/SectionButtons.js";
// import SectionNavbars from "views/index-sections/SectionNavbars.js";
// import SectionNavigation from "views/index-sections/SectionNavigation.js";
// import SectionProgress from "views/index-sections/SectionProgress.js";
// import SectionNotifications from "views/index-sections/SectionNotifications.js";
// import SectionTypography from "views/index-sections/SectionTypography.js";
// import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
// import SectionDark from "views/index-sections/SectionDark.js";
// import SectionLogin from "views/index-sections/SectionLogin.js";
// import SectionExamples from "views/index-sections/SectionExamples.js";
// import SectionDownload from "views/index-sections/SectionDownload.js";

function Index() {
  useEffect(() => {
    var tawk = new TawkTo(`647d294c7957702c744bbffd`, `1h24eilbc`);

    tawk.onStatusChange((status) => {
      console.log(status);
    });
  }, []);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        {/* <SectionButtons />
         <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
        <DemoFooter /> */}
      </div>
    </>
  );
}

export default Index;
