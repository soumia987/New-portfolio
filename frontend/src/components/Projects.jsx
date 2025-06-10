import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Code, 
  ShoppingCart, 
  ChefHat, 
  BookOpen, 
  User, 
  Calendar,
  Target,
  Users,
  Laptop
} from 'lucide-react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Site E-commerce',
      description: 'Développement en équipe d\'une plateforme e-commerce complète avec système de paiement, gestion des stocks et interface administrateur.',
      longDescription: 'Projet collaboratif de développement d\'un site e-commerce moderne avec toutes les fonctionnalités essentielles : authentification utilisateur, panier d\'achat, système de paiement sécurisé, gestion des commandes et interface d\'administration complète.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      icon: ShoppingCart,
      features: [
        'Authentification utilisateur sécurisée',
        'Panier d\'achat dynamique',
        'Système de paiement intégré',
        'Interface d\'administration',
        'Gestion des stocks en temps réel'
      ],
      status: 'Terminé',
      teamSize: 4,
      duration: '3 mois',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'CookingApp - Site de Recettes',
      description: 'Application web de recettes de cuisine avec interface utilisateur moderne, recherche avancée et système de favoris.',
      longDescription: 'Application web dédiée aux amateurs de cuisine, permettant de découvrir, sauvegarder et partager des recettes. Interface intuitive avec système de recherche par ingrédients et catégories.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'API'],
      category: 'frontend',
      icon: ChefHat,
      features: [
        'Catalogue de recettes interactif',
        'Recherche par ingrédients',
        'Système de favoris',
        'Interface responsive',
        'Filtres par catégories'
      ],
      status: 'Terminé',
      teamSize: 1,
      duration: '2 mois',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'Blog Personnel',
      description: 'Blog personnel avec interface utilisateur dynamique, système de commentaires et gestion de contenu.',
      longDescription: 'Blog personnel développé avec une interface moderne et dynamique, permettant la publication d\'articles, la gestion des commentaires et l\'interaction avec les lecteurs.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      category: 'frontend',
      icon: BookOpen,
      features: [
        'Interface utilisateur dynamique',
        'Système de commentaires',
        'Gestion de contenu',
        'Design responsive',
        'Navigation fluide'
      ],
      status: 'Terminé',
      teamSize: 1,
      duration: '1 mois',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Portfolio Personnel',
      description: 'Portfolio en ligne pour présenter mes compétences, projets et expériences professionnelles avec un design moderne.',
      longDescription: 'Portfolio professionnel développé pour présenter mes compétences techniques, mes projets réalisés et mon parcours. Design moderne et responsive avec animations fluides.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
      category: 'frontend',
      icon: User,
      features: [
        'Design moderne et responsive',
        'Animations fluides',
        'Présentation des projets',
        'Formulaire de contact',
        'Navigation smooth scroll'
      ],
      status: 'En cours',
      teamSize: 1,
      duration: '1 mois',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      gradient: 'from-green-500 to-blue-500'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-100 text-blue-800',
      'Node.js': 'bg-green-100 text-green-800',
      'MongoDB': 'bg-green-100 text-green-800',
      'Express': 'bg-gray-100 text-gray-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
      'HTML': 'bg-orange-100 text-orange-800',
      'CSS': 'bg-blue-100 text-blue-800',
      'API': 'bg-purple-100 text-purple-800',
      'Stripe': 'bg-indigo-100 text-indigo-800',
      'Local Storage': 'bg-gray-100 text-gray-800',
      'Vite': 'bg-purple-100 text-purple-800'
    };
    return colors[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets récents, allant du développement frontend aux applications full-stack
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Terminé' 
                          ? 'bg-green-500/20 text-green-100' 
                          : 'bg-yellow-500/20 text-yellow-100'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-white/90 leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  {/* Project Info */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                      <p className="text-sm font-medium text-gray-900">{project.duration}</p>
                      <p className="text-xs text-gray-600">Durée</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                      <p className="text-sm font-medium text-gray-900">{project.teamSize} {project.teamSize > 1 ? 'personnes' : 'personne'}</p>
                      <p className="text-xs text-gray-600">Équipe</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Target className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                      <p className="text-sm font-medium text-gray-900 capitalize">{project.category}</p>
                      <p className="text-xs text-gray-600">Type</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Fonctionnalités principales</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="flex items-center text-gray-500 text-sm">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                          +{project.features.length - 3} autres fonctionnalités
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code Source
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le Projet
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <Laptop className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Intéressé par mes projets ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ces projets représentent mon évolution en tant que développeuse. 
              Je suis toujours à la recherche de nouveaux défis et d'opportunités pour grandir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Discutons de votre projet
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Voir tous mes projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;