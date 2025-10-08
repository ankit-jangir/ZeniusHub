import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage";
import WhatsAppFAB from "./component/WhatsAppFAB";
import ScrollToTop from "./component/ScrollToTop";
import GlobalLeadForm from "./component/GlobalLeadForm";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import RouteScrollToTop from "./component/RouteScrollToTop";
import loderlogo from "../public/Img/loderlogo.png"
import useInternetStatus from "./hooks/useInternetStatus";
import OurProcess from "./pages/Our-Process";
import Clients from "./pages/Clients";
import Contactus from "./pages/Contact-us";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsCondition from "./pages/Terms-&-Condition";
import About from "./pages/About-us-child/About-Us";
import WhoWeAre from "./pages/About-us-child/Who-We-Are";
import WhatWeDo from "./pages/About-us-child/What-We-Do";
import WhyChooseUs from "./pages/About-us-child/Why-Choose-Us";
import HelpFeedback from "./pages/Help-Feedback";
import NoDataFound from "./pages/404";
import Pricing from "./pages/Pricing";
import TalkToUs from "./pages/Talk-To-Us";
import NoInternet from "./pages/Notinternet";





const App = () => {
  const [loading, setLoading] = useState(true);
  const { isOnline } = useInternetStatus();

  useEffect(() => {
    // Simulating site load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Show loader while loading
  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
        <div className="relative flex  justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
          <img
            src={loderlogo}
            alt="Loading"
            className="rounded-full h-28 w-28"
          />
        </div>
      </div>
    );
  }

  // Show no internet page when offline
  if (!isOnline) {
    return <NoInternet />;
  }

  return (
    <>
      <RouteScrollToTop behavior="smooth" />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About-Us" element={<About />} />
        <Route path="/About-Us/Who-We-Are" element={<WhoWeAre />} />
        <Route path="/About-Us/What-We-Do" element={<WhatWeDo />} />
        <Route path="/About-Us/Why-Choose-Us" element={<WhyChooseUs />} />
        <Route path="/Our-Process" element={<OurProcess />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Contact-us" element={<Contactus />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-Condition" element={<TermsCondition />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Talk-To-Us" element={<TalkToUs />} />
        <Route path="/Help-Feedback" element={<HelpFeedback />} />
        <Route path="*" element={<NoDataFound />} />

      </Routes>

      <WhatsAppFAB />
      <ScrollToTop />
      <GlobalLeadForm />
      <ToastContainer position="top-center" theme="light" />
    </>
  );
};

export default App;
