export const about = {
  ru: {
    intro: [
      'Более трёх лет строю интерфейсы, инфраструктуру и backend для продакшн-сервисов. Работаю с frontend-архитектурой, SSR, API-контрактами, CI/CD, E2E-тестированием, observability и производительностью.',
      'В рамках ВКР исследовал и запатчил баг в Chromium: покадровая перемотка видео после исправления ускорилась в 27 раз. Выступил на PiterJS #92 с докладом об этой работе.',
    ],
    interestsTitle: 'Интересы и ценности',
    interests: [
      'Верю в качественный опенсорс фронтенд, часто изучаю различные кодовые базы и смотрю трендовые репозитории. Интересуюсь разработкой и подходами к сложным библиотекам, браузерам и dev-инструментам (сборщикам, альтернативам Node.js: Bun, Deno, линтеры и др.).',
      'Считаю, что ИИ слоп это плохо. Текущие harness и фронтир модели уже достаточно мощные, но требуют мощной донастройки. Исследую метрики продуктивности ИИ, способы уменьшения мусора и улучшения ИИ как инструмента (а не автономного агента).',
    ],
    stackTitle: 'Стек',
    educationTitle: 'Образование',
    jobs: [
      { company: 'Яндекс', role: 'Разработчик интерфейсов · IoT', period: 'июнь 2026 — сентябрь 2026', points: [
        'Разрабатывал сложные интерфейсы в IoT-домене на React и Redux.',
        'Автоматизировал генерацию TypeScript-типов из OpenAPI-спецификаций и перевёл API-клиенты на строгую контрактную типизацию.',
        'Создал инфраструктуру E2E-тестирования на Playwright: авторизация, подготовка окружений, мок-сценарии и интеграция в CI/CD.',
        'Оптимизировал continuous delivery: автоматизировал создание release candidates, сборку, деплой и генерацию отчётов о статусе.',
        'Разработал инструменты генерации конфигурационных файлов: CLI, схемы, типизацию ресурсов и пресеты.',
        'Улучшил CI/CD-пайплайны, интеграцию error tracking с Source Maps и контрольные точки качества в репозитории; документировал сложные инженерные решения.',
      ], stack: 'React · Redux · Rspack / Webpack · Playwright · OpenAPI' },
      { company: 'Skazkisomnoi', role: 'Frontend / Full-Stack Developer', period: 'июнь 2025 — июнь 2026', points: [
        'Сервис персонализированных детских книг: пользователь загружает фото ребёнка, а система генерирует иллюстрированную книгу с его участием.',
        'Реализовал checkout с локализованными формами, расчётом доставки и Stripe для международных заказов — продукт работал на нескольких рынках одновременно.',
        'Нашёл и устранил утечки памяти в Nuxt 3 SSR на production-нагрузке; после фикса сервис перевели на серверы меньшего класса без потери latency.',
        'Настроил Sentry и OpenTelemetry: трассировку, алерты и диагностику production-инцидентов.',
        'Нашёл и закрыл несколько SSR-проблем с гидратацией в Nuxt 3.',
        'Проектировал новые фичи: декомпозировал задачи и принимал архитектурные решения.',
        'Настроил деплой AI-моделей через GitHub Actions и пайплайн в Runpod.',
      ], stack: 'Vue 3 · Nuxt 3 · TypeScript · Pinia · VueUse · Vite · Sentry · OpenTelemetry' },
      { company: 'Artlogo', role: 'Frontend Engineer', period: 'сентябрь 2024 — июнь 2025', points: [
        'Работал над e-commerce-продуктом на Shopify и запуском нового AI-направления компании.',
        'Спроектировал frontend-структуру нового AI-продукта: разбиение приложения, state management, ключевые UI-сценарии и точки интеграции с API.',
        'Оптимизировал Core Web Vitals Shopify storefront: Lighthouse Mobile Score вырос с 30 до 60, INP снизился на 20%, исправлены LCP/CLS-проблемы.',
        'Реализовал dark mode для генератора email-подписей и адаптировал шаблоны под Gmail, Outlook и Apple Mail.',
        'Улучшил экспорт email-подписей: доработал обработку stroke и HTML extraction flow для более чистого результата при copy/download.',
        'Рефакторил legacy SCSS/JavaScript и снижал количество production-ошибок, отслеживаемых в Sentry.',
      ], stack: 'Vue · Nuxt · TypeScript · Pinia · Shopify Liquid · Tailwind CSS · Lighthouse · Sentry' },
      { company: 'Продуктовые и проектные разработки', role: 'Frontend / Full-Stack Developer', period: 'апрель 2023 — август 2024', points: [
        'Реализовал полный цикл разработки нескольких веб-приложений на разных стеках — Supabase, Java/PostgreSQL, Jakarta EE/JSF и Spring + React: авторизация, API-слои, модели данных, формы и клиент-серверная интеграция.',
        'Создал библиотеку сэмплов для музыкантов: поиск по BPM, тональности и жанру, waveform-превью, автоматическое определение BPM и desktop-клиент.',
        'Разработал подписочную платформу для музыкантов: каталог треков, встроенный плеер, личный кабинет и CMS на Payload.',
      ], stack: 'TypeScript · React · Redux · MUI · Vue / Nuxt · Supabase · PostgreSQL · Java · Spring · Payload CMS' },
    ],
    education: [
      { degree: 'ПИиКТ · Программная инженерия (Нейротехнологии и программирование) · бакалавр', period: '2022–2026' },
      { degree: 'ПИиКТ · Веб-технологии · магистратура', period: '2026–2028' },
    ],
  },
  en: {
    intro: [
      'For more than three years, I have built interfaces, infrastructure, and backend systems for production services. My work spans frontend architecture, SSR, API contracts, CI/CD, E2E testing, observability, and performance.',
      'For my bachelor’s thesis, I investigated and patched a Chromium bug: frame-by-frame video seeking became 27 times faster after the fix. I presented this work at PiterJS #92.',
    ],
    interestsTitle: 'Interests and values',
    interests: [
      'I believe in high-quality open-source frontend software. I often study codebases and trending repositories. I am interested in complex libraries, browsers, and developer tools, including bundlers, Node.js alternatives such as Bun and Deno, and linters.',
      'I think AI slop is harmful. Current harnesses and frontier models are already powerful, but need substantial refinement. I study AI productivity metrics, ways to reduce noise, and ways to improve AI as a tool rather than an autonomous agent.',
    ],
    stackTitle: 'Stack',
    educationTitle: 'Education',
    jobs: [
      { company: 'Yandex', role: 'Frontend Engineer · IoT', period: 'June 2026 — September 2026', points: [
        'Built complex IoT interfaces with React and Redux.',
        'Automated TypeScript type generation from OpenAPI specifications and moved API clients to strict contract-based typing.',
        'Built Playwright E2E infrastructure with authentication, environments, mock scenarios, and CI/CD integration.',
        'Automated release-candidate creation, builds, deployment, and status reports.',
        'Built configuration-generation tools: a CLI, schemas, resource types, and presets.',
        'Improved CI/CD, Source Maps error tracking, and repository quality gates; documented engineering decisions.',
      ], stack: 'React · Redux · Rspack / Webpack · Playwright · OpenAPI' },
      { company: 'Skazkisomnoi', role: 'Frontend / Full-Stack Developer', period: 'June 2025 — June 2026', points: [
        'Worked on a personalized children’s book service that generates illustrated books from an uploaded child’s photo.',
        'Built localized checkout, delivery calculations, and Stripe payments for international orders.',
        'Found and fixed Nuxt 3 SSR memory leaks under production load, allowing the service to use smaller servers without added latency.',
        'Set up Sentry and OpenTelemetry tracing, alerts, and incident diagnostics.',
        'Resolved several Nuxt 3 SSR hydration issues.',
        'Planned features, decomposed work, and made architecture decisions.',
        'Set up AI-model deployment with GitHub Actions and a Runpod pipeline.',
      ], stack: 'Vue 3 · Nuxt 3 · TypeScript · Pinia · VueUse · Vite · Sentry · OpenTelemetry' },
      { company: 'Artlogo', role: 'Frontend Engineer', period: 'September 2024 — June 2025', points: [
        'Worked on a Shopify e-commerce product and launched a new AI product direction.',
        'Designed the frontend structure of an AI product: application modules, state management, user flows, and API integrations.',
        'Improved Core Web Vitals: Lighthouse Mobile score rose from 30 to 60 and INP fell by 20%, with LCP and CLS fixes.',
        'Added dark mode to an email-signature generator for Gmail, Outlook, and Apple Mail.',
        'Improved signature export, stroke handling, and HTML extraction for copy and download.',
        'Refactored legacy SCSS and JavaScript and reduced production errors tracked in Sentry.',
      ], stack: 'Vue · Nuxt · TypeScript · Pinia · Shopify Liquid · Tailwind CSS · Lighthouse · Sentry' },
      { company: 'Independent product and project development', role: 'Frontend / Full-Stack Developer', period: 'April 2023 — August 2024', points: [
        'Delivered complete web applications with Supabase, Java/PostgreSQL, Jakarta EE/JSF, and Spring + React.',
        'Built a sample library for musicians with BPM, key, and genre search, waveform previews, automatic BPM detection, and a desktop client.',
        'Built a musician subscription platform with a track catalog, player, accounts, and Payload CMS.',
      ], stack: 'TypeScript · React · Redux · MUI · Vue / Nuxt · Supabase · PostgreSQL · Java · Spring · Payload CMS' },
    ],
    education: [
      { degree: 'B.S. in Software Engineering (Neurotechnology and Programming)', period: '2022–2026' },
      { degree: 'M.S. in Web Technologies', period: '2026–2028' },
    ],
  },
} as const;
