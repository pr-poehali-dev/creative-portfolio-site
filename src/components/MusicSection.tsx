import { motion } from "framer-motion";

const MusicSection = () => {
  const performances = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      title: "Концерт в филармонии",
      description: "Сольное выступление на гитаре",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      title: "Джазовый фестиваль",
      description: "Выступление с флейтой",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      title: "Камерный ансамбль",
      description: "Участие в квартете",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop",
      title: "Мастер-класс",
      description: "Обучение молодых музыкантов",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
      title: "Уличные выступления",
      description: "Импровизация на открытом воздухе",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      title: "Студийная запись",
      description: "Работа над альбомом",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-purple-50/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Сцена и <span className="gradient-text">музыка</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Каждое выступление — это история, рассказанная через музыку. От
            сольных концертов до ансамблевых проектов.
          </p>
        </motion.div>

        <div className="photo-grid">
          {performances.map((performance, index) => (
            <motion.div
              key={performance.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="photo-card aspect-[4/3]"
            >
              <img
                src={performance.image}
                alt={performance.title}
                className="w-full h-full object-cover"
              />
              <div className="photo-overlay">
                <div className="photo-caption">
                  <h3 className="text-lg font-semibold mb-1">
                    {performance.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {performance.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
