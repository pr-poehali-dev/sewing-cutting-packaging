import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-gray-900">ТекстильПро</h2>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
              <Badge
                variant="outline"
                className="text-blue-600 border-blue-600"
              >
                Трикотаж 1.2 слоя
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
