import "./ReferralSection.css";
import { FaCopy } from "react-icons/fa";

export default function ReferralSection() {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="referral">
      <h3>Refer Friends And Earn More !!</h3>

      <div className="row">
        <div>
          <p>Your Referral Link</p>
          <div className="inputBox">
            <input value="https://gobusiness.com/referral/ABCXYZ" readOnly />
            <button onClick={() => copy("link")}>
              <FaCopy /> Copy
            </button>
          </div>
        </div>

        <div>
          <p>Your Referral Code</p>
          <div className="inputBox">
            <input value="ABCXYZ" readOnly />
            <button>
              <FaCopy /> Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}