import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

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

        {/* Step Content */}
        <div>
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
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                🎉 Account Setup Complete!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for signing up. You can now access your dashboard.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Go to Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="border border-gray-400 text-gray-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100"
            >
              ← Back
            </button>
          ) : (
            <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg font-medium hover:bg-yellow-100">
              Skip
            </button>
          )}

          {step < 4 ? (
            <button
              onClick={nextStep}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600"
            >
              Next →
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
