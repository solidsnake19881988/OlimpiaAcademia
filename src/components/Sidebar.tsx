import React, { useState } from 'react';
import { Menu, X, ChevronDown, Trophy, Calendar, Users, GraduationCap, ShoppingCart, Video, Newspaper } from 'lucide-react';

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  submenu?: string[];
  externalLink?: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Academia',
    icon: <GraduationCap className="w-5 h-5" />,
    submenu: ['Academias asociadas', 'Quiero ser olimpista', 'Categorías']
  },
  {
    title: 'Partidos',
    icon: <Calendar className="w-5 h-5" />,
    submenu: ['Calendario', 'Resultados', 'Clasificación']
  },
  {
    title: 'Equipo',
    icon: <Users className="w-5 h-5" />,
    submenu: ['Plantilla', 'Cuerpo Técnico', 'Juveniles']
  },
  {
    title: 'Trofeos',
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: 'Noticias',
    icon: <Newspaper className="w-5 h-5" />,
    submenu: ['Últimas Noticias', 'Comunicados', 'Entrevistas']
  },
  {
    title: 'Multimedia',
    icon: <Video className="w-5 h-5" />,
    submenu: ['Videos', 'Fotos', 'Wallpapers']
  },
  {
    title: 'Tienda Oficial',
    icon: <ShoppingCart className="w-5 h-5" />,
    externalLink: 'https://store.clubolimpia.com.py/'
  }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className={`fixed top-0 left-0 h-full bg-black text-white w-64 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } z-40`}>
        <div className="p-4">
          <div className="mb-8 text-center">
            <div className="w-32 h-32 mx-auto mb-2 relative">
              <img 
                src="/img/logodeolimpia.png"
                alt="Olimpia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold">OLIMPIA</h1>
          </div>

          <nav>
            {menuItems.map((item) => (
              <div key={item.title} className="mb-2">
                {item.externalLink ? (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-900 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => setExpandedItem(expandedItem === item.title ? null : item.title)}
                      className="w-full flex items-center justify-between p-3 hover:bg-gray-900 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      {item.submenu && (
                        <ChevronDown className={`w-5 h-5 transition-transform ${
                          expandedItem === item.title ? 'rotate-180' : ''
                        }`} />
                      )}
                    </button>
                    
                    {item.submenu && expandedItem === item.title && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block p-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;