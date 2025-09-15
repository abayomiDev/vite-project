import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

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
          <div className="grid gap-4">
            <p className="text-lg font-medium mb-2">Choose Your Plan:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded-lg hover:shadow-md cursor-pointer">
                Free Plan
              </div>
              <div className="border p-4 rounded-lg hover:shadow-md cursor-pointer">
                Pro Plan
              </div>
              <div className="border p-4 rounded-lg hover:shadow-md cursor-pointer">
                Enterprise
              </div>
            </div>
          </div>
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
              type="number"
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
              NEXT{" "}
              <span>
                {" "}
                <ArrowRight size={16} />
              </span>
            </button>
          ) : null}

          {step === 4 ? (
            <button className="bg-[#F2BA1D] flex items-center gap-2 text-white text-sm px-10 py-1 rounded-full font-medium hover:bg-yellow-600">
              Done <ArrowRight size={16} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
