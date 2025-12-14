import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every service we deliver, ensuring the highest standards of quality and professionalism.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative approaches to solve complex business challenges.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices, building trust with every interaction.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
    },
    {
      title: "Client-Centric",
      description: "Your success is our priority. We tailor our services to meet your unique needs and exceed expectations.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",
    },
  ];

  const stats = [
    { number: "1000+", label: "Satisfied Clients" },
    { number: "100+", label: "Expert Professionals" },
    { number: "15+", label: "Years of Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=600&fit=crop"
            alt="About us background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Empowering businesses worldwide with exceptional BPO solutions and 
            unparalleled expertise
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are a premier Business Process Outsourcing (BPO) company dedicated 
                to transforming how businesses operate. With over 15 years of industry 
                experience, we have established ourselves as a trusted partner for 
                companies seeking to optimize their operations, reduce costs, and 
                accelerate growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our team of 100+ certified professionals, including expert accountants, 
                tax consultants, and business strategists, work tirelessly to deliver 
                exceptional results. We combine deep industry knowledge with cutting-edge 
                technology to provide solutions that drive real business value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From startups to established enterprises, we've helped over 1000+ businesses 
                streamline their processes, ensure compliance, and achieve their strategic 
                objectives. Your success is our mission, and we're committed to being your 
                reliable partner every step of the way.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower businesses worldwide by delivering exceptional BPO services 
                  that drive operational excellence, foster innovation, and create sustainable 
                  growth. We are committed to providing cost-effective, cutting-edge solutions 
                  that enable our clients to focus on their core competencies while we handle 
                  their business processes with precision and expertise.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become the global leader in BPO services, recognized for our unwavering 
                  commitment to excellence, innovation, and client success. We envision a future 
                  where businesses of all sizes can leverage world-class outsourcing solutions 
                  to achieve their ambitious goals, transform their operations, and make a 
                  lasting impact in their industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">
                      {value.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business operations and drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

