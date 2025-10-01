import Image from "next/image";
import { ArrowRight, Compass, LineChart, Map, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const mentors = [
  {
    name: "Анна Громова",
    role: "Эксперт по премиальным маршрутам",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Михаил Дроздов",
    role: "Руководитель агентства TravelPro",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Екатерина Лазутина",
    role: "Специалист по бизнес-туризму",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=256&q=80",
  },
];

const achievements = [
  { value: "8 500+", label: "выпускников по всему миру" },
  { value: "120", label: "практических кейсов и сценариев" },
  { value: "45%", label: "средний рост дохода выпускников" },
];

const modules = [
  {
    title: "Стратегия и аналитика",
    description:
      "Изучайте современные тренды туризма, анализируйте спрос и формируйте сильные продуктовые линейки.",
    icon: LineChart,
  },
  {
    title: "Создание маршрутов",
    description:
      "Конструируйте путешествия под любой запрос: от семейных до корпоративных с опорой на реальный опыт.",
    icon: Map,
  },
  {
    title: "Коммуникации с клиентами",
    description:
      "Освойте сервисный стандарт TravelPro, научитесь выстраивать долгосрочные отношения и удерживать клиентов.",
    icon: Users,
  },
];

const testimonials = [
  {
    name: "Наталья Сафонова",
    role: "Основатель агентства NataTravel",
    message:
      "После курса мы расширили линейку авторских туров и увеличили оборот в 1.8 раза. Особенно помогли практикумы с наставниками.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Игорь Левицкий",
    role: "Корпоративный менеджер по туризму",
    message:
      "Интерактивные симуляторы переговоров с клиентами — это must-have. Теперь команда закрывает заявки быстрее и увереннее.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#e3f2fd,transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#f5f8fb] to-[#fef6f4]" />

      <section className="relative overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 -z-10 bg-hero-pattern opacity-90" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
        <div className="container relative">
          <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-8 text-white">
              <Badge className="bg-white/15 text-white">Новый дизайн TravelProSchool 2024</Badge>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Станьте востребованным турагентом с платформой нового поколения
              </h1>
              <p className="text-lg text-white/85 lg:text-xl">
                Живая аналитика, авторские методики и практические симуляции в одном пространстве. Постройте карьеру в туризме с поддержкой наставников TravelPro.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" className="gap-2">
                  Начать обучение
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="secondary" className="gap-2">
                  Узнать программу
                  <Compass className="h-5 w-5" />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {achievements.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center">
                    <p className="text-2xl font-semibold lg:text-3xl">{item.value}</p>
                    <p className="text-sm text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-white/20 bg-white/10 p-0 text-white shadow-none backdrop-blur-3xl">
              <CardContent className="space-y-6 p-8">
                <div className="relative h-72 overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                    alt="Эмоциональные путешествия"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Погружение в индустрию</h3>
                  <p className="text-sm text-white/75">
                    Получите доступ к базам поставщиков, шаблонам документов и библиотеке лучших маршрутов TravelPro.
                  </p>
                </div>
                <Separator className="bg-white/10" />
                <div className="flex items-center gap-3">
                  <Avatar className="border-white/50">
                    <AvatarImage src="https://images.unsplash.com/photo-1506898665064-81587b94933a?auto=format&fit=crop&w=160&q=80" />
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">Александра Голубева</p>
                    <p className="text-xs text-white/70">Руководитель программы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container space-y-12 py-20">
        <div className="space-y-4 text-center">
          <Badge variant="secondary" className="mx-auto">Почему TravelProSchool</Badge>
          <h2 className="text-3xl font-semibold sm:text-4xl">Обучение, которое работает на результат</h2>
          <p className="section-subtitle">
            Сочетание живых сессий с экспертами, цифровых тренажёров и карьерного сопровождения. Мы обновили подход, сохранив душу TravelPro.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {modules.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="h-full border-border/40 bg-white/95">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground/90">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Практические задания и разбор кейсов</li>
                  <li>• Конспекты и шаблоны для ежедневной работы</li>
                  <li>• Наставник, который отвечает в течение суток</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-[#f6f9fc] to-[#fef5ef] py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge variant="accent" className="w-fit">Гибридный формат</Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Гибкая программа с живыми практикумами и цифровыми инструментами
            </h2>
            <p className="section-subtitle text-left">
              Осваивайте профессию в комфортном темпе. Каждую неделю — интерактивные практикумы, digital-симуляции и обратная связь от наставников.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-transparent bg-white/80">
                <CardHeader>
                  <CardTitle className="text-xl">Иммерсивные мастерские</CardTitle>
                  <CardDescription>
                    Работа в малых группах, реальные кейсы TravelPro и защита проектов перед экспертами индустрии.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-transparent bg-white/80">
                <CardHeader>
                  <CardTitle className="text-xl">Digital-лаборатория</CardTitle>
                  <CardDescription>
                    Симуляторы переговоров, библиотека документов и панель аналитики по рынку в вашем личном кабинете.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <Button size="lg" className="gap-2 w-fit">
              Записаться на демо-урок
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="relative">
            <Card className="overflow-hidden border-border/40 bg-white/95">
              <CardContent className="space-y-6 p-0">
                <div className="relative h-72 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?auto=format&fit=crop&w=1200&q=80"
                    alt="Команда турагентов"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 px-8 pb-8">
                  <h3 className="text-2xl font-semibold">Менторская команда TravelPro</h3>
                  <p className="text-sm text-muted-foreground">
                    Работайте с практиками рынка: руководителями агентств, экспертами по премиальному и деловому туризму.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {mentors.map((mentor) => (
                      <div key={mentor.name} className="rounded-2xl border border-border/50 bg-muted/30 p-4 text-center">
                        <Avatar className="mx-auto h-16 w-16 border-none">
                          <AvatarImage src={mentor.image} alt={mentor.name} />
                          <AvatarFallback>{mentor.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <p className="mt-3 text-sm font-semibold">{mentor.name}</p>
                        <p className="text-xs text-muted-foreground">{mentor.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container space-y-12 py-20">
        <div className="space-y-4 text-center">
          <Badge variant="secondary" className="mx-auto">Отзывы выпускников</Badge>
          <h2 className="text-3xl font-semibold sm:text-4xl">TravelPro помогает расти быстрее</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/40 bg-white/95">
              <CardHeader className="flex-row items-center gap-4 pb-6">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 text-base text-muted-foreground">
                “{testimonial.message}”
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-hero-pattern opacity-95" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
        <div className="container relative grid gap-10 text-white lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="bg-white/15 text-white">Готовы к новому уровню?</Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Подключайтесь к TravelProSchool и прокачайте команду за 3 месяца
            </h2>
            <p className="text-white/80">
              Персонализированная дорожная карта, консультации с наставниками и закрытое сообщество турагентов — всё, чтобы ваш бизнес рос увереннее.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Пройти консультацию
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                Скачать программу курса
              </Button>
            </div>
          </div>
          <Card className="border-white/20 bg-white/10 text-white shadow-none backdrop-blur-2xl">
            <CardContent className="space-y-6 p-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Что входит</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>• 12 живых модулей и 30+ онлайн-уроков</li>
                  <li>• Доступ к библиотеке авторских маршрутов</li>
                  <li>• Наставник TravelPro и карьерное сопровождение</li>
                  <li>• Сертификат и помощь в трудоустройстве</li>
                </ul>
              </div>
              <Separator className="bg-white/10" />
              <div>
                <p className="text-sm uppercase tracking-wide text-white/60">Следующий поток</p>
                <p className="text-2xl font-semibold">15 апреля 2024</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
