import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-6 max-w-md">
        <div className="mx-auto mb-8 w-12 h-12 flex items-center justify-center">
          <div className="w-12 h-10 bg-[#F2BA1D] rounded-l-full"></div>
          <div className="w-12 h-10 bg-[#08183A] rounded-r-full"></div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Easy School Management
        </h1>

        <div className="flex justify-center space-x-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#F2BA1D]"></span>
          <span className="w-2 h-2 rounded-full bg-[#08183A]"></span>
          <span className="w-2 h-2 rounded-full bg-[#F2BA1D]"></span>
          <span className="w-2 h-2 rounded-full bg-[#08183A]"></span>
          <span className="w-2 h-2 rounded-full bg-[#F2BA1D]"></span>
        </div>

        <div className="flex items-center justify-center mb-6">
          <input
            type="checkbox"
            id="terms"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            Accept Terms & Conditions
          </label>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-1 text-sm border border-gray-400 rounded-full text-gray-700 hover:bg-gray-100">
            Already Have an Account
          </button>
          <button
            onClick={() => {
              navigate("/SetupPage");
            }}
            className={`flex items-center gap-2 px-10 rounded-full text-white ${
              accepted
                ? "bg-yellow-500 hover:bg-[#F2BA1D]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!accepted}
          >
            NEXT <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
