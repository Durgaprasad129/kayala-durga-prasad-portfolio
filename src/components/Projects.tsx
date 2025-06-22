
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Speech Recognition',
      description: 'NLP and Python-based voice-to-text system using PyAudio and transformers for real-time speech processing.',
      technologies: ['Python', 'NLP', 'PyAudio', 'Transformers'],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=250&fit=crop',
      github: '#'
    },
    {
      title: 'ChatGPT AI Integration',
      description: 'Google Colab + Hugging Face + ChatGPT API integration with intelligent response generation system.',
      technologies: ['Python', 'Google Colab', 'Hugging Face', 'ChatGPT API'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      github: '#'
    },
    {
      title: 'Orgo E-commerce',
      description: 'Clean online store UI built with HTML/CSS/JS featuring product listings and intuitive cart user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      github: '#'
    },
    {
      title: 'Image Encryption & Decryption',
      description: 'XOR-based secure image encryption and decryption system using secret key methodology for data protection.',
      technologies: ['Python', 'Cryptography', 'Image Processing'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=250&fit=crop',
      github: '#'
    },
    {
      title: 'BikeTaxi App',
      description: 'MERN stack ride-booking application with Mapbox integration, secure Clerk authentication, and Tailwind styling.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Mapbox', 'Clerk'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work in full-stack development, AI, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="hover-glow group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-teal-500/10 text-teal-400 rounded text-xs border border-teal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
