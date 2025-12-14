import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      title: "Premier BPO Solutions",
      description:
        "Elevate your enterprise with our exceptional outsourcing expertise. Accelerate expansion while we masterfully manage every intricate detail.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=90",
    },
    {
      title: "Transform Your Business",
      description:
        "Join forces with premier experts and accelerate your company's growth trajectory with world-class BPO services.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&h=1080&fit=crop&q=90",
    },
    {
      title: "Excellence in Every Service",
      description:
        "Discover exceptional BPO solutions empowering 1000+ enterprises across the globe with unmatched expertise.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&q=90",
    },
  ];

  const services = [
    {
      title: "Business Setup",
      tagline:
        "Introducing our Business Secretarial Service: Unlock Your Entrepreneurial Potential!",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      title: "Auditing",
      tagline:
        "Ensure the Accuracy, Transparency, and Compliance of Your Financial Records and Operations.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Trademark Registration",
      tagline:
        "Protect Your Brand's Identity with Trademark Registration: Secure, Defend, Succeed!",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    },
    {
      title: "Online Bookkeeping",
      tagline:
        "Revolutionize Your Business with Online Bookkeeping: Streamline, Simplify, Succeed!",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Payroll Management",
      tagline:
        "Effortless Payroll Management: Empower Your Business, Delight Your Employees!",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Tax Consultation",
      tagline:
        "Expert Tax Consultation: Navigate the Complexities, Maximize Your Savings!",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
  ];

  const bpoReasons = [
    {
      title: "Expert Accountants",
      description:
        "100+ Certified Accountants with years of experience in financial management and compliance.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
      points: [
        "Certified professionals",
        "Industry expertise",
        "Continuous training",
        "Proven track record",
      ],
    },
    {
      title: "Tax Consultants",
      description:
        "Strategic tax planning and consultation services to optimize your tax position and ensure compliance.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      points: [
        "Tax optimization strategies",
        "Compliance assurance",
        "Year-round support",
        "Cost savings focus",
      ],
    },
    {
      title: "Business Strategists",
      description:
        "Expert strategists helping you achieve your business goals with data-driven insights and planning.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      points: [
        "Strategic planning",
        "Growth strategies",
        "Performance analysis",
        "Goal achievement",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bpoReasons.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(heroTimer);
  }, []);

  const goToSlide = (index) => {
    setHeroSlide(index);
  };

  const nextSlide = () => {
    setHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Hero Section - Carousel */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        {/* Carousel Slides */}
        <div className="relative h-[500px] md:h-[600px]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-700/60"></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              {/* Content */}
              <div className="relative h-full flex items-center z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="transform transition-all duration-1000">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-primary-100 max-w-3xl mb-8">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/services"
                        className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg inline-block"
                      >
                        Discover Solutions
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block"
                      >
                        Begin Your Journey
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === heroSlide
                    ? "w-8 bg-white"
                    : "w-3 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are a premier Business Process Outsourcing (BPO) company with
                over 15 years of industry experience, dedicated to transforming
                how businesses operate. Our team of 100+ certified
                professionals, including expert accountants, tax consultants,
                and business strategists, work tirelessly to deliver exceptional
                results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've successfully helped over 1000+ businesses streamline their
                processes, ensure compliance, and achieve their strategic
                objectives. Combining deep industry knowledge with cutting-edge
                technology, we provide solutions that drive real business value
                and sustainable growth.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="About us"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-sm">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What BPO offer for your business */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What BPO Offers for Your Business
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
              Revolutionizing Enterprises: Fueling Excellence Through
              Innovative, Budget-Conscious Advanced Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group relative"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-base leading-relaxed italic">
                    "{service.tagline}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover Our Full Suite
            </Link>
          </div>
        </div>
      </section>

      {/* Why You Should Choose BPO */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why You Should Choose BPO?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry-leading professionals including{" "}
              <span className="font-bold text-primary-600">
                100+ Certified Accountants
              </span>
              ,{" "}
              <span className="font-bold text-primary-600">
                Elite Tax Consultants
              </span>
              , and{" "}
              <span className="font-bold text-primary-600">
                Visionary Strategists
              </span>{" "}
              dedicated to transforming your business aspirations into
              remarkable achievements.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Slider */}
            <div className="relative h-[600px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {bpoReasons.map((reason, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-5000 ${
                    index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image Side */}
                    <div className="relative h-full">
                      <img
                        src={reason.image}
                        alt={reason.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/40 to-primary-800/20"></div>
                    </div>

                    {/* Content Side */}
                    <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                          {index + 1} / {bpoReasons.length}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                          {reason.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>

                      {/* Points List */}
                      <div className="space-y-4">
                        {reason.points.map((point, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <p className="text-gray-700 text-base font-medium">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {bpoReasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-10 bg-primary-600"
                      : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + bpoReasons.length) % bpoReasons.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % bpoReasons.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Connect with us today and discover how we can revolutionize your
            business operations and drive unprecedented growth.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
