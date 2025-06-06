import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Пошив",
      description:
        "Качественный пошив текстильных изделий любой сложности с соблюдением всех технологических требований",
      available: true,
      icon: "Scissors",
    },
    {
      title: "Раскрой (Ручной)",
      description:
        "Точный ручной раскрой материалов по лекалам с минимальными отходами",
      available: true,
      icon: "RectangleHorizontal",
    },
    {
      title: "Упаковка",
      description:
        "Профессиональная упаковка готовых изделий для розничной продажи или транспортировки",
      available: true,
      icon: "Package",
    },
    {
      title: "DTF печать",
      description:
        "Современная DTF печать высокого качества на различных видах ткани",
      available: true,
      icon: "Printer",
    },
    {
      title: "Лекала не создаем",
      description: "Работаем только с готовыми лекалами заказчика",
      available: false,
      icon: "FileX",
    },
    {
      title: "Услуги конструкторского бюро",
      description: "Услуги конструкторского бюро по разработке новых моделей",
      available: false,
      icon: "Drafting",
    },
    {
      title: "Вышивка на одежде",
      description: "Машинная и ручная вышивка на готовых изделиях",
      available: false,
      icon: "Flower",
    },
    {
      title: "Шелкография",
      description: "Печать методом шелкографии на текстильных изделиях",
      available: false,
      icon: "Palette",
    },
  ];

  const availableServices = services.filter((service) => service.available);
  const unavailableServices = services.filter((service) => !service.available);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг текстильного производства для вашего бизнеса
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-600 mb-8 text-center">
            ✓ Доступные услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-500 mb-8 text-center">
            ✗ Услуги, которые мы не предоставляем
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unavailableServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">
              Специализация
            </h4>
            <p className="text-blue-700">
              Создаем трикотаж 1.2 слоя высокого качества
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
