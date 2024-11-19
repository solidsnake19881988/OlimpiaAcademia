import React from 'react';
import NewsCard from './NewsCard';
import FeaturedNews from './FeaturedNews';
import Footer from './Footer';

const MainContent = () => {
  return (
    <main className="p-6 lg:p-8">
      <div className="space-y-6">
        <FeaturedNews
          image="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80"
          title="Olimpia, campeón otra vez:"
          description="El Decano conquistó la estrella 47 en Pedro Juan Caballero"
          tag="Último Momento"
        />

        <div className="flex flex-col space-y-6">
          <NewsCard
            image="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80"
            date="12 Mar 2024"
            title="Nuevo fichaje estrella"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
            imageAlt="Soccer Training"
            fullContent="El Club Olimpia se complace en anunciar la incorporación de nuestro nuevo delantero estrella. Después de intensas negociaciones, hemos logrado asegurar la firma de uno de los talentos más prometedores del fútbol sudamericano. El jugador, que ha demostrado su valía en múltiples competiciones internacionales, se une a nuestras filas con un contrato de tres años. Su llegada fortalecerá significativamente nuestro ataque y nos ayudará a mantener nuestra posición como uno de los equipos más competitivos de la región. El nuevo fichaje se incorporará al equipo en los próximos días y estará disponible para el próximo partido de liga."
          />

          <NewsCard
            image="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80"
            date="12 Mar 2024"
            title="¡FORMÁ PARTE DEL CLUB OLIMPIA!"
            description="Unirse a Olimpia es más que jugar al fútbol; es luchar con pasión, crecer cada día y dejar huella en la historia. Si tenés el valor y la disciplina, este es tu lugar. ¡Elegí la grandeza y hacé que cada entrenamiento cuente!"
            imageAlt="Soccer Interview"
            fullContent="El Club Olimpia abre sus puertas a nuevos talentos. Nuestro programa de desarrollo juvenil busca formar no solo excelentes futbolistas, sino también grandes personas. Ofrecemos:

            - Entrenamiento profesional con técnicos certificados
            - Instalaciones de primer nivel
            - Seguimiento médico y nutricional
            - Apoyo académico
            - Posibilidad de desarrollo profesional

            Las pruebas se realizarán los días sábados de 9:00 a 12:00 en nuestro complejo deportivo. Los interesados deben traer:
            
            - Documento de identidad
            - Certificado médico
            - Ropa deportiva
            - Botines
            - Carta de autorización de los padres (menores de 18 años)

            ¡No pierdas esta oportunidad de ser parte del club más grande del Paraguay!"
          />

          <div className="w-full bg-black p-4 rounded-lg">
            <div className="relative w-full h-24 md:h-32">
              <img 
                src="https://i.ibb.co/k5ZKc8n/sponsors.png"
                alt="Sponsors"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <NewsCard
            image="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80"
            date="12 Mar 2024"
            title="Próximo partido"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
            imageAlt="Soccer Stadium"
            fullContent="Prepárate para el próximo encuentro del Decano. Este domingo enfrentaremos a nuestro clásico rival en un partido que promete ser histórico. El equipo ha completado una semana intensa de entrenamientos y está listo para dar lo mejor en el campo.

            Detalles del partido:
            - Fecha: Domingo 17 de marzo
            - Hora: 20:30
            - Estadio: Defensores del Chaco
            - Competición: Primera División
            
            La venta de entradas ya está disponible en los puntos habituales y a través de nuestra plataforma online. ¡No te quedes sin tu lugar para este importante encuentro!"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MainContent;