export default function ServiceOffer() {
  const services = [
    {
      icon: "/images/iskrovka_services.png",
      title: "Waterproofing",
      description: "We offer complete supply and installation of waterproofing systems.",
    },
    {
      icon: "/images/iskrovka_services.png",
      title: "Business activities",
      description: "Importer of extruded polystyrene products from FIBRAN S.A.",
    },
    {
      icon: "/images/iskrovka_services.png",
      title: "Timber buildings",
      description: "Gazebos, sheds, pergolas, and garages made of exotic woods.",
    },
    {
      icon: "/images/iskrovka_services.png",
      title: "Core drilling",
      description: "Cutting reinforced concrete without size limitation.",
    },
    {
      icon: "/images/iskrovka_services.png",
      title: "Consulting",
      description: "Technical advice and support for insulation projects.",
    },
    {
      icon: "/images/iskrovka_services.png",
      title: "Installation services",
      description: "On-site installation of our full range of systems.",
    },
  ];

  return (
    <div className="service-offer-wrapper">
      <h2>Service offer</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}