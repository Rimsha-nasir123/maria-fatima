const Education = () => {
  const educationData = [
    {
      degree: 'BS Mathematics',
      period: '2021 – 2025',
      description:
        'Developed a strong foundation in mathematics, statistics, and analytical thinking with a focus on problem-solving, data interpretation, and quantitative analysis relevant to business analytics.',
    },
    {
      degree: 'Higher Secondary School',
      period: '2018 – 2020',
      description:
        'Studied pre-engineering subjects with emphasis on mathematics and logical reasoning, strengthening analytical and critical thinking skills.',
    },
    {
      degree: 'Secondary School',
      period: '2016 – 2018',
      description:
        'Built a solid academic foundation in science and mathematics through structured coursework and academic activities.',
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-up">Education</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {educationData.map((item, index) => (
              <div
                key={item.degree}
                className="timeline-item animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="timeline-dot" />
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                  <span className="text-primary font-medium text-sm">{item.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
