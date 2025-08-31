import React, { useState } from 'react';
import { Book, Users, Star, Check, Menu, X, Download, Calendar, Heart, MessageCircle, ChevronRight, Mail, Lock, CreditCard, Award, TrendingUp, Settings, BarChart, Clock, FileText, Gift, Share2 } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [selectedPoll, setSelectedPoll] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [customForm, setCustomForm] = useState({
    theme: '',
    scripture: '',
    duration: '12',
    denomination: '',
    groupSize: '',
    focusAreas: [],
    additionalNotes: ''
  });

  // Sample data
  const currentStudy = {
    title: "Walking in Faith: A 12-Week Journey Through Hebrews",
    week: 3,
    totalWeeks: 12,
    description: "Explore the profound truths of Hebrews and discover what it means to live by faith.",
    releaseDate: "September 2025"
  };

  const polls = [
    {
      id: 1,
      question: "What should our next study focus on?",
      options: [
        { name: "The Gospels", votes: 234, percentage: 45 },
        { name: "Psalms & Wisdom", votes: 187, percentage: 36 },
        { name: "Paul's Letters", votes: 98, percentage: 19 }
      ],
      endDate: "September 15, 2025"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The Quill Shelf has transformed my daily devotions. The studies are thoughtful and deeply rooted in scripture.",
      rating: 5
    },
    {
      name: "David L.",
      text: "As a pastor, I use these studies for our small groups. The content is theologically sound and accessible.",
      rating: 5
    },
    {
      name: "Maria G.",
      text: "The custom study option helped our women's group dive deep into topics relevant to our journey.",
      rating: 5
    }
  ];

  const handlePromoCode = () => {
    const codes = {
      'FAITH25': 25,
      'NEWYEAR50': 10,
      'WELCOME': 20
    };
    
    if (codes[promoCode.toUpperCase()]) {
      setAppliedDiscount(codes[promoCode.toUpperCase()]);
    }
  };

  const calculatePrice = (basePrice) => {
    const discount = (basePrice * appliedDiscount) / 100;
    return (basePrice - discount).toFixed(2);
  };

  const handleVote = () => {
    if (selectedPoll) {
      setHasVoted(true);
    }
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 text-sm">
        🎉 Limited Time: Use code FAITH25 for 25% off your first month!
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Book className="h-8 w-8 text-indigo-600 mr-2" />
              <span className="font-bold text-xl">The Quill Shelf</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-indigo-600">Home</button>
              <button onClick={() => setCurrentPage('studies')} className="text-gray-700 hover:text-indigo-600">Studies</button>
              <button onClick={() => setCurrentPage('custom')} className="text-gray-700 hover:text-indigo-600">Custom Orders</button>
              <button onClick={() => setCurrentPage('polls')} className="text-gray-700 hover:text-indigo-600">Vote</button>
              <button onClick={() => setCurrentPage('pricing')} className="text-gray-700 hover:text-indigo-600">Pricing</button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <button onClick={() => setIsLoggedIn(true)} className="text-gray-700 hover:text-indigo-600">Sign In</button>
                <button onClick={() => setCurrentPage('pricing')} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  Start Free Trial
                </button>
              </>
            ) : (
              <button onClick={() => setCurrentPage('dashboard')} className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">JD</span>
                </div>
                <span>Dashboard</span>
              </button>
            )}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Deepen Your Faith Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Monthly Bible studies, devotional guides, and spiritual resources delivered to help you grow closer to God.
          </p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => setCurrentPage('pricing')} className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-colors">
              Start Your Journey
            </button>
            <button onClick={() => setCurrentPage('studies')} className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg hover:bg-indigo-50 transition-colors">
              Browse Studies
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-indigo-600" />
              <span>12,847+ Active Members</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-500" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Monthly Studies</h3>
              <p className="text-gray-600">New 12-week Bible study released every month with in-depth commentary and reflection questions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Devotional Guides</h3>
              <p className="text-gray-600">Daily devotionals to accompany each study, helping you apply God's word to your life.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Access</h3>
              <p className="text-gray-600">Join discussion groups, share insights, and grow together with fellow believers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Free Study Promotion */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gift className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">This Month's Free Study</h2>
          <p className="text-xl mb-6">Download our September study on "Finding Peace in Philippians" absolutely free!</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            <Download className="inline h-5 w-5 mr-2" />
            Download Free Study
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Studies Page
  const StudiesPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Available Studies</h1>
        
        {/* Current Study */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentStudy.title}</h2>
              <p className="text-gray-600 mb-4">{currentStudy.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Released: {currentStudy.releaseDate}
                </span>
                <span className="flex items-center">
                  <Book className="h-4 w-4 mr-1" />
                  {currentStudy.totalWeeks} Weeks
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-indigo-600">Week {currentStudy.week}</div>
              <div className="text-sm text-gray-500">of {currentStudy.totalWeeks}</div>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Continue Study
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="inline h-4 w-4 mr-2" />
                  Download PDF
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Studies */}
        <h3 className="text-xl font-semibold mb-4">Previous Studies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['August', 'July', 'June', 'May', 'April', 'March'].map((month) => (
            <div key={month} className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold mb-2">{month} 2025 Study</h4>
              <p className="text-gray-600 text-sm mb-4">The Sermon on the Mount: Living Kingdom Values</p>
              <div className="flex justify-between items-center">
                <button className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold">
                  View Study →
                </button>
                <Download className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Custom Orders Page
  const CustomOrderPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Request a Custom Study</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8">
            Need a study tailored to your group's specific needs? Fill out this form and we'll create a custom Bible study just for you.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Study Theme *</label>
              <input
                type="text"
                value={customForm.theme}
                onChange={(e) => setCustomForm({...customForm, theme: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., Faith in Times of Trial, Women of the Bible, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Scripture Focus *</label>
              <input
                type="text"
                value={customForm.scripture}
                onChange={(e) => setCustomForm({...customForm, scripture: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., Book of James, Romans 8, Psalms 23-30"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Study Duration (weeks)</label>
                <select
                  value={customForm.duration}
                  onChange={(e) => setCustomForm({...customForm, duration: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="4">4 weeks</option>
                  <option value="6">6 weeks</option>
                  <option value="8">8 weeks</option>
                  <option value="12">12 weeks</option>
                  <option value="custom">Custom duration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Denominational Preference</label>
                <select
                  value={customForm.denomination}
                  onChange={(e) => setCustomForm({...customForm, denomination: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Non-denominational</option>
                  <option value="baptist">Baptist</option>
                  <option value="methodist">Methodist</option>
                  <option value="presbyterian">Presbyterian</option>
                  <option value="lutheran">Lutheran</option>
                  <option value="catholic">Catholic</option>
                  <option value="pentecostal">Pentecostal</option>
                  <option value="episcopal">Episcopal</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Group Size</label>
              <select
                value={customForm.groupSize}
                onChange={(e) => setCustomForm({...customForm, groupSize: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select group size</option>
                <option value="individual">Individual Study</option>
                <option value="small">Small Group (2-10)</option>
                <option value="medium">Medium Group (11-25)</option>
                <option value="large">Large Group (26+)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Focus Areas (select all that apply)</label>
              <div className="space-y-2">
                {['Prayer', 'Worship', 'Service', 'Evangelism', 'Discipleship', 'Leadership', 'Family', 'Youth'].map((area) => (
                  <label key={area} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={customForm.focusAreas.includes(area)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCustomForm({...customForm, focusAreas: [...customForm.focusAreas, area]});
                        } else {
                          setCustomForm({...customForm, focusAreas: customForm.focusAreas.filter(a => a !== area)});
                        }
                      }}
                      className="mr-2"
                    />
                    <span>{area}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Additional Notes</label>
              <textarea
                value={customForm.additionalNotes}
                onChange={(e) => setCustomForm({...customForm, additionalNotes: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Tell us more about your group's needs, specific topics to cover or avoid, etc."
              />
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-indigo-900">
                <strong>Custom Study Pricing:</strong> Starting at $199 for a 4-week study. 
                Price varies based on length and complexity. We'll provide a quote within 48 hours.
              </p>
            </div>

            <button
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Submit Custom Study Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Polls Page
  const PollsPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Vote for Next Month's Study</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{polls[0].question}</h2>
            <p className="text-gray-600">Help us decide what to study next! Voting ends {polls[0].endDate}.</p>
          </div>

          {!hasVoted ? (
            <div className="space-y-4">
              {polls[0].options.map((option) => (
                <label key={option.name} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="poll"
                    value={option.name}
                    checked={selectedPoll === option.name}
                    onChange={(e) => setSelectedPoll(e.target.value)}
                    className="mr-3"
                  />
                  <span className="text-lg">{option.name}</span>
                </label>
              ))}
              
              <button
                onClick={handleVote}
                disabled={!selectedPoll}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  selectedPoll 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Cast Your Vote
              </button>
            </div>
          ) : (
            <div>
              <p className="text-green-600 font-semibold mb-6">Thank you for voting!</p>
              <div className="space-y-4">
                {polls[0].options.map((option) => (
                  <div key={option.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{option.name}</span>
                      <span className="text-sm text-gray-600">{option.votes} votes ({option.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-indigo-600 h-3 rounded-full"
                        style={{ width: `${option.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold mb-4">Suggest a Future Study Topic</h3>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your suggestion..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Pricing Page
  const PricingPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">Unlock all studies and join our growing community</p>
        </div>

        {/* Promo Code Section */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-900">Have a promo code?</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter code"
                className="flex-1 px-3 py-1 border rounded text-sm"
              />
              <button
                onClick={handlePromoCode}
                className="bg-yellow-600 text-white px-4 py-1 rounded text-sm hover:bg-yellow-700"
              >
                Apply
              </button>
            </div>
            {appliedDiscount > 0 && (
              <p className="text-green-600 text-sm mt-2">
                ✓ {appliedDiscount}% discount applied!
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Monthly Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Monthly</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${calculatePrice(4.99)}</span>
              <span className="text-gray-600">/month</span>
              {appliedDiscount > 0 && (
                <p className="text-sm text-gray-500 line-through">$4.99</p>
              )}
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>All monthly studies</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Devotional guides</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Community access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Cancel anytime</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Start Monthly
            </button>
          </div>

          {/* Annual Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-indigo-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                BEST VALUE
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Annual</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${calculatePrice(49)}</span>
              <span className="text-gray-600">/year</span>
              {appliedDiscount > 0 && (
                <p className="text-sm text-gray-500 line-through">$49.00</p>
              )}
              <p className="text-sm text-green-600 mt-1">Save $10.88 per year!</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Everything in Monthly</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>2 months free</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Early access to new studies</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Start Annual
            </button>
          </div>

          {/* Lifetime Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Lifetime</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${calculatePrice(99)}</span>
              <span className="text-gray-600"> one-time</span>
              {appliedDiscount > 0 && (
                <p className="text-sm text-gray-500 line-through">$99.00</p>
              )}
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Everything in Annual</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Lifetime access</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>All future studies</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Exclusive content</span>
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get Lifetime Access
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <Lock className="h-5 w-5 mr-2" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>12,847+ Members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Page
  const DashboardPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">My Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Current Progress */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Current Study Progress</h2>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{currentStudy.title}</span>
                  <span className="text-sm text-gray-600">Week {currentStudy.week} of {currentStudy.totalWeeks}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: `${(currentStudy.week / currentStudy.totalWeeks) * 100}%` }}
                  />
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Continue Study
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Completed Week 2 of Hebrews Study</p>
                    <p className="text-sm text-gray-600">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Downloaded August Study Guide</p>
                    <p className="text-sm text-gray-600">5 days ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Joined "Women of Faith" discussion group</p>
                    <p className="text-sm text-gray-600">1 week ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Studies Completed</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <FileText className="h-8 w-8 text-indigo-200" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Days Streak</p>
                    <p className="text-2xl font-bold">47</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-200" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Community Posts</p>
                    <p className="text-2xl font-bold">28</p>
                  </div>
                  <MessageCircle className="h-8 w-8 text-purple-200" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Friends Referred</p>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscription Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Subscription</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-medium">Annual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Renews:</span>
                  <span className="font-medium">Jan 1, 2026</span>
                </div>
              </div>
              <button className="w-full mt-4 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Manage Subscription
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full text-left flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span>Browse All Studies</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="w-full text-left flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span>Join Discussion Group</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="w-full text-left flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span>Download Resources</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="w-full text-left flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span>Account Settings</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Referral Program */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-lg p-6">
              <Gift className="h-8 w-8 mb-2" />
              <h2 className="text-xl font-semibold mb-2">Refer a Friend</h2>
              <p className="text-sm mb-4 opacity-90">Get 1 month free for each friend who subscribes!</p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                Share Referral Link
              </button>
              <p className="text-xs mt-3 opacity-75">You've earned 2 free months so far!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main render logic
  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'studies': return <StudiesPage />;
      case 'custom': return <CustomOrderPage />;
      case 'polls': return <PollsPage />;
      case 'pricing': return <PricingPage />;
      case 'dashboard': return <DashboardPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => {setCurrentPage('home'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-indigo-600">Home</button>
            <button onClick={() => {setCurrentPage('studies'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-indigo-600">Studies</button>
            <button onClick={() => {setCurrentPage('custom'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-indigo-600">Custom Orders</button>
            <button onClick={() => {setCurrentPage('polls'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-indigo-600">Vote</button>
            <button onClick={() => {setCurrentPage('pricing'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-indigo-600">Pricing</button>
            {!isLoggedIn ? (
              <>
                <button onClick={() => {setIsLoggedIn(true); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-indigo-600">Sign In</button>
                <button onClick={() => {setCurrentPage('pricing'); setMobileMenuOpen(false);}} className="block w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  Start Free Trial
                </button>
              </>
            ) : (
              <button onClick={() => {setCurrentPage('dashboard'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 hover:text-indigo-600">Dashboard</button>
            )}
          </div>
        </div>
      )}

      {renderPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Book className="h-8 w-8 text-indigo-400 mr-2" />
                <span className="font-bold text-xl">The Quill Shelf</span>
              </div>
              <p className="text-gray-400">Deepening faith through guided Bible study.</p>
              <div className="flex space-x-4 mt-4">
                <Award className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Heart className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <MessageCircle className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">All Studies</a></li>
                <li><a href="#" className="hover:text-white">Free Samples</a></li>
                <li><a href="#" className="hover:text-white">Study Guides</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Discussion Groups</a></li>
                <li><a href="#" className="hover:text-white">Prayer Requests</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Stay Connected</h3>
              <p className="text-gray-400 mb-4">Join our newsletter for weekly encouragement</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 rounded text-white placeholder-gray-500"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Join 12,847+ subscribers</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 The Quill Shelf. All rights reserved. | 
              <a href="#" className="hover:text-white"> Privacy Policy</a> | 
              <a href="#" className="hover:text-white"> Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;