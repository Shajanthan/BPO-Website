import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle]);
  const articles = [
    {
      title: "Understanding Business Registration Requirements",
      excerpt:
        "A comprehensive guide to business registration processes, required documents, and compliance requirements for new businesses.",
      fullDescription:
        "Starting a new business can be overwhelming, especially when it comes to understanding all the registration requirements. This comprehensive guide covers everything you need to know about business registration, including the different types of business entities, required documentation, compliance requirements, and step-by-step processes. We'll walk you through choosing the right business structure, preparing necessary documents, understanding local and federal regulations, and ensuring your business is properly registered and compliant from day one. Whether you're starting a sole proprietorship, partnership, LLC, or corporation, this guide provides the essential information to get your business up and running legally and efficiently.",
      category: "Business Setup",
      date: "March 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      title: "VAT Registration: What You Need to Know",
      excerpt:
        "Learn about VAT registration thresholds, deadlines, and the step-by-step process to ensure your business is compliant.",
      fullDescription:
        "Value Added Tax (VAT) registration is a crucial requirement for many businesses. This detailed guide explains VAT registration thresholds, when you need to register, the registration process, and ongoing compliance requirements. Learn about VAT rates, filing deadlines, record-keeping obligations, and how to handle VAT returns. We also cover common mistakes to avoid and best practices for managing your VAT obligations effectively. Whether you're approaching the registration threshold or already registered, this guide provides valuable insights to ensure your business remains compliant and takes advantage of available VAT benefits.",
      category: "Tax & Compliance",
      date: "March 10, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    },
    {
      title: "Tax Planning Strategies for Small Businesses",
      excerpt:
        "Effective tax planning strategies to minimize your tax liability while staying compliant with all regulations.",
      fullDescription:
        "Effective tax planning is essential for small business success. This comprehensive guide covers proven strategies to minimize your tax liability while maintaining full compliance. Learn about deductible business expenses, tax credits available to small businesses, retirement planning options, timing strategies for income and expenses, and how to structure your business for optimal tax benefits. We also discuss quarterly tax payments, estimated tax calculations, and working with tax professionals. Discover how proper tax planning can significantly impact your bottom line and help your business grow more efficiently.",
      category: "Tax & Compliance",
      date: "March 5, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    },
    {
      title: "Modern Payroll Management Best Practices",
      excerpt:
        "Discover best practices for managing payroll efficiently, including automation tools and compliance considerations.",
      fullDescription:
        "Payroll management is one of the most critical functions for any business with employees. This guide covers modern payroll management best practices, including automation tools, compliance requirements, and efficiency strategies. Learn about payroll software options, direct deposit setup, tax withholding calculations, employee classification, overtime calculations, and record-keeping requirements. We also discuss how to handle payroll errors, manage employee benefits deductions, and ensure compliance with labor laws. Discover how automation can save time, reduce errors, and improve your payroll process while maintaining accuracy and compliance.",
      category: "HR & Payroll",
      date: "February 28, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Digital Bookkeeping: Moving to the Cloud",
      excerpt:
        "Why cloud-based bookkeeping is the future and how to transition your business to digital financial management.",
      fullDescription:
        "The shift to cloud-based bookkeeping is transforming how businesses manage their finances. This guide explains the benefits of digital bookkeeping, including real-time access, automated backups, collaboration capabilities, and integration with other business tools. Learn how to choose the right cloud accounting software, migrate from traditional methods, set up your chart of accounts, and train your team. We cover security considerations, data privacy, backup strategies, and how cloud bookkeeping can improve your financial reporting and decision-making. Discover why making the switch to digital bookkeeping is essential for modern businesses.",
      category: "Finance",
      date: "February 20, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "The Importance of Regular Business Audits",
      excerpt:
        "Understanding how regular audits can help identify issues early and improve your business operations.",
      fullDescription:
        "Regular business audits are essential for maintaining financial integrity and operational efficiency. This guide explains the different types of audits, when to conduct them, and how they can benefit your business. Learn about financial audits, operational audits, compliance audits, and internal control reviews. We cover how audits can identify inefficiencies, prevent fraud, ensure compliance, and provide valuable insights for business improvement. Discover how to prepare for audits, work with auditors, and implement audit recommendations. Understand why regular audits are an investment in your business's long-term success and financial health.",
      category: "Finance",
      date: "February 15, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Protecting Your Brand: Trademark Registration Guide",
      excerpt:
        "A step-by-step guide to trademark registration and how it protects your intellectual property and brand identity.",
      fullDescription:
        "Trademark registration is crucial for protecting your brand identity and intellectual property. This comprehensive guide walks you through the trademark registration process, from conducting a trademark search to filing your application and maintaining your registration. Learn about the different types of trademarks, what can be trademarked, the benefits of registration, and how to enforce your trademark rights. We cover common pitfalls to avoid, working with trademark attorneys, international trademark considerations, and renewal requirements. Discover how proper trademark protection can safeguard your brand and provide valuable business assets.",
      category: "Legal",
      date: "February 10, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    },
    {
      title: "Year-End Financial Checklist for Businesses",
      excerpt:
        "Essential tasks to complete before the end of the financial year to ensure smooth operations and compliance.",
      fullDescription:
        "The end of the financial year is a critical time for businesses to review, reconcile, and prepare for the upcoming year. This comprehensive checklist covers all essential tasks, including financial statement preparation, tax planning, inventory counts, accounts receivable review, vendor reconciliation, employee documentation, and compliance filings. Learn about depreciation schedules, bad debt write-offs, bonus accruals, and year-end adjustments. We also cover preparing for tax season, setting goals for the new year, and ensuring all regulatory requirements are met. Follow this checklist to ensure a smooth year-end process and start the new year on the right foot.",
      category: "Finance",
      date: "February 5, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ];

  const categories = [
    "All",
    "Business Setup",
    "Tax & Compliance",
    "HR & Payroll",
    "Finance",
    "Legal",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    // Sort by date (newest first)
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop"
            alt="Resources background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Business Intelligence & Resources
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Access cutting-edge articles, expert guidance, and strategic
            insights designed to propel your business forward
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-600 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-white bg-primary-600 px-3 py-1 rounded-full backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs text-white bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group-hover:gap-2 gap-1"
                    >
                      Read More
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
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block text-xs font-semibold text-white bg-primary-600 px-3 py-1 rounded-full mb-2">
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6 text-sm text-gray-500 border-b pb-4">
                <span>{selectedArticle.date}</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  {selectedArticle.excerpt}
                </p>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {selectedArticle.fullDescription}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
