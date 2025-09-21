import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react"
export default function SetupPage() {
  const [step, setStep] = useState(1);
  const [billing, setBilling] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { name: "Free", oldPrice: 1000, price: 1000 },
    { name: "Basic", oldPrice: 1000, price: 4000 },
    { name: "Standard", oldPrice: 1000, price: 6000 },
    { name: "Premium", oldPrice: 1000, price: 8000 },
  ];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));

  const steps = [
    "Basic Information",
    "Choose Plan",
    "Select Payment",
    "Finish",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Setup your Account
        </h2>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            return (
              <div key={label} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold transition-colors 
                    ${
                      step === stepNumber
                        ? "bg-[#F2BA1D]"
                        : step > stepNumber
                        ? "bg-[#08183A]"
                        : "bg-[#08183A]"
                    }`}
                >
                  {stepNumber}
                </div>
                <p className="mt-2 text-xs text-gray-600">{label}</p>
              </div>
            );
          })}
        </div>

        {step === 1 && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Your Role"
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="border p-3 rounded-lg"
            />
          </form>
        )}

        {step === 2 && (
          <section className="flex flex-col p-6">
            <div className="flex items-end  justify-end gap-4 mb-8 mt-2">
              <button
                onClick={() => setBilling("yearly")}
                className={`border flex items-center border-yellow-500 text-sm text-black-600 px-10 py-1 rounded-full font-medium hover:bg-white ${
                  billing === "yearly"
                    ? "bg-yellow-400 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Yearly
              </button>
              <button
                onClick={() => setBilling("monthly")}
                className={`px-10 py-1 rounded-full font-medium ${
                  billing === "monthly"
                    ? "bg-yellow-400 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Monthly
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-5xl w-full">
              {plans.map((plans, idx) => {
                return (
                  <div
                    key={plans.name}
                    onClick={() => setSelectedPlan(plans.name)}
                    className={`cursor-pointer rounded-2xl shadow-md border-2 p-2 transition 
                    ${
                      selectedPlan === plans.name
                        ? "border-yellow-400"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-lg font-semibold flex justify-center text-gray-900 mb-4">
                      {plans.name}
                    </h3>
                    <ul className="text-[11px] text-gray-600 mt-3 mb-6">
                      <li className="flex gap-2 justify-start">
                        <CircleCheck className="w-3 h-3 mb-2 text-yellow-500" />
                        <span className="" >Information Feature 1</span>
                      </li>
                       <li className="flex gap-2 justify-start">
                        <CircleCheck className="w-3 h-3 mb-2 text-yellow-500" />
                        <span className="" >Information Feature 2</span>
                      </li>
                       <li className="flex gap-2 justify-start">
                        <CircleCheck className="w-3 h-3 mb-2 text-yellow-500" />
                        <span className="" >Information Feature 2</span>
                      </li>
                      <li className="flex gap-2 justify-start">
                        <CircleCheck className="w-3 h-3 mb-2 text-yellow-500" />
                        <span className="" >Information Feature 2</span>
                      </li>
                      <li className="flex gap-2 justify-start">
                        <CircleX className="w-3 h-3 text-[#08183A]" />
                        <span className="" >Information Feature 2</span>
                      </li>
                    </ul>
                    <span className="flex flex-row justify-center gap-2">
                      <span className="text-gray-400 line-through text-sm">
                        ₹{plans.oldPrice}
                      </span>
                      <span className="text-xl font-bold text-gray-900">
                        ₹{plans.price}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {step === 3 && (
          <div className="grid gap-4">
            <p className="text-lg font-medium mb-2">Select Payment Method:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg hover:shadow-md cursor-pointer">
                Credit Card
              </div>
              <div className="border p-4 rounded-lg hover:shadow-md cursor-pointer">
                PayPal
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 p-2">Almost Done</h3>
            <input
              type="text"
              placeholder="Enter your license"
              required
              className="border w-[20rem] h-10 p-3 rounded-lg"
            />
            <div className="mt-4">
              <button className="px-10 py-1 border-2 border-[#F2BA1D] text-[#F2BA1D] rounded-full text-sm hover:bg-yellow-500 hover:text-white transition">
                ACTIVATE
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Check your Mail and paste code, don't forget to check spam folder.
            </p>
          </div>
        )}
        <div className="flex justify-end gap-4 mt-8">
          {step >= 1 ? (
            <button className="border flex items-center gap-2 border-gray-400 text-sm text-gray-600 px-10 py-1 rounded-full font-medium hover:bg-gray-100">
              SKIP <ArrowRight size={16} />
            </button>
          ) : null}

          {step < 4 ? (
            <button
              onClick={nextStep}
              className=" flex items-center gap-2 bg-[#F2BA1D] text-white px-10 py-1 text-sm rounded-full font-medium"
            >
              NEXT
              <span>
                <ArrowRight size={16} />
              </span>
            </button>
          ) : null}

          {step === 4 ? (
            <button className="bg-[#F2BA1D] flex items-center gap-2 text-white text-sm px-10 py-1 rounded-full font-medium">
              Done <ArrowRight size={16} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
