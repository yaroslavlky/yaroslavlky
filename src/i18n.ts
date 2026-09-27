export type Language = 'en' | 'ru';

export const ui = {
  en: {
    home: 'Home', articles: 'Articles', about: 'About', writing: 'Writing',
    intro: 'Hi, I’m Yaroslav Lukyanchuk.', role: 'Software Engineer · Frontend / Full-Stack',
    lead: 'I build web products and engineering infrastructure, with a focus on performance, reliability, and developer experience.',
    viewWork: 'Explore my work', readArticles: 'Read articles', selectedWork: 'Selected work',
    selectedWorkIntro: 'A few problems I’ve enjoyed solving.', latestWriting: 'Latest writing',
    latestWritingIntro: 'Notes on engineering, the web, and everything in between.',
    allArticles: 'All articles', aboutTitle: 'About me', aboutLead: 'I’m a software engineer based in Saint Petersburg, Russia.',
    aboutBody: 'I work across frontend, full-stack systems, and engineering infrastructure. I enjoy finding the cause of difficult performance and reliability problems, then turning the fix into a better experience for users and teams.',
    experience: 'Experience', education: 'Education', contact: 'Get in touch',
    contactLead: 'Have a project, an interesting problem, or just want to say hello?',
    articlesTitle: 'Articles', articlesLead: 'Thoughts and practical notes from my work as a software engineer.',
    noArticles: 'Articles are on the way.', backArticles: 'All articles', readMore: 'Read article',
    language: 'Language', theme: 'Toggle color theme',
  },
  ru: {
    home: 'Главная', articles: 'Статьи', about: 'Обо мне', writing: 'Публикации',
    intro: 'Привет, я Ярослав Лукьянчук.', role: 'Software Engineer · Frontend / Full-Stack',
    lead: 'Создаю веб-продукты и инженерную инфраструктуру. Уделяю особое внимание производительности, надёжности и удобству разработки.',
    viewWork: 'Смотреть проекты', readArticles: 'Читать статьи', selectedWork: 'Избранные проекты',
    selectedWorkIntro: 'Несколько интересных задач из моей практики.', latestWriting: 'Последние статьи',
    latestWritingIntro: 'Заметки о разработке, вебе и не только.',
    allArticles: 'Все статьи', aboutTitle: 'Обо мне', aboutLead: 'Я инженер-программист из Санкт-Петербурга.',
    aboutBody: 'Работаю над фронтендом, серверной частью и инженерной инфраструктурой. Люблю находить причины сложных проблем с производительностью и надёжностью и превращать решения в более удобные продукты и процессы.',
    experience: 'Опыт работы', education: 'Образование', contact: 'Связаться',
    contactLead: 'Есть интересный проект, задача или просто хотите познакомиться?',
    articlesTitle: 'Статьи', articlesLead: 'Мысли и практические заметки из моей работы инженером-программистом.',
    noArticles: 'Статьи скоро появятся.', backArticles: 'Все статьи', readMore: 'Читать статью',
    language: 'Язык', theme: 'Переключить тему',
  },
} as const;

export const assetPath = (route: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${route.replace(/^\//, '')}`;

export const path = (lang: Language, route = '') => assetPath(`${lang}${route ? `/${route}` : ''}/`);
