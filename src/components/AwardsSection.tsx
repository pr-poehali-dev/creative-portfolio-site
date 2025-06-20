import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      icon: "Trophy",
      title: "Лауреат международного конкурса",
      year: "2024",
      description: "Первое место в номинации 'Лучший исполнитель на гитаре'",
    },
    {
      id: 2,
      icon: "Award",
      title: "Студенческий лидер года",
      year: "2023",
      description:
        "За выдающиеся достижения в организации студенческих мероприятий",
    },
    {
      id: 3,
      icon: "Star",
      title: "Стипендия за творческие достижения",
      year: "2023",
      description: "Признание таланта и вклада в культурную жизнь университета",
    },
    {
      id: 4,
      icon: "Medal",
      title: "Победитель регионального фестиваля",
      year: "2022",
      description: "Золотая медаль за сольное выступление на флейте",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-purple-50/30 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Награды</span> и достижения
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Признание таланта и усилий в музыкальной и общественной деятельности
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-purple-100/50"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-primary to-purple-600 rounded-full p-4 flex-shrink-0">
                  <Icon name={award.icon} size={24} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {award.title}
                    </h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {award.description}
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

export default AwardsSection;
