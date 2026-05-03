/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Settings, 
  Wallet, 
  Monitor, 
  Battery as BatteryIcon, 
  Droplets, 
  Zap, 
  Search, 
  Smartphone,
  Instagram,
  Send
} from "lucide-react";

const servicesRU = [
  { id: 1, title: "Замена экрана", price: "от 150 000 сум", img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Замена батареи", price: "от 40 000 сум", img: "https://images.unsplash.com/photo-1625842268584-8f3bf9ffad32?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Ремонт после воды", price: "от 80 000 сум", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Ремонт разъёма зарядки", price: "от 50 000 сум", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Диагностика", price: "Бесплатно", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Ремонт любых моделей", price: "от 40 000 сум", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" },
];

const servicesUZ = [
  { id: 1, title: "Ekran almashtirish", price: "150 000 so'mdan", img: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Batareya almashtirish", price: "40 000 so'mdan", img: "https://images.unsplash.com/photo-1625842268584-8f3bf9ffad32?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Suv tushgan telefonlarni ta'mirlash", price: "80 000 so'mdan", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Zaryad raz'yomini ta'mirlash", price: "50 000 so'mdan", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Diagnostika", price: "Bepul", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Barcha modellarda ta'mir", price: "40 000 so'mdan", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" },
];

const reviewsRU = [
  "“Сделали телефон за 40 минут, всё работает отлично!”",
  "“Очень хорошие цены и быстрый сервис”",
  "“После воды телефон как новый, спасибо!”",
  "“Вежливые мастера и качественная работа”",
  "“Рекомендую, сделали быстро и недорого”"
];

const reviewsUZ = [
  "“Telefonimni 40 daqiqada tuzatishdi, zo‘r ishlayapti!”",
  "“Narxlari yaxshi va xizmat tez”",
  "“Suv tushgan telefonimni tiklab berishdi, rahmat!”",
  "“Ustalar juda yaxshi, xizmat sifati yuqori”",
  "“Tavsiya qilaman, tez va arzon”"
];

const StatItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary">
      <Icon size={24} />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-bold uppercase tracking-wider">{title}</span>
      <span className="text-xs text-gray-400">{desc}</span>
    </div>
  </div>
);

const ServiceCard = ({ title, price, img }: { title: string, price: string, img: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col items-center p-4 gap-3"
  >
    <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center relative group">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover" 
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex flex-col items-center">
      <span className="text-black font-bold text-center text-sm leading-tight mb-1">{title}</span>
      <span className="text-[10px] text-primary font-bold bg-black px-2 py-0.5 rounded uppercase">{price}</span>
    </div>
  </motion.div>
);

interface ReviewCardProps {
  text: string;
}

const ReviewCard = ({ text }: ReviewCardProps) => (
  <div className="bg-gray-900/50 p-6 rounded-2xl border border-white/5 flex flex-col gap-3">
    <div className="flex gap-1 text-primary">
      <Zap size={14} fill="currentColor" />
      <Zap size={14} fill="currentColor" />
      <Zap size={14} fill="currentColor" />
      <Zap size={14} fill="currentColor" />
      <Zap size={14} fill="currentColor" />
    </div>
    <p className="text-sm italic text-gray-300 leading-relaxed">{text}</p>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<'ru' | 'uz'>('ru');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const tgLink = "https://t.me/Fix_master_tashkent";
  const mapsLink = "https://2gis.uz/tashkent/search/%D0%A2%D0%B0%D0%BD%D1%81%D1%8B%D0%BA%D0%B1%D0%B0%D0%B5%D0%B2%D0%B0%20bozor/firm/70000001077214406/69.204843%2C41.367509?m=69.204853%2C41.36742%2F20%2Fp%2F0.3";
  const phone = "+998 99 000 07 13";
  const phoneDigits = "998990000713";

  const t = {
    ru: {
      nav: ["Главная", "Услуги", "Отзывы", "Контакты"],
      heroTitle: <>Ремонт телефонов <br/><span className="text-primary">в Ташкенте</span> <br/>быстро и с гарантией</>,
      heroSubtitle: "FixMaster Tashkent — профессиональный ремонт смартфонов любой сложности.",
      prices: "Цены: от 40 000 до 4 800 000 сум",
      duration: "Срок: от 30 минут до 1 часа",
      cta: "НАПИСАТЬ В TELEGRAM",
      map: "2GIS КАРТА",
      stats: [
        { icon: Clock, title: "Быстрый ремонт", desc: "от 30 минут" },
        { icon: ShieldCheck, title: "Гарантия", desc: "на все работы" },
        { icon: Settings, title: "Качественные", desc: "запчасти" },
        { icon: Wallet, title: "Честные", desc: "цены" },
      ],
      servicesTitle: "Наши услуги",
      reviewsTitle: "Отзывы клиентов",
      address: <>Ташкент, Алмазарский район <br/>Каракамыш 2/4-й квартал</>,
      openMap: "Открыть в 2GIS",
      langBtn: "O'zbekcha",
      ticker: "Ремонт телефонов быстро и надёжно — Честная гарантия — Оригинальные детали — FixMaster Tashkent —",
      brandTagline: "Ремонт телефонов быстро и надёжно",
      mastersTitle: "Опытные мастера",
      mastersDesc: "Профессиональный подход"
    },
    uz: {
      nav: ["Asosiy", "Xizmatlar", "Fikrlar", "Kontaktlar"],
      heroTitle: <>Toshkentda <br/><span className="text-primary">telefon ta'mirlash</span> <br/>tez va kafolat bilan</>,
      heroSubtitle: "FixMaster Tashkent — har qanday smartfonni professional ta'mirlash xizmati.",
      prices: "Narxlar: 40 000 so‘mdan 4 800 000 so‘mgacha",
      duration: "Vaqt: 30 daqiqadan 1 soatgacha",
      cta: "TELEGRAM'DA YOZISH",
      map: "2GIS XARITA",
      stats: [
        { icon: Clock, title: "TEZ TA'MIR", desc: "30 daqiqadan boshlab" },
        { icon: ShieldCheck, title: "KAFOLAT", desc: "barcha ishlar uchun" },
        { icon: Settings, title: "SIFATLI", desc: "EHTIYOT QISMLAR" },
        { icon: Wallet, title: "HALOL", desc: "NARXLAR" },
      ],
      servicesTitle: "Xizmatlarimiz",
      reviewsTitle: "Mijozlar fikri",
      address: <>Toshkent, Olmazor tumani <br/>Qoraqamish 2/4-mavzesi</>,
      openMap: "2GIS xaritada ochish",
      langBtn: "Русский",
      ticker: "Telefonlarni tez va sifatli ta'mirlash — Halol kafolat — Sifatli ehtiyot qismlar — FixMaster Tashkent —",
      brandTagline: "Telefonlarni tez va ishonchli ta'mirlash",
      mastersTitle: "Tajribali ustalar",
      mastersDesc: "Professional yondashuv"
    }
  }[lang];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black italic tracking-tighter text-white">Fix<span className="text-primary">Master</span></span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-bold ml-1">— TASHKENT —</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-300">
              <a href="#" className="hover:text-primary transition-colors">{t.nav[0]}</a>
              <a href="#services" className="hover:text-primary transition-colors">{t.nav[1]}</a>
              <a href="#reviews" className="hover:text-primary transition-colors">{t.nav[2]}</a>
              <a href="#contact" className="hover:text-primary transition-colors">{t.nav[3]}</a>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-700 mx-2" />
            <button 
              onClick={() => setLang(lang === 'ru' ? 'uz' : 'ru')}
              className="text-primary font-black hover:underline transition-all cursor-pointer text-xs md:text-sm px-3 py-1 border border-primary/30 rounded-md bg-primary/5"
            >
              {t.langBtn}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div 
            key={lang}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9]">
              {t.heroTitle}
            </h1>
            <div className="flex flex-col gap-1">
               <p className="text-sm font-bold text-primary uppercase tracking-widest">{t.prices}</p>
               <p className="text-xs text-gray-400 italic">{t.duration}</p>
            </div>
            <p className="text-lg text-gray-300 max-w-md font-medium">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a href={tgLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                <Send size={20} />
                {t.cta}
              </a>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all">
                <MapPin size={20} className="text-primary" />
                {t.map}
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <StatItem icon={stat.icon} title={stat.title} desc={stat.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black uppercase text-black tracking-tighter">{t.servicesTitle}</h2>
            <p className="text-xs font-bold text-gray-400 hidden sm:block">Прайс лист 2024</p>
          </div>
          <motion.div 
            key={`${lang}-services`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {(lang === 'ru' ? servicesRU : servicesUZ).map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard title={service.title} price={service.price} img={service.img} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Identity / Ticker */}
      <div className="bg-primary py-4 overflow-hidden border-y border-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="whitespace-nowrap flex gap-12 text-black font-black uppercase italic tracking-tighter text-2xl"
        >
          <span>{t.ticker}</span>
          <span>{t.ticker}</span>
          <span>{t.ticker}</span>
        </motion.div>
      </div>

      {/* Reviews Section */}
       <section id="reviews" className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">
            {t.reviewsTitle.split(" ")[0]} <span className="text-primary">{t.reviewsTitle.split(" ")[1]}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(lang === 'ru' ? reviewsRU : reviewsUZ).map((text, idx) => (
              <div key={idx}>
                <ReviewCard text={text} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- BRAND IDENTITY SECTION --- */}
      <section className="bg-black py-24 px-6 border-t border-primary/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Logo Showcase */}
          <div className="bg-[#111111] rounded-3xl p-12 flex flex-col items-center justify-center gap-8 border border-white/5">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-primary rounded-3xl flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(255,215,0,0.2)]">
                <Smartphone size={80} className="text-black" />
              </div>
              <span className="text-6xl font-black italic tracking-tighter text-white">Fix<span className="text-primary">Master</span></span>
              <div className="flex items-center gap-4 w-full mt-2">
                <div className="h-[2px] flex-1 bg-primary" />
                <span className="text-sm tracking-[0.6em] uppercase text-gray-400 font-bold">Tashkent</span>
                <div className="h-[2px] flex-1 bg-primary" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500 mb-2">{t.brandTagline}</p>
            </div>
          </div>

          {/* Icon Grid Showcase */}
          <div className="grid grid-cols-1 gap-6">
             <div className="bg-primary rounded-3xl p-12 flex flex-col items-center justify-center gap-4">
                <span className="text-4xl font-black italic tracking-tighter text-black">Fix<span className="text-white">Master</span></span>
                <div className="h-[2px] w-48 bg-black" />
                <span className="text-[10px] tracking-[0.8em] uppercase text-black font-black">Tashkent</span>
             </div>
             <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center gap-6 shadow-xl">
                <div className="grid grid-cols-4 gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <Clock size={24} className="text-black" />
                    <span className="text-[8px] font-bold uppercase text-gray-400">Tez</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <ShieldCheck size={24} className="text-black" />
                    <span className="text-[8px] font-bold uppercase text-gray-400">Kafolat</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings size={24} className="text-black" />
                    <span className="text-[8px] font-bold uppercase text-gray-400">Sifat</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Wallet size={24} className="text-black" />
                    <span className="text-[8px] font-bold uppercase text-gray-400">Narx</span>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                   <h3 className="text-xs font-black uppercase text-black tracking-widest mb-1">{t.mastersTitle}</h3>
                   <p className="text-[8px] text-gray-500 uppercase tracking-widest leading-relaxed">{t.mastersDesc}</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-center text-center md:text-left">
          <div className="flex flex-col gap-4">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors group">
              <MapPin className="text-primary shrink-0 mt-1" size={18} />
              <p className="text-xs text-gray-400 group-hover:text-white">
                {t.address} <br/>
                <span className="text-primary underline opacity-70 group-hover:opacity-100">{t.openMap}</span>
              </p>
            </a>
            <div className="flex items-center gap-3">
              <Phone className="text-primary shrink-0" size={18} />
              <a href={`tel:+${phoneDigits}`} className="text-xs text-gray-400 hover:text-white transition-colors tracking-widest">{phone}</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:text-primary transition-colors border border-gray-800">
                <Instagram size={20} />
              </a>
              <a href={tgLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:text-primary transition-colors border border-gray-800">
                <Send size={20} />
              </a>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">@fix_master_tashkent</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

