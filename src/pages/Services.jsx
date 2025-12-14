import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Business Registration",
      description:
        "Comprehensive support for business registration, encompassing seamless company formation, meticulous documentation, and full regulatory compliance. We expertly manage all administrative tasks, enabling you to concentrate on building your enterprise.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      features: [
        "Company formation",
        "Documentation support",
        "Compliance assistance",
        "Fast processing",
      ],
    },
    {
      title: "VAT Registration",
      description:
        "Specialized expertise guiding you through the VAT registration journey, guaranteeing complete adherence to all regulatory mandates and critical timelines.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      features: [
        "VAT application support",
        "Document preparation",
        "Compliance checking",
        "Ongoing support",
      ],
    },
    {
      title: "Tax Consultation",
      description:
        "Strategic tax consultation and advanced planning services designed to maximize your tax efficiency while maintaining impeccable compliance with all fiscal regulations.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      features: [
        "Tax planning",
        "Compliance review",
        "Optimization strategies",
        "Expert advice",
      ],
    },
    {
      title: "Payroll Management",
      description:
        "End-to-end payroll solutions featuring precise salary processing, intelligent tax deductions, and comprehensive statutory compliance oversight.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: [
        "Salary processing",
        "Tax deductions",
        "Statutory compliance",
        "Payroll reports",
      ],
    },
    {
      title: "Online Bookkeeping",
      description:
        "Cutting-edge digital bookkeeping powered by advanced cloud technology, ensuring your financial documentation remains flawlessly accurate and perpetually current.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: [
        "Cloud-based system",
        "Real-time updates",
        "Financial reporting",
        "Data security",
      ],
    },
    {
      title: "Auditing",
      description:
        "Rigorous auditing services delivering unparalleled financial precision, regulatory compliance, and strategic insights to enhance operational excellence.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: [
        "Financial audits",
        "Compliance audits",
        "Internal audits",
        "Audit reports",
      ],
    },
    {
      title: "Trademark Registration",
      description:
        "Full-spectrum trademark registration solutions safeguarding your brand's unique identity and fortifying your intellectual property portfolio.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      features: [
        "Trademark search",
        "Application filing",
        "Registration support",
        "Renewal services",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=600&fit=crop"
            alt="Services background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Exceptional BPO solutions meticulously crafted to optimize and 
            accelerate your business performance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="text-primary-600 mr-3 font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-2 gap-1"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seeking Bespoke Solutions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We deliver customized services precisely aligned with your unique 
            business objectives. Reach out to explore how we can elevate your operations.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
