import React from 'react';
import { 
  User, 
  Heart, 
  Target, 
  BookOpen, 
  Award,
  Calendar,
  MapPin,
  GraduationCap
} from 'lucide-react';

function About() {
  const education = [
    {
      year: "En cours",
      title: "Formation en Programmation (JavaScript)",
      institution: "École Nationale Ahmed Elhansali (ENAA)",
      description: "Formation intensive en développement web moderne"
    },
    {
      year: "2022",
      title: "Licence Biomédicale",
      institution: "Faculté des Sciences et Techniques Beni Mellal",
      description: "Formation scientifique approfondie"
    },
    {
      year: "2021",
      title: "DEUST",
      institution: "FST de Beni Mellal",
      description: "Diplôme d'études universitaires scientifiques et techniques"
    },
    {
      year: "2018",
      title: "Bac Scientifique (Spécialité SVT)",
      institution: "Lycée Zerktouni",
      description: "Baccalauréat scientifique avec mention"
    }
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", percentage: 100 },
    { name: "Français", level: "Avancé", percentage: 90 },
    { name: "Anglais", level: "Avancé", percentage: 85 },
    { name: "Allemand", level: "Notions de base", percentage: 30 }
  ];

  const personalSkills = [
    { skill: "Dynamique", icon: "⚡" },
    { skill: "Active", icon: "🚀" },
    { skill: "Esprit d'équipe", icon: "🤝" },
    { skill: "Sens de l'organisation", icon: "📋" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Soumia Iradi</h3>
                <p className="text-lg text-blue-600 font-semibold">Développeuse Full Stack</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
                <h4 className="text-xl font-semibold text-gray-900">Ma Passion</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Passionnée par les technologies et déterminée à renforcer mes compétences en programmation, 
                je suis une personne sérieuse, curieuse et motivée. Je suis à la recherche d'une opportunité 
                professionnelle me permettant de mettre en œuvre mes connaissances, d'apprendre concrètement 
                sur le terrain, et de m'impliquer activement dans des projets d'équipe au sein d'un 
                environnement technique stimulant.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Informations de Contact
              </h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <span className="w-24 font-medium">Email:</span>
                  <span>soumia.iradi2001@gmail.com</span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 font-medium">Téléphone:</span>
                  <span>+212 681 440 269</span>
                </p>
                <p className="flex items-center">
                  <span className="w-24 font-medium">Adresse:</span>
                  <span>Lotissement Chetbi, N°43</span>
                </p>
              </div>
            </div>
          </div>

          {/* Personal Skills */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-purple-600" />
                Compétences Personnelles
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {personalSkills.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="font-medium text-gray-800">{item.skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Langues
              </h4>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{lang.name}</span>
                      <span className="text-sm text-gray-600">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
            Formation
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {edu.year === "En cours" ? (
                      <Calendar className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.title}</h4>
                    <p className="text-purple-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Software Skills */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Logiciels Maîtrisés
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Word', 'Excel', 'PowerPoint', 'Canva'].map((software, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-800">{software}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;