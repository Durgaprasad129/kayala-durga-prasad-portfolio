
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border border-teal-500/20 hover-glow">
                <img 
                  src="/lovable-uploads/fa5fa7c8-a95e-4469-b6fa-048fd84c7ab8.png" 
                  alt="Kayala Durga Prasad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="hover-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I, Kayala Durga Prasad, have completed my B.Tech in Computer Science and Engineering 
                  at Bharath Institute of Higher Education and Research (Graduation: 2025) with a CGPA of 8.68. 
                  I specialize in full-stack web design and have a strong foundation in data science and AI.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-muted-foreground">Bharath Institute of Higher Education and Research</p>
                    <p className="text-sm text-muted-foreground">CGPA: 8.68 | Graduation: 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Values</h3>
                <div className="flex flex-wrap gap-3">
                  {['Curious Learner', 'Detail-Oriented', 'Problem Solver', 'Team Player'].map((value) => (
                    <span 
                      key={value}
                      className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm border border-teal-500/20"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
