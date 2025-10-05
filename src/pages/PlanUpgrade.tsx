import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Users, 
  Clock,
  MessageSquare,
  BarChart3,
  Award,
  TrendingUp
} from 'lucide-react';

const PlanUpgrade: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      icon: <Users className="w-6 h-6" />,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for trying out Rretoriq',
      features: [
        '3 practice sessions per day',
        'Basic AI feedback',
        'IELTS Speaking practice',
        'Progress tracking',
        'Community support'
      ],
      limitations: [
        'Limited question bank',
        'No interview practice',
        'Basic reports only',
        'No priority support'
      ],
      buttonText: 'Current Plan',
      buttonVariant: 'secondary',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: <Star className="w-6 h-6" />,
      price: { monthly: 29, yearly: 290 },
      description: 'Most popular choice for serious learners',
      features: [
        'Unlimited practice sessions',
        'Advanced AI feedback with scoring',
        'All practice types (IELTS + Interview)',
        'Detailed analytics & reports',
        'Priority email support',
        'Custom study plans',
        'Mobile app access',
        'Offline practice materials'
      ],
      limitations: [],
      buttonText: 'Upgrade to Premium',
      buttonVariant: 'primary',
      popular: true,
      savings: billingCycle === 'yearly' ? '17% savings' : null
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: <Crown className="w-6 h-6" />,
      price: { monthly: 99, yearly: 990 },
      description: 'For teams and educational institutions',
      features: [
        'Everything in Premium',
        'Team management dashboard',
        'Bulk user management',
        'Custom branding options',
        'API access for integrations',
        'Dedicated account manager',
        '24/7 phone & chat support',
        'Custom content creation',
        'Advanced reporting & analytics',
        'SSO & security integrations'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonVariant: 'primary',
      popular: false,
      savings: billingCycle === 'yearly' ? '17% savings' : null
    }
  ];

  const features = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: 'AI-Powered Practice',
      description: 'Get instant feedback on pronunciation, fluency, and content quality'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Progress Analytics',
      description: 'Track your improvement with detailed performance insights'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Flexible Scheduling',
      description: 'Practice anytime, anywhere with our mobile and web apps'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Proven Results',
      description: '95% of users see improvement within the first month'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'IELTS Test Taker',
      rating: 5,
      comment: 'Improved my speaking score from 6.5 to 8.0 in just 2 months!'
    },
    {
      name: 'Raj Patel',
      role: 'Software Engineer',
      comment: 'The interview practice helped me land my dream job at Google.'
    },
    {
      name: 'Maria Garcia',
      role: 'University Student',
      comment: 'Premium features made all the difference in my preparation.'
    }
  ];

  const formatPrice = (price: number, cycle: 'monthly' | 'yearly') => {
    if (price === 0) return 'Free';
    if (cycle === 'yearly') return `$${price}/year`;
    return `$${price}/month`;
  };

  const getMonthlyEquivalent = (yearlyPrice: number) => {
    return Math.round((yearlyPrice / 12) * 100) / 100;
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-3 sm:mb-4 px-4">
            Choose Your Plan
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Unlock your full potential with our comprehensive AI-powered communication training platform.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-1 text-xs text-green-600 font-semibold">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white border rounded-xl p-6 transition-all duration-200 ${
                plan.popular
                  ? 'border-black shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  plan.popular ? 'bg-black' : 'bg-gray-100'
                }`}>
                  <div className={plan.popular ? 'text-white' : 'text-gray-600'}>
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900">
                    {formatPrice(plan.price[billingCycle], billingCycle)}
                  </div>
                  {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                    <div className="text-sm text-gray-500">
                      ${getMonthlyEquivalent(plan.price.yearly)}/month billed annually
                    </div>
                  )}
                  {plan.savings && (
                    <div className="text-sm text-green-600 font-medium">{plan.savings}</div>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-400">{limitation}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  selectedPlan === plan.id
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : plan.buttonVariant === 'primary'
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Features Overview */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900 text-center mb-6 sm:mb-8 px-4">
            Why Upgrade to Premium?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-gray-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900 text-center mb-6 sm:mb-8 px-4">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {testimonial.rating && (
                    <div className="flex space-x-1 mr-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-medium text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is there a refund policy?</h3>
              <p className="text-gray-600 text-sm">We offer a 30-day money-back guarantee for all paid plans if you're not satisfied with the service.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer student discounts?</h3>
              <p className="text-gray-600 text-sm">Yes! Students can get 30% off any paid plan with valid student ID verification.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods are accepted?</h3>
              <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, and UPI payments. All transactions are secure and encrypted.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanUpgrade;