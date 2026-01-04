import { User, MapPin, Mail, Languages } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Iqra Irfan' },
    { icon: MapPin, label: 'Location', value: 'Khanewal, Pakistan' },
    { icon: Mail, label: 'Email', value: 'khanzadi8566@gmail.com' },
    { icon: Languages, label: 'Languages', value: 'English, Urdu, Saraiki' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title animate-fade-up">About Me</h2>

          <p className="section-subtitle mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            I am a Mathematics graduate and M.Phil student with a strong focus on Business Analytics and Data Analysis. 
            Backed by a solid mathematical foundation, I specialize in transforming data into meaningful insights to 
            support strategic, data-driven decisions. I possess strong analytical, quantitative, and problem-solving 
            skills and continuously enhance my expertise with modern analytical tools to solve real-world business challenges.
          </p>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
            {personalInfo.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-left">
                  <span className="text-primary font-medium text-sm">{item.label}</span>
                  <p className="text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CV Button */}
          <a
            href="https://puremath-dotcom.github.io/IqraIrfan/assets/cv/iqra%20irfan%20cv.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
