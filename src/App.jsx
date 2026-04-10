import { useEffect, useState } from "react";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import ReferralSection from "./components/ReferralSection";
import Table from "./components/Table";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json")
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <div className="container">
      <Header />
      <StatsCards />
      <ReferralSection />
      <Table data={data} />
      <Footer />
    </div>
  );
}

export default App;