
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 hover:scale-105 transition-transform duration-300">
              Hi, I'm <span className="text-blue-600 animate-pulse">Chibuzor Promise</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                I'm a copywriting specialist with a passion for turning ideas into words that work. 
                For over 3 years, I've helped businesses across various industries communicate 
                their value and connect with their ideal customers.
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                My approach isn't just about pretty words—it's about understanding your audience, 
                your goals, and crafting messages that drive real results. Whether you need 
                sales copy that converts or content that engages, I bring strategy and creativity 
                to every project.
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                When I'm not crafting compelling copy, you'll find me reading about consumer 
                psychology, analyzing successful campaigns, or helping other freelancers 
                grow their businesses.
              </p>
            </div>
            <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl transform hover:-translate-y-1"
              >
                Let's Work Together
              </Button>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-300 shadow-2xl">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Choose Me?</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Results-Driven:", desc: "Every word is written with your business goals in mind" },
                    { title: "Fast Turnaround:", desc: "Quality work delivered on time, every time" },
                    { title: "Strategic Approach:", desc: "Copy that aligns with your brand and converts" },
                    { title: "Unlimited Revisions:", desc: "We work together until you're 100% satisfied" }
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start opacity-0 animate-fade-in hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${1.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                    >
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mt-3 mr-4 flex-shrink-0 animate-pulse"></div>
                      <div>
                        <strong>{item.title}</strong> {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
