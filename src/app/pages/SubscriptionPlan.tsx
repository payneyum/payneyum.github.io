import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Button } from "../components/ui/button";
import { Check } from "lucide-react";

export default function SubscriptionPlan() {
  const navigate = useNavigate();
  const location = useLocation();
  const signupData = location.state;
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      id: "deluxe",
      name: "Deluxe",
      price: "₱1,600",
      period: "per month",
      benefits: [
        "Unlimited skill exchanges",
        "Priority matching",
        "Video consultations",
        "Premium support",
        "Course materials access",
        "Certificate of completion",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: "₱850",
      period: "per month",
      benefits: [
        "Up to 10 skill exchanges/month",
        "Standard matching",
        "Video consultations",
        "Email support",
        "Basic materials access",
      ],
    },
    {
      id: "standard",
      name: "Standard",
      price: "₱500",
      period: "per month",
      benefits: [
        "Up to 5 skill exchanges/month",
        "Standard matching",
        "Chat support",
        "Community access",
      ],
    },
    {
      id: "session",
      name: "Per Session",
      price: "₱250",
      period: "per session",
      benefits: [
        "Pay as you go",
        "One skill exchange",
        "Chat support",
        "Flexible scheduling",
      ],
    },
  ];

  const handleContinue = () => {
    if (selectedPlan) {
      navigate("/profile-setup", { state: { ...signupData, subscriptionPlan: selectedPlan } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 text-lg">
            Select a subscription plan that fits your learning goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`bg-white rounded-xl p-6 cursor-pointer transition-all ${
                selectedPlan === plan.id
                  ? "ring-2 ring-blue-500 shadow-xl"
                  : "hover:shadow-lg"
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl mb-2">{plan.name}</h3>
                <div className="text-3xl mb-1">{plan.price}</div>
                <p className="text-gray-600 text-sm">{plan.period}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {selectedPlan === plan.id && (
                <div className="text-center text-blue-600 text-sm">
                  ✓ Selected
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleContinue}
            disabled={!selectedPlan}
            size="lg"
            className="px-12"
          >
            Continue to Profile Setup
          </Button>
        </div>
      </div>
    </div>
  );
}

