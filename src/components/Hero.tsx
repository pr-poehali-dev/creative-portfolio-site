import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Творческий <span className="gradient-text">путь</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Музыкант, исполнитель и организатор с богатым опытом выступлений
                и лидерства в студенческих проектах
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-sm font-medium text-gray-700">
                  🎸 Гитара
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-sm font-medium text-gray-700">
                  🎵 Флейта
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-sm font-medium text-gray-700">
                  👥 Лидерство
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Познакомиться ближе
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop"
                alt="Портрет музыканта"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
