
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 animate-pulse" 
        style={{ backgroundImage: `url("${backgroundPattern}")` }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-6 animate-bounce">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" 
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span className="text-sm text-blue-200">Trusted by 50+ businesses</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
            Words That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse">Convert</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            I'm Chibuzor Promise, a copywriting specialist who transforms your ideas into 
            compelling stories that drive action and grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-300 text-blue-100 hover:bg-blue-800/50 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:border-cyan-300"
            >
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "150+", label: "Projects Completed" },
            { number: "24hr", label: "Average Response" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center opacity-0 animate-fade-in hover:scale-110 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${1.5 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2 hover:text-yellow-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
