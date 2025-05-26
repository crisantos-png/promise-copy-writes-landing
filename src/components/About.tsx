
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Hi, I'm <span className="text-blue-600">Chibuzor Promise</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a copywriting specialist with a passion for turning ideas into words that work. 
                For over 3 years, I've helped businesses across various industries communicate 
                their value and connect with their ideal customers.
              </p>
              <p>
                My approach isn't just about pretty words—it's about understanding your audience, 
                your goals, and crafting messages that drive real results. Whether you need 
                sales copy that converts or content that engages, I bring strategy and creativity 
                to every project.
              </p>
              <p>
                When I'm not crafting compelling copy, you'll find me reading about consumer 
                psychology, analyzing successful campaigns, or helping other freelancers 
                grow their businesses.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
              >
                Let's Work Together
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-full opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Why Choose Me?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong>Results-Driven:</strong> Every word is written with your business goals in mind
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong>Fast Turnaround:</strong> Quality work delivered on time, every time
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong>Strategic Approach:</strong> Copy that aligns with your brand and converts
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong>Unlimited Revisions:</strong> We work together until you're 100% satisfied
                    </div>
                  </li>
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
