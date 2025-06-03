import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  title: string;
  description: string;
  available: boolean;
  icon: string;
}

const ServiceCard = ({
  title,
  description,
  available,
  icon,
}: ServiceCardProps) => {
  return (
    <Card
      className={`transition-all duration-300 hover:shadow-lg ${
        available ? "hover:border-green-200" : "opacity-75"
      }`}
    >
      <CardHeader className="text-center">
        <div
          className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
            available ? "bg-green-100" : "bg-gray-100"
          }`}
        >
          <Icon
            name={icon}
            size={32}
            className={available ? "text-green-600" : "text-gray-400"}
          />
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <Badge
          variant={available ? "default" : "secondary"}
          className={`${
            available
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-400 hover:bg-gray-500"
          } text-white`}
        >
          {available ? "✓ Доступно" : "✗ Не предоставляем"}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
