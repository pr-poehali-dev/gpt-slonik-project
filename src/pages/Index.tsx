import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [isWebSearch, setIsWebSearch] = useState(false);

  const generateSmartResponse = (question: string): string => {
    const q = question.toLowerCase();

    // Программирование
    if (
      q.includes("код") ||
      q.includes("программ") ||
      q.includes("react") ||
      q.includes("javascript") ||
      q.includes("python")
    ) {
      return "🔧 Отличный вопрос по программированию! Я помогу тебе разобраться с кодом. Можешь показать конкретный пример или описать проблему подробнее?";
    }

    // Изображения
    if (
      q.includes("изображен") ||
      q.includes("картин") ||
      q.includes("фото") ||
      q.includes("рисун") ||
      (q.includes("создай") && (q.includes("картин") || q.includes("изображ")))
    ) {
      return "🎨 Я могу создать для тебя изображение! Опиши детально что ты хочешь увидеть - стиль, цвета, объекты, настроение. Чем подробнее, тем лучше получится!";
    }

    // Факты и знания
    if (
      q.includes("факт") ||
      q.includes("расскаж") ||
      q.includes("что такое") ||
      q.includes("объясни")
    ) {
      return (
        "🧠 Интересно! Я знаю много фактов по разным темам. " +
        (isWebSearch
          ? "Сейчас найду самую актуальную информацию в интернете."
          : "Поделюсь знаниями из своей базы данных.")
      );
    }

    // Математика
    if (
      q.includes("вычисли") ||
      q.includes("реши") ||
      q.includes("математ") ||
      /\d+/.test(q)
    ) {
      return "🔢 Отлично! Я хорошо разбираюсь в математике. Давай решим эту задачу пошагово!";
    }

    // Поиск информации
    if (
      q.includes("найди") ||
      q.includes("поищи") ||
      q.includes("где") ||
      q.includes("когда")
    ) {
      return isWebSearch
        ? "🔍 Отлично! Сейчас поищу самую актуальную информацию в интернете по твоему запросу."
        : "💡 Могу поделиться знаниями по этому вопросу. Для самой свежей информации включи режим поиска в сети!";
    }

    // Помощь и советы
    if (q.includes("помоги") || q.includes("как") || q.includes("что делать")) {
      return "🤝 Конечно помогу! Опиши свою ситуацию подробнее, и я дам тебе полезные советы и рекомендации.";
    }

    // Приветствия
    if (
      q.includes("привет") ||
      q.includes("здравствуй") ||
      q.includes("как дела")
    ) {
      return "👋 Привет! Я GPT Slonik 🐘 - твой умный помощник! Готов отвечать на вопросы, создавать изображения и помогать с любыми задачами. О чем поговорим?";
    }

    // Общие вопросы
    return "🐘 Интересный вопрос! Дай мне немного больше контекста, и я смогу дать тебе более подробный и полезный ответ.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInputValue("");

    // Генерация умного ответа
    setTimeout(
      () => {
        const smartResponse = generateSmartResponse(userMessage);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: smartResponse },
        ]);
      },
      Math.random() * 1000 + 500,
    ); // Случайная задержка 500-1500мс для реализма
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black animate-gradient-shift bg-[length:400%_400%]"></div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold text-white animate-text-glow">
            GPT<span className="text-neon-cyan">Slonik</span>
          </h1>
          <span className="text-2xl">🐘</span>
        </div>

        {/* Auth buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_#00FFFF]"
          >
            Войти
          </Button>
          <Button className="bg-gradient-to-r from-neon-magenta to-neon-cyan text-black font-semibold hover:animate-neon-glow transition-all duration-300">
            Регистрация
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-6">
        {/* Mode switcher */}
        <Card className="mb-6 p-4 bg-black/50 border border-neon-cyan/30 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-4">
            <Label
              htmlFor="mode-switch"
              className="text-white flex items-center space-x-2"
            >
              <Icon name="MessageSquare" size={20} className="text-neon-cyan" />
              <span>Генерация ответа</span>
            </Label>
            <Switch
              id="mode-switch"
              checked={isWebSearch}
              onCheckedChange={setIsWebSearch}
              className="data-[state=checked]:bg-neon-magenta"
            />
            <Label
              htmlFor="mode-switch"
              className="text-white flex items-center space-x-2"
            >
              <Icon name="Search" size={20} className="text-neon-magenta" />
              <span>Поиск в сети</span>
            </Label>
          </div>
          <p className="text-center text-gray-400 text-sm mt-2">
            {isWebSearch
              ? "Ищу актуальную информацию в интернете"
              : "Генерирую ответы на основе знаний"}
          </p>
        </Card>

        {/* Chat area */}
        <Card className="mb-6 h-96 p-4 bg-black/50 border border-neon-cyan/30 backdrop-blur-sm overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4 animate-pulse">🐘</div>
              <h2 className="text-2xl font-bold text-white mb-2 animate-text-glow">
                Привет! Я GPT Slonik
              </h2>
              <p className="text-gray-400 mb-4">
                Задай любой вопрос или попроси создать изображение
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-black"
                  onClick={() => setInputValue("Расскажи интересный факт")}
                >
                  Интересный факт
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
                  onClick={() => setInputValue("Создай изображение космоса")}
                >
                  Создать изображение
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black"
                  onClick={() => setInputValue("Помоги с кодом")}
                >
                  Помощь с кодом
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-neon-cyan text-black font-semibold"
                        : "bg-gradient-to-r from-neon-magenta/20 to-neon-cyan/20 text-white border border-neon-cyan/30"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Input area */}
        <Card className="p-4 bg-black/50 border border-neon-cyan/30 backdrop-blur-sm">
          <div className="flex space-x-4">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                isWebSearch
                  ? "Найди информацию о..."
                  : "Задай вопрос или попроси создать изображение..."
              }
              className="flex-1 bg-black/50 border-neon-cyan/50 text-white placeholder:text-gray-400 focus:border-neon-cyan focus:ring-neon-cyan"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-semibold hover:animate-neon-glow transition-all duration-300"
              disabled={!inputValue.trim()}
            >
              <Icon name="Send" size={20} />
            </Button>
          </div>
          <div className="flex items-center justify-center mt-3 space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={16} className="text-neon-yellow" />
              <span>Быстрые ответы</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Image" size={16} className="text-neon-magenta" />
              <span>Генерация изображений</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Brain" size={16} className="text-neon-green" />
              <span>ИИ помощник</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
