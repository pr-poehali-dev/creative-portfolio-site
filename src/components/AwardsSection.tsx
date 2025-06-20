import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      icon: "Award",
      title: "Благодарность министерства молодёжного развития",
      year: "2023",
      description:
        "Благодарность министерства молодёжного развития Ульяновской области",
    },
    {
      id: 2,
      icon: "Medal",
      title: "Благодарственное письмо губернатора",
      year: "2023",
      description:
        "За плодотворную общественную деятельность и активное участие в реализации программ молодёжной политики",
    },
    {
      id: 3,
      icon: "Trophy",
      title: "Почётная грамота со знаком отличия",
      year: "2023",
      description:
        "За достижения наивысших результатов в производственной, культурной, социально-значимой работе РСО",
    },
    {
      id: 4,
      icon: "Star",
      title: "Благодарственное письмо за показатели в отрядах",
      year: "2022-2023",
      description:
        "За наивысочайшие показатели среди студенческих отрядов и вклад в их развитие",
    },
    {
      id: 5,
      icon: "Crown",
      title: "Победитель конкурса Мистер студенческие отряды",
      year: "2022",
      description: "Мистер студенческие отряды Ульяновской области",
    },
    {
      id: 6,
      icon: "Target",
      title: "1 место «Самый лучший боец»",
      year: "2021",
      description: "Конкурс УРО МООО РСО «Ты крут»",
    },
    {
      id: 7,
      icon: "Shield",
      title: "«Лучший боец» отряда «Ялта»",
      year: "2021",
      description: "Всероссийский сводный студенческий сервисный отряд «Ялта»",
    },
    {
      id: 8,
      icon: "Camera",
      title: "Победитель в номинации «Мисс фото»",
      year: "2021",
      description:
        "Конкурс «Мисс и Мистер» Всероссийского сводного студенческого сервисного отряда «Ялта»",
    },
    {
      id: 9,
      icon: "Music",
      title: "Участник фестиваля авторской песни «Сияние»",
      year: "2021",
      description:
        "Межрегиональный фестиваль авторской песни студенческих отрядов",
    },
    {
      id: 10,
      icon: "Users",
      title: "Благодарственное письмо ДОЛ «Волжанка»",
      year: "2022",
      description:
        "За творческий подход и грамотную организацию воспитательной работы",
    },
    {
      id: 11,
      icon: "Guitar",
      title: "Участник слёта гитаристов ПФО",
      year: "2023",
      description:
        "I слёт гитаристов студенческих отрядов Приволжского федерального округа",
    },
    {
      id: 12,
      icon: "Star",
      title: "«Лучший боец» отряда «Мрия»",
      year: "2023",
      description:
        "VIII конкурсная неделя Всероссийского сводного студенческого сервисного отряда «Мрия»",
    },
    {
      id: 13,
      icon: "GraduationCap",
      title: "Благодарственное письмо за образовательную программу",
      year: "2023",
      description:
        "За проведение образовательной программы в рамках региональной школы командиров и комиссаров",
    },
    {
      id: 14,
      icon: "Flag",
      title: "3 место «Авторское патриотическое произведение»",
      year: "2024",
      description:
        "Творческий конкурс Всероссийского форума патриотического добровольчества «Десант Победы»",
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
