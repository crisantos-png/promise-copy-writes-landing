
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      content: "Chibuzor's copy increased our conversion rate by 340%. Her understanding of our audience and ability to craft compelling messages is exceptional.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      content: "Working with Promise was a game-changer. She didn't just write copy—she understood our business goals and delivered content that actually moves the needle.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      content: "The email sequences Promise wrote for us generated over $50k in additional revenue in the first month. Her strategic approach is unmatched.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-900 to-emerald-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Clients Say About <span className="text-green-300">My Work</span>
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what business owners and marketing 
            professionals say about working with me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-green-800 border-green-700 hover:bg-green-750 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-green-100 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
