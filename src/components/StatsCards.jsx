import "./StatsCards.css";
import {
  FaDollarSign,
  FaPercent,
  FaUsers,
  FaHourglassHalf,
  FaMoneyBill,
  FaHome,
  FaGlobe,
  FaUniversity
} from "react-icons/fa";

const stats = [
  { title: "Total Balance", value: "$9,568.00", icon: <FaDollarSign /> },
  { title: "Discount Percentage", value: "60%", icon: <FaPercent /> },
  { title: "Total Referral", value: "300", icon: <FaUsers /> },
  { title: "Discount Amount", value: "$300", icon: <FaHourglassHalf /> },
  { title: "Commission Amount", value: "$465.00", icon: <FaMoneyBill /> },
  { title: "Total Earning", value: "$158.00", icon: <FaHome /> },
  { title: "Commission Discount", value: "40%", icon: <FaGlobe /> },
  { title: "Total Bank Transfer", value: "$534.00", icon: <FaUniversity /> },
];

export default function StatsCards() {
  return (
    <div className="cards">
      {stats.map((item, index) => (
        <div key={index} className="card">
          <div className="iconCircle">
            {item.icon}
          </div>

          <div>
            <p>{item.value}</p>
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}