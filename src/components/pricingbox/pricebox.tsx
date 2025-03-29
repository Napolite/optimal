function PriceBox() {
  const plans = [
    {
      name: "Basic Plan",
      pricing: {
        monthly: 79.99,
        quarterly: 239.97,
        yearly: 959.88,
      },
      perks: [
        "Intelligent Data Processing for small datasets",
        "AI-Powered Chatbots with basic functionalities",
        "Limited Sentiment Analysis (up to 500 entries/month)",
        "Standard support and onboarding",
      ],
    },
    {
      name: "VIP Plan",
      pricing: {
        monthly: 119.99,
        quarterly: 359.97,
        yearly: 1439.88,
      },
      perks: [
        "Advanced Data Processing with real-time analytics",
        "AI-Powered Chatbots with customization options",
        "Fraud Detection capabilities",
        "Sentiment Analysis for medium-scale projects (up to 2,000 entries/month)",
        "Priority email support",
      ],
    },
    {
      name: "Premium Plan",
      pricing: {
        monthly: 169.69,
        quarterly: 509.07,
        yearly: 2036.28,
      },
      perks: [
        "Unlimited Data Processing with predictive analytics",
        "AI-Powered Chatbots with multilingual support",
        "Fraud Detection with advanced alerting",
        "Comprehensive Sentiment Analysis (unlimited entries)",
        "Image Recognition and Adaptive Learning Models",
      ],
    },
  ];

  return <></>;
}

export default PriceBox;
