
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business with Powerful Copy?
        </h2>
        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project and create copy that connects with your audience 
          and drives the results you're looking for.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl"
            onClick={() => window.open('mailto:depromisesignature47@gmail.com?subject=Project Inquiry', '_blank')}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-6 text-lg rounded-full"
          >
            Schedule a Call
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-green-200 mb-2">Get in touch directly:</p>
          <a 
            href="mailto:depromisesignature47@gmail.com" 
            className="text-lg font-semibold text-white hover:text-green-200 transition-colors"
          >
            depromisesignature47@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
