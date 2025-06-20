import { motion } from "framer-motion";

const LeadershipSection = () => {
  const activities = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      title: "Студенческий совет",
      description: "Организация культурных мероприятий",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      title: "Конференция лидеров",
      description: "Выступление перед аудиторией",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
      title: "Волонтерский проект",
      description: "Помощь в социальных программах",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      title: "Командная работа",
      description: "Работа с творческими коллективами",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      title: "Городской форум",
      description: "Участие в молодежных инициативах",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Наставничество",
      description: "Менторство для студентов",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Организаторская <span className="gradient-text">деятельность</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Лидерство через вдохновение и объединение людей для достижения общих
            целей. Опыт организации мероприятий и управления командами.
          </p>
        </motion.div>

        <div className="photo-grid">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="photo-card aspect-[4/3]"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
              <div className="photo-overlay">
                <div className="photo-caption">
                  <h3 className="text-lg font-semibold mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-sm opacity-90">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
