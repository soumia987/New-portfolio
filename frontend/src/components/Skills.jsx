import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Palette, 
  Cloud,
  GitBranch,
  Shield
} from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Base de données',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'Ionic', 'PWA', 'App Store', 'Play Store'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Design',
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX', 'Prototyping', 'Wireframes'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Outils',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jira', 'Slack'],
      color: 'from-gray-500 to-slate-500'
    },
    {
      title: 'Sécurité',
      icon: Shield,
      skills: ['JWT', 'OAuth', 'HTTPS', 'CORS', 'Validation', 'Encryption'],
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise technique diversifiée pour créer des solutions complètes et innovantes
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const dotsFilled = Math.floor(Math.random() * 2) + 3;
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="text-gray-700 font-medium">{skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < dotsFilled
                                  ? `bg-gradient-to-r ${category.color}`
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Toujours en apprentissage
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              La technologie évolue rapidement, et je m'engage à rester à la pointe en 
              apprenant continuellement de nouvelles technologies et en perfectionnant mes compétences existantes. 
              Chaque projet est une opportunité d'innovation et d'amélioration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
