import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  const contacts = [
    {
      icon: "Mail",
      title: "Email",
      value: "hello@musician.com",
      link: "mailto:hello@musician.com",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "Instagram",
      title: "Instagram",
      value: "@musician_portfolio",
      link: "https://instagram.com/musician_portfolio",
    },
    {
      icon: "Music",
      title: "SoundCloud",
      value: "Мои композиции",
      link: "https://soundcloud.com/musician",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Контакты</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Готов к новым проектам и сотрудничеству. Свяжитесь со мной!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-purple-100/50 group"
            >
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon
                  name={contact.icon}
                  size={24}
                  className="text-white mx-auto"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-600 text-sm">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Давайте создадим что-то удивительное вместе!
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Открыт для коллабораций, выступлений и творческих проектов
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Написать сообщение
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsSection;
