
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Sales Copy",
      description: "High-converting sales pages, product descriptions, and promotional content that turns visitors into customers.",
      features: ["Landing Pages", "Product Copy", "Sales Emails", "Ad Copy"]
    },
    {
      title: "Content Marketing",
      description: "Engaging blog posts, articles, and web content that builds authority and drives organic traffic.",
      features: ["Blog Posts", "Website Copy", "SEO Content", "Social Media"]
    },
    {
      title: "Email Marketing",
      description: "Compelling email sequences and newsletters that nurture leads and boost customer retention.",
      features: ["Email Sequences", "Newsletters", "Automation", "Welcome Series"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 hover:scale-105 transition-transform duration-300">
            Services That <span className="text-green-600 animate-pulse">Deliver Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From persuasive sales copy to engaging content marketing, I help businesses 
            communicate their value and connect with their ideal customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white group opacity-0 animate-fade-in hover:border-green-200"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-300 transform hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors duration-300 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
