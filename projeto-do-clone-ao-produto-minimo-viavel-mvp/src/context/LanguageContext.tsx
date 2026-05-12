import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt-BR' | 'pt-PT' | 'en' | 'es' | 'de' | 'ru' | 'zh';

interface Translations {
  [key: string]: string;
}

const translations: Record<Language, Translations> = {
  'pt-BR': {
    hero_title: 'QR CODE styling',
    hero_subtitle: 'Crie códigos QR profissionais com design de elite e acessibilidade.',
    main_options: 'Configurações Principais',
    dots_options: 'Estilo dos Pontos',
    corners_square: 'Cantos (Quadrado)',
    corners_dot: 'Cantos (Pontos)',
    image_options: 'Logo e Imagem',
    background_options: 'Fundo',
    download: 'Baixar',
    support_title: 'Suporte QR Styling',
    support_online: 'Online agora',
    support_placeholder: 'Digite sua dúvida...',
    login: 'Entrar',
    logout: 'Sair',
    data: 'Dados',
    width: 'Largura',
    height: 'Altura',
    margin: 'Margem',
    type: 'Tipo',
    color: 'Cor',
    image_url: 'URL da Imagem',
    image_size: 'Tamanho da Imagem',
    image_margin: 'Margem da Imagem',
  },
  'pt-PT': {
    hero_title: 'QR CODE styling',
    hero_subtitle: 'Crie códigos QR profissionais com design de elite e acessibilidade.',
    main_options: 'Configurações Principais',
    dots_options: 'Estilo dos Pontos',
    corners_square: 'Cantos (Quadrado)',
    corners_dot: 'Cantos (Pontos)',
    image_options: 'Logótipo e Imagem',
    background_options: 'Fundo',
    download: 'Descarregar',
    support_title: 'Suporte QR Styling',
    support_online: 'Online agora',
    support_placeholder: 'Digite a sua dúvida...',
    login: 'Entrar',
    logout: 'Sair',
    data: 'Dados',
    width: 'Largura',
    height: 'Altura',
    margin: 'Margem',
    type: 'Tipo',
    color: 'Cor',
    image_url: 'URL da Imagem',
    image_size: 'Tamanho da Imagem',
    image_margin: 'Margem da Imagem',
  },
  'en': {
    hero_title: 'QR CODE styling',
    hero_subtitle: 'Create professional QR codes with elite design and accessibility.',
    main_options: 'Main Options',
    dots_options: 'Dots Options',
    corners_square: 'Corners Square',
    corners_dot: 'Corners Dot',
    image_options: 'Logo & Image',
    background_options: 'Background',
    download: 'Download',
    support_title: 'QR Styling Support',
    support_online: 'Online now',
    support_placeholder: 'Type your question...',
    login: 'Login',
    logout: 'Logout',
    data: 'Data',
    width: 'Width',
    height: 'Height',
    margin: 'Margin',
    type: 'Type',
    color: 'Color',
    image_url: 'Image URL',
    image_size: 'Image Size',
    image_margin: 'Image Margin',
  },
  'es': {
    hero_title: 'QR CODE styling',
    hero_subtitle: 'Crea códigos QR profesionales com diseño de élite y accesibilidad.',
    main_options: 'Opciones Principales',
    dots_options: 'Estilo de Puntos',
    corners_square: 'Esquinas (Cuadrado)',
    corners_dot: 'Esquinas (Puntos)',
    image_options: 'Logo e Imagen',
    background_options: 'Fondo',
    download: 'Descargar',
    support_title: 'Soporte QR Styling',
    support_online: 'En línea ahora',
    support_placeholder: 'Escribe tu duda...',
    login: 'Entrar',
    logout: 'Salir',
    data: 'Datos',
    width: 'Ancho',
    height: 'Alto',
    margin: 'Margen',
    type: 'Tipo',
    color: 'Color',
    image_url: 'URL de Imagen',
    image_size: 'Tamaño de Imagen',
    image_margin: 'Margen de Imagen',
  },
  'de': {
    hero_title: 'QR CODE styling',
    hero_subtitle: 'Erstellen Sie professionelle QR-Codes mit Elite-Design und Barrierefreiheit.',
    main_options: 'Haupteinstellungen',
    dots_options: 'Punkt-Stil',
    corners_square: 'Ecken (Quadrat)',
    corners_dot: 'Ecken (Punkte)',
    image_options: 'Logo & Bild',
    background_options: 'Hintergrund',
    download: 'Herunterladen',
    support_title: 'QR Styling Support',
    support_online: 'Jetzt online',
    support_placeholder: 'Schreiben Sie Ihre Frage...',
    login: 'Anmelden',
    logout: 'Abmelden',
    data: 'Daten',
    width: 'Breite',
    height: 'Höhe',
    margin: 'Rand',
    type: 'Typ',
    color: 'Farbe',
    image_url: 'Bild URL',
    image_size: 'Bildgröße',
    image_margin: 'Bildrand',
  },
  'ru': {
    hero_title: 'QR CODE styling',
    hero_subtitle: 'Создавайте профессиональные QR-коды с элитным дизайном и доступностью.',
    main_options: 'Основные настройки',
    dots_options: 'Стиль точек',
    corners_square: 'Углы (квадрат)',
    corners_dot: 'Углы (точки)',
    image_options: 'Логотип и изображение',
    background_options: 'Фон',
    download: 'Скачать',
    support_title: 'Поддержка QR Styling',
    support_online: 'В сети',
    support_placeholder: 'Введите ваш вопрос...',
    login: 'Войти',
    logout: 'Выйти',
    data: 'Данные',
    width: 'Ширина',
    height: 'Высота',
    margin: 'Отступ',
    type: 'Тип',
    color: 'Цвет',
    image_url: 'URL изображения',
    image_size: 'Размер изображения',
    image_margin: 'Отступ изображения',
  },
  'zh': {
    hero_title: 'QR CODE styling',
    hero_subtitle: '创建具有精英设计和无障碍功能的专业二维码。',
    main_options: '主要选项',
    dots_options: '点样式',
    corners_square: '角（正方形）',
    corners_dot: '角（点）',
    image_options: '徽标和图像',
    background_options: '背景',
    download: '下载',
    support_title: 'QR Styling 支持',
    support_online: '在线',
    support_placeholder: '输入您的问题...',
    login: '登录',
    logout: '登出',
    data: '数据',
    width: '宽度',
    height: '高度',
    margin: '边距',
    type: '类型',
    color: '颜色',
    image_url: '图片网址',
    image_size: '图片大小',
    image_margin: '图片边距',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
