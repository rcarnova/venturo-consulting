const clients = [
  { name: "Ricehouse", logo: "/logos/ricehouse_white.png", scale: 1 },
  { name: "Lely", logo: "/logos/lely_white.svg", scale: 1 },
  { name: "Randstad", logo: "/logos/randstad_white.png", scale: 1.4 },
  { name: "Findomestic", logo: "/logos/findomestic_white.png", scale: 1.5 },
  { name: "Sambonet", logo: "/logos/sambonet_white.png", scale: 1 },
  { name: "Ufficio Pio", logo: "/logos/ufficio_pio_white.png", scale: 1 },
];

// Duplicate the array 3 times for seamless infinite scroll
const duplicatedClients = [...clients, ...clients, ...clients];

const ClientsSection = () => {
  return (
    <section className="py-12 bg-[#000000] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-[1.5rem] md:text-[2rem] font-semibold text-white opacity-90 mb-10">
          Hanno scelto Venturo
        </h2>
      </div>

      <div className="relative">
        {/* Left gradient fade */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-20 md:w-[120px] z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000000 0%, transparent 100%)' }}
        />
        
        {/* Right gradient fade */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-20 md:w-[120px] z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000000 0%, transparent 100%)' }}
        />

        {/* Scrolling container */}
        <div className="flex items-center animate-scroll hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-[150px] h-[75px] md:w-[180px] md:h-[90px] mx-6 md:mx-8 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ transform: `scale(${client.scale})` }}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
