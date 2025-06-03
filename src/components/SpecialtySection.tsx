import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SpecialtySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-blue-600 text-white mb-4 px-4 py-2 text-lg">
            Наша специализация
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Трикотаж 1.2 слоя
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы специализируемся на производстве высококачественного трикотажа
            1.2 слоя, обеспечивая оптимальное соотношение прочности и комфорта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Layers" size={32} className="text-blue-600" />
              </div>
              <CardTitle>Технология 1.2 слоя</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Уникальная технология создания трикотажного полотна с
                оптимальной плотностью и эластичностью
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <CardTitle>Высокое качество</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Контроль качества на каждом этапе производства, соответствие
                всем стандартам
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Zap" size={32} className="text-purple-600" />
              </div>
              <CardTitle>Быстрое производство</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Оптимизированные процессы позволяют выполнять заказы в
                кратчайшие сроки
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
