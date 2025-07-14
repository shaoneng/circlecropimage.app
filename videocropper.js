document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        en: { 
            pageTitle: "Circle Video Crop Tool - Free Online Round Video Cropper",
            siteName: "circlecropimage.app",
            videoMainTitle: "Circle Video Crop Tool",
            videoMainIntro: "Easily crop any video into a perfect circle online. Free, instant, and secure. Ideal for animated profile pictures and social media content.",
            uploadVideoCTA: "Drag & drop your video here, or ",
            uploadClick: "click to upload",
            uploadVideoFormats: "Supports MP4, WEBM, OGG",
            diameterLabel: "Circle Diameter:",
            videoControlsTitle: "Recording Controls",
            startRecording: "Start Recording",
            stopRecording: "Stop Recording",
            resetButton: "Upload New",
            downloadTitle: "Your Cropped Video",
            downloadVideo: "Download Video (.webm)",
            processing: "Processing, please wait...",
            howToTitle: "How It Works in 3 Simple Steps",
            step1Title: "Upload Video",
            step1Desc: "Drag and drop your file, or click to select a video from your device.",
            step2Title: "Adjust & Record",
            step2Desc: "Position the circle and adjust its size. Click 'Start Recording' to capture.",
            step3Title: "Download",
            step3Desc: "Stop the recording and click the download button to save your new circular video.",
            otherToolsTitle: "Check Out Our Other Tools",
            tool1Title: "Circle Image Cropper",
            tool1Desc: "Need to crop a static image? Use our image cropper for perfect circular photos.",
            useCasesTitle: "Popular Ways to Use Circle Videos",
            useCase1Title: "Animated Profile Pictures",
            useCase1Desc: "Create a dynamic look for your profiles on platforms that support video avatars.",
            useCase2Title: "Social Media Stories",
            useCase2Desc: "Produce eye-catching circular video snippets for Instagram, Facebook, or TikTok stories.",
            useCase3Title: "Website Embeds",
            useCase3Desc: "Add unique, circular video elements to your website for a modern, engaging look.",
            useCase4Title: "Digital Marketing",
            useCase4Desc: "Incorporate circular videos into your ads or email campaigns to stand out.",
            featuresTitle: "Why Choose Our Tool?",
            feature1: "<strong>Completely Free:</strong> Crop as many videos as you want at no cost.",
            feature2: "<strong>Privacy First:</strong> Your videos are processed in your browser and are never uploaded.",
            feature3: "<strong>Transparent Output:</strong> Downloads as a WEBM file with a transparent background.",
            feature4: "<strong>No Signup Needed:</strong> Use the tool instantly without creating an account.",
            feature5: "<strong>Works Everywhere:</strong> A fully responsive tool for desktop, tablets, and smartphones.",
            faqTitle: "Frequently Asked Questions",
            faq1q: "How do I crop a video into a circle?",
            faq1a: "Simply upload your video, adjust the circle's size and position, and click 'Start Recording'. When done, click 'Stop Recording' to process and download the video.",
            faq2q: "Will the final video have a transparent background?",
            faq2a: "Yes. The downloaded video will be a high-quality WEBM file with a transparent background outside the circle, perfect for web use.",
            faq3q: "Is it free to use this circle video crop tool?",
            faq3a: "Absolutely. Our tool is 100% free to use with no limits or watermarks.",
            faq4q: "Are my uploaded videos safe?",
            faq4a: "Yes, your privacy is our priority. The entire process happens in your web browser. Your videos are never sent to or stored on our servers.",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            contactUs: "Contact Us",
            footerRights: "All rights reserved."
        },
        es: {
            pageTitle: "Herramienta de Recorte de Vídeo en Círculo - Recortador de Vídeo Redondo Gratis",
            siteName: "circlecropimage.app",
            videoMainTitle: "Herramienta para Recortar Vídeos en Círculo",
            videoMainIntro: "Recorta fácilmente cualquier vídeo en un círculo perfecto online. Gratis, instantáneo y seguro. Ideal para avatares animados y contenido de redes sociales.",
            uploadVideoCTA: "Arrastra y suelta tu vídeo aquí, o ",
            uploadClick: "haz clic para subir",
            uploadVideoFormats: "Soporta MP4, WEBM, OGG",
            diameterLabel: "Diámetro del Círculo:",
            videoControlsTitle: "Controles de Grabación",
            startRecording: "Iniciar Grabación",
            stopRecording: "Detener Grabación",
            resetButton: "Subir Nuevo",
            downloadTitle: "Tu Vídeo Recortado",
            downloadVideo: "Descargar Vídeo (.webm)",
            processing: "Procesando, por favor espera...",
            howToTitle: "Cómo Funciona en 3 Pasos Simples",
            step1Title: "Subir Vídeo",
            step1Desc: "Arrastra y suelta tu archivo, o haz clic para seleccionar un vídeo de tu dispositivo.",
            step2Title: "Ajustar y Grabar",
            step2Desc: "Posiciona el círculo y ajusta su tamaño. Haz clic en 'Iniciar Grabación' para capturar.",
            step3Title: "Descargar",
            step3Desc: "Detén la grabación y haz clic en el botón de descarga para guardar tu nuevo vídeo circular.",
            otherToolsTitle: "Descubre Nuestras Otras Herramientas",
            tool1Title: "Recortador de Imágenes en Círculo",
            tool1Desc: "¿Necesitas recortar una imagen estática? Usa nuestro recortador de imágenes para fotos circulares perfectas.",
            useCasesTitle: "Usos Populares de Vídeos Circulares",
            useCase1Title: "Avatares de Perfil Animados",
            useCase1Desc: "Crea un look dinámico para tus perfiles en plataformas que soportan avatares de vídeo.",
            useCase2Title: "Historias en Redes Sociales",
            useCase2Desc: "Produce fragmentos de vídeo circulares llamativos para historias de Instagram, Facebook o TikTok.",
            useCase3Title: "Incrustaciones en Sitios Web",
            useCase3Desc: "Añade elementos de vídeo circulares únicos a tu sitio web para un look moderno y atractivo.",
            useCase4Title: "Marketing Digital",
            useCase4Desc: "Incorpora vídeos circulares en tus anuncios o campañas de email para destacar.",
            featuresTitle: "¿Por Qué Elegir Nuestra Herramienta?",
            feature1: "<strong>Totalmente Gratis:</strong> Recorta tantos vídeos como quieras sin coste alguno.",
            feature2: "<strong>Privacidad Primero:</strong> Tus vídeos se procesan en tu navegador y nunca se suben a nuestros servidores.",
            feature3: "<strong>Salida con Transparencia:</strong> Se descarga como un archivo WEBM con fondo transparente.",
            feature4: "<strong>Sin Registro:</strong> Usa la herramienta al instante sin necesidad de crear una cuenta.",
            feature5: "<strong>Funciona en Todas Partes:</strong> Una herramienta totalmente adaptable para ordenadores, tabletas y móviles.",
            faqTitle: "Preguntas Frecuentes",
            faq1q: "¿Cómo recorto un vídeo en un círculo?",
            faq1a: "Simplemente sube tu vídeo, ajusta el tamaño y la posición del círculo, y haz clic en 'Iniciar Grabación'. Cuando termines, haz clic en 'Detener Grabación' para procesar y descargar el vídeo.",
            faq2q: "¿El vídeo final tendrá un fondo transparente?",
            faq2a: "Sí. El vídeo descargado será un archivo WEBM de alta calidad con un fondo transparente fuera del círculo, perfecto para su uso en la web.",
            faq3q: "¿Es gratis usar esta herramienta para recortar vídeos en círculo?",
            faq3a: "Absolutamente. Nuestra herramienta es 100% gratuita, sin límites ni marcas de agua.",
            faq4q: "¿Están seguros mis vídeos subidos?",
            faq4a: "Sí, tu privacidad es nuestra prioridad. Todo el proceso ocurre en tu navegador web, lo que significa que tus vídeos nunca se envían ni se almacenan en nuestros servidores.",
            privacyPolicy: "Política de Privacidad",
            termsOfService: "Términos de Servicio",
            contactUs: "Contáctanos",
            footerRights: "Todos los derechos reservados."
        },
        pt: {
            pageTitle: "Ferramenta de Corte de Vídeo em Círculo - Cortador de Vídeo Redondo Online Grátis",
            siteName: "circlecropimage.app",
            videoMainTitle: "Ferramenta de Corte de Vídeo em Círculo",
            videoMainIntro: "Corte facilmente qualquer vídeo em um círculo perfeito online. Grátis, instantâneo e seguro. Ideal para fotos de perfil animadas e conteúdo de mídia social.",
            uploadVideoCTA: "Arraste e solte seu vídeo aqui, ou ",
            uploadClick: "clique para carregar",
            uploadVideoFormats: "Suporta MP4, WEBM, OGG",
            diameterLabel: "Diâmetro do Círculo:",
            videoControlsTitle: "Controles de Gravação",
            startRecording: "Iniciar Gravação",
            stopRecording: "Parar Gravação",
            resetButton: "Carregar Novo",
            downloadTitle: "Seu Vídeo Cortado",
            downloadVideo: "Baixar Vídeo (.webm)",
            processing: "Processando, por favor aguarde...",
            howToTitle: "Como Funciona em 3 Passos Simples",
            step1Title: "Carregar Vídeo",
            step1Desc: "Arraste e solte seu arquivo, ou clique para selecionar um vídeo do seu dispositivo.",
            step2Title: "Ajustar e Gravar",
            step2Desc: "Posicione o círculo e ajuste seu tamanho. Clique em 'Iniciar Gravação' para capturar.",
            step3Title: "Baixar",
            step3Desc: "Pare a gravação e clique no botão de download para salvar seu novo vídeo circular.",
            otherToolsTitle: "Confira Nossas Outras Ferramentas",
            tool1Title: "Cortador de Imagem em Círculo",
            tool1Desc: "Precisa cortar uma imagem estática? Use nosso cortador de imagem para fotos circulares perfeitas.",
            useCasesTitle: "Formas Populares de Usar Vídeos Circulares",
            useCase1Title: "Fotos de Perfil Animadas",
            useCase1Desc: "Crie um visual dinâmico para seus perfis em plataformas que suportam avatares de vídeo.",
            useCase2Title: "Histórias de Mídia Social",
            useCase2Desc: "Produza trechos de vídeo circulares chamativos para histórias do Instagram, Facebook ou TikTok.",
            useCase3Title: "Incorporações em Websites",
            useCase3Desc: "Adicione elementos de vídeo circulares exclusivos ao seu website para um visual moderno e envolvente.",
            useCase4Title: "Marketing Digital",
            useCase4Desc: "Incorpore vídeos circulares em seus anúncios ou campanhas de e-mail para se destacar.",
            featuresTitle: "Por Que Escolher Nossa Ferramenta?",
            feature1: "<strong>Totalmente Gratuito:</strong> Corte quantos vídeos quiser sem custo.",
            feature2: "<strong>Privacidade em Primeiro Lugar:</strong> Seus vídeos são processados no seu navegador e nunca são enviados para nossos servidores.",
            feature3: "<strong>Saída com Transparência:</strong> Baixa como um arquivo WEBM com fundo transparente.",
            feature4: "<strong>Sem Necessidade de Inscrição:</strong> Use a ferramenta instantaneamente sem criar uma conta.",
            feature5: "<strong>Funciona em Qualquer Lugar:</strong> Uma ferramenta totalmente responsiva para desktops, tablets e smartphones.",
            faqTitle: "Perguntas Frequentes",
            faq1q: "Como corto um vídeo em um círculo?",
            faq1a: "Basta carregar seu vídeo, ajustar o tamanho e a posição do círculo e clicar em 'Iniciar Gravação'. Quando terminar, clique em 'Parar Gravação' para processar e baixar o vídeo.",
            faq2q: "O vídeo final terá um fundo transparente?",
            faq2a: "Sim. O vídeo baixado será um arquivo WEBM de alta qualidade com um fundo transparente fora do círculo, perfeito para uso na web.",
            faq3q: "É gratuito usar esta ferramenta de corte de vídeo em círculo?",
            faq3a: "Com certeza. Nossa ferramenta é 100% gratuita, sem limites ou marcas d'água.",
            faq4q: "Meus vídeos enviados estão seguros?",
            faq4a: "Sim, sua privacidade é nossa prioridade. Todo o processo acontece no seu navegador, o que significa que seus vídeos nunca são enviados ou armazenados em nossos servidores.",
            privacyPolicy: "Política de Privacidade",
            termsOfService: "Termos de Serviço",
            contactUs: "Contato",
            footerRights: "Todos os direitos reservados."
        },
        ru: {
            pageTitle: "Инструмент для обрезки видео в круг - Бесплатный онлайн-инструмент для круглой обрезки видео",
            siteName: "circlecropimage.app",
            videoMainTitle: "Инструмент для Обрезки Видео в Круг",
            videoMainIntro: "Легко обрежьте любое видео в идеальный круг онлайн. Бесплатно, мгновенно и безопасно. Идеально для анимированных аватарок и контента для социальных сетей.",
            uploadVideoCTA: "Перетащите ваше видео сюда, или ",
            uploadClick: "нажмите для загрузки",
            uploadVideoFormats: "Поддерживает MP4, WEBM, OGG",
            diameterLabel: "Диаметр круга:",
            videoControlsTitle: "Управление записью",
            startRecording: "Начать запись",
            stopRecording: "Остановить запись",
            resetButton: "Загрузить новое",
            downloadTitle: "Ваше обрезанное видео",
            downloadVideo: "Скачать видео (.webm)",
            processing: "Обработка, пожалуйста, подождите...",
            howToTitle: "Как это работает за 3 простых шага",
            step1Title: "Загрузите видео",
            step1Desc: "Перетащите ваш файл или нажмите, чтобы выбрать видео с вашего устройства.",
            step2Title: "Настройте и запишите",
            step2Desc: "Расположите круг и настройте его размер. Нажмите 'Начать запись' для захвата.",
            step3Title: "Скачать",
            step3Desc: "Остановите запись и нажмите кнопку скачивания, чтобы сохранить ваше новое круглое видео.",
            otherToolsTitle: "Ознакомьтесь с другими нашими инструментами",
            tool1Title: "Обрезка изображений по кругу",
            tool1Desc: "Нужно обрезать статическое изображение? Используйте наш инструмент для обрезки изображений для идеальных круглых фотографий.",
            useCasesTitle: "Популярные способы использования круглых видео",
            useCase1Title: "Анимированные аватары",
            useCase1Desc: "Создайте динамичный образ для своих профилей на платформах, поддерживающих видеоаватары.",
            useCase2Title: "Истории в социальных сетях",
            useCase2Desc: "Создавайте привлекательные круглые видеофрагменты для историй в Instagram, Facebook или TikTok.",
            useCase3Title: "Встраивание на веб-сайты",
            useCase3Desc: "Добавьте уникальные круглые видеоэлементы на свой сайт для современного и привлекательного вида.",
            useCase4Title: "Цифровой маркетинг",
            useCase4Desc: "Используйте круглые видео в своих рекламных объявлениях или email-кампаниях, чтобы выделиться.",
            featuresTitle: "Почему стоит выбрать наш инструмент?",
            feature1: "<strong>Полностью бесплатно:</strong> Обрезайте столько видео, сколько хотите, бесплатно.",
            feature2: "<strong>Приватность прежде всего:</strong> Ваши видео обрабатываются в вашем браузере и никогда не загружаются на наши серверы.",
            feature3: "<strong>Вывод с прозрачностью:</strong> Скачивается в виде файла WEBM с прозрачным фоном.",
            feature4: "<strong>Без регистрации:</strong> Используйте инструмент мгновенно, не создавая учетную запись.",
            feature5: "<strong>Работает везде:</strong> Полностью адаптивный инструмент для настольных компьютеров, планшетов и смартфонов.",
            faqTitle: "Часто задаваемые вопросы",
            faq1q: "Как обрезать видео в круг?",
            faq1a: "Просто загрузите ваше видео, настройте размер и положение круга и нажмите 'Начать запись'. Когда закончите, нажмите 'Остановить запись' для обработки и скачивания видео.",
            faq2q: "Будет ли у итогового видео прозрачный фон?",
            faq2a: "Да. Скачанное видео будет высококачественным файлом WEBM с прозрачным фоном вне круга, идеальным для использования в вебе.",
            faq3q: "Этот инструмент для обрезки видео в круг бесплатный?",
            faq3a: "Абсолютно. Наш инструмент на 100% бесплатный, без ограничений и водяных знаков.",
            faq4q: "Безопасны ли мои загруженные видео?",
            faq4a: "Да, ваша конфиденциальность - наш приоритет. Весь процесс происходит в вашем веб-браузере, что означает, что ваши видео никогда не отправляются и не хранятся на наших серверах.",
            privacyPolicy: "Политика конфиденциальности",
            termsOfService: "Условия использования",
            contactUs: "Связаться с нами",
            footerRights: "Все права защищены."
        },
        de: {
            pageTitle: "Video-Kreisausschnitt-Werkzeug - Kostenloser Online-Video-Cropper für runde Videos",
            siteName: "circlecropimage.app",
            videoMainTitle: "Video-Kreisausschnitt-Werkzeug",
            videoMainIntro: "Schneiden Sie jedes Video einfach online in einen perfekten Kreis. Kostenlos, sofort und sicher. Ideal für animierte Profilbilder und Social-Media-Inhalte.",
            uploadVideoCTA: "Ziehen Sie Ihr Video hierher, oder ",
            uploadClick: "klicken Sie zum Hochladen",
            uploadVideoFormats: "Unterstützt MP4, WEBM, OGG",
            diameterLabel: "Kreisdurchmesser:",
            videoControlsTitle: "Aufnahmesteuerung",
            startRecording: "Aufnahme starten",
            stopRecording: "Aufnahme stoppen",
            resetButton: "Neu hochladen",
            downloadTitle: "Ihr zugeschnittenes Video",
            downloadVideo: "Video herunterladen (.webm)",
            processing: "Wird bearbeitet, bitte warten...",
            howToTitle: "So funktioniert es in 3 einfachen Schritten",
            step1Title: "Video hochladen",
            step1Desc: "Ziehen Sie Ihre Datei per Drag & Drop oder klicken Sie, um ein Video von Ihrem Gerät auszuwählen.",
            step2Title: "Anpassen & Aufnehmen",
            step2Desc: "Positionieren Sie den Kreis und passen Sie seine Größe an. Klicken Sie auf 'Aufnahme starten', um aufzunehmen.",
            step3Title: "Herunterladen",
            step3Desc: "Stoppen Sie die Aufnahme und klicken Sie auf den Download-Button, um Ihr neues rundes Video zu speichern.",
            otherToolsTitle: "Schauen Sie sich unsere anderen Tools an",
            tool1Title: "Bild-Kreisausschnitt-Werkzeug",
            tool1Desc: "Müssen Sie ein statisches Bild zuschneiden? Verwenden Sie unser Bildausschnitt-Werkzeug für perfekte runde Fotos.",
            useCasesTitle: "Beliebte Verwendungen für runde Videos",
            useCase1Title: "Animierte Profilbilder",
            useCase1Desc: "Erstellen Sie einen dynamischen Look für Ihre Profile auf Plattformen, die Video-Avatare unterstützen.",
            useCase2Title: "Social-Media-Stories",
            useCase2Desc: "Produzieren Sie auffällige runde Videoausschnitte für Instagram-, Facebook- oder TikTok-Stories.",
            useCase3Title: "Website-Einbettungen",
            useCase3Desc: "Fügen Sie Ihrer Website einzigartige, runde Videoelemente für einen modernen, ansprechenden Look hinzu.",
            useCase4Title: "Digitales Marketing",
            useCase4Desc: "Integrieren Sie runde Videos in Ihre Anzeigen oder E-Mail-Kampagnen, um aufzufallen.",
            featuresTitle: "Warum unser Werkzeug wählen?",
            feature1: "<strong>Völlig kostenlos:</strong> Schneiden Sie so viele Videos zu, wie Sie möchten, ohne Kosten.",
            feature2: "<strong>Datenschutz zuerst:</strong> Ihre Videos werden in Ihrem Browser verarbeitet und niemals auf unsere Server hochgeladen.",
            feature3: "<strong>Transparente Ausgabe:</strong> Wird als WEBM-Datei mit transparentem Hintergrund heruntergeladen.",
            feature4: "<strong>Keine Anmeldung erforderlich:</strong> Nutzen Sie das Tool sofort, ohne ein Konto erstellen zu müssen.",
            feature5: "<strong>Funktioniert überall:</strong> Ein vollständig responsives Tool für Desktops, Tablets und Smartphones.",
            faqTitle: "Häufig gestellte Fragen",
            faq1q: "Wie schneide ich ein Video in einen Kreis zu?",
            faq1a: "Laden Sie einfach Ihr Video hoch, passen Sie Größe und Position des Kreises an und klicken Sie auf 'Aufnahme starten'. Wenn Sie fertig sind, klicken Sie auf 'Aufnahme stoppen', um das Video zu verarbeiten und herunterzuladen.",
            faq2q: "Wird das endgültige Video einen transparenten Hintergrund haben?",
            faq2a: "Ja. Das heruntergeladene Video ist eine hochwertige WEBM-Datei mit einem transparenten Hintergrund außerhalb des Kreises, perfekt für die Verwendung im Web.",
            faq3q: "Ist die Nutzung dieses Werkzeugs kostenlos?",
            faq3a: "Absolut. Unser Werkzeug ist zu 100 % kostenlos, ohne Einschränkungen oder Wasserzeichen.",
            faq4q: "Sind meine hochgeladenen Videos sicher?",
            faq4a: "Ja, Ihre Privatsphäre ist unsere Priorität. Der gesamte Prozess findet in Ihrem Webbrowser statt, was bedeutet, dass Ihre Videos niemals an unsere Server gesendet oder dort gespeichert werden.",
            privacyPolicy: "Datenschutzrichtlinie",
            termsOfService: "Nutzungsbedingungen",
            contactUs: "Kontakt",
            footerRights: "Alle Rechte vorbehalten."
        },
        fr: {
            pageTitle: "Outil de Rognage Vidéo en Cercle - Rogneur de Vidéo Rond en Ligne Gratuit",
            siteName: "circlecropimage.app",
            videoMainTitle: "Outil de Rognage Vidéo en Cercle",
            videoMainIntro: "Rognez facilement n'importe quelle vidéo en un cercle parfait en ligne. Gratuit, instantané et sécurisé. Idéal pour les avatars animés et le contenu des réseaux sociaux.",
            uploadVideoCTA: "Glissez-déposez votre vidéo ici, ou ",
            uploadClick: "cliquez pour télécharger",
            uploadVideoFormats: "Supporte MP4, WEBM, OGG",
            diameterLabel: "Diamètre du Cercle :",
            videoControlsTitle: "Contrôles d'Enregistrement",
            startRecording: "Démarrer l'Enregistrement",
            stopRecording: "Arrêter l'Enregistrement",
            resetButton: "Télécharger un Nouveau",
            downloadTitle: "Votre Vidéo Rognée",
            downloadVideo: "Télécharger la Vidéo (.webm)",
            processing: "Traitement en cours, veuillez patienter...",
            howToTitle: "Comment ça marche en 3 étapes simples",
            step1Title: "Télécharger la Vidéo",
            step1Desc: "Glissez-déposez votre fichier, ou cliquez pour sélectionner une vidéo depuis votre appareil.",
            step2Title: "Ajuster & Enregistrer",
            step2Desc: "Positionnez le cercle et ajustez sa taille. Cliquez sur 'Démarrer l'Enregistrement' pour capturer.",
            step3Title: "Télécharger",
            step3Desc: "Arrêtez l'enregistrement et cliquez sur le bouton de téléchargement pour sauvegarder votre nouvelle vidéo circulaire.",
            otherToolsTitle: "Découvrez nos autres outils",
            tool1Title: "Outil de Rognage d'Image en Cercle",
            tool1Desc: "Besoin de rogner une image statique ? Utilisez notre rogneur d'images pour des photos circulaires parfaites.",
            useCasesTitle: "Utilisations Populaires des Vidéos Circulaires",
            useCase1Title: "Avatars de Profil Animés",
            useCase1Desc: "Créez un look dynamique pour vos profils sur les plateformes qui supportent les avatars vidéo.",
            useCase2Title: "Stories sur les Réseaux Sociaux",
            useCase2Desc: "Produisez des extraits vidéo circulaires accrocheurs pour les stories Instagram, Facebook ou TikTok.",
            useCase3Title: "Intégrations sur Site Web",
            useCase3Desc: "Ajoutez des éléments vidéo circulaires uniques à votre site web pour un look moderne et engageant.",
            useCase4Title: "Marketing Numérique",
            useCase4Desc: "Incorporez des vidéos circulaires dans vos publicités ou campagnes par e-mail pour vous démarquer.",
            featuresTitle: "Pourquoi Choisir Notre Outil ?",
            feature1: "<strong>Entièrement Gratuit :</strong> Rognez autant de vidéos que vous le souhaitez sans frais.",
            feature2: "<strong>Confidentialité d'Abord :</strong> Vos vidéos sont traitées dans votre navigateur et ne sont jamais téléchargées sur nos serveurs.",
            feature3: "<strong>Sortie Transparente :</strong> Se télécharge en tant que fichier WEBM avec un fond transparent.",
            feature4: "<strong>Aucune Inscription Requise :</strong> Utilisez l'outil instantanément sans créer de compte.",
            feature5: "<strong>Fonctionne Partout :</strong> Un outil entièrement réactif pour ordinateurs de bureau, tablettes et smartphones.",
            faqTitle: "Foire Aux Questions",
            faq1q: "Comment rogner une vidéo en cercle ?",
            faq1a: "Téléchargez simplement votre vidéo, ajustez la taille et la position du cercle, puis cliquez sur 'Démarrer l'Enregistrement'. Une fois terminé, cliquez sur 'Arrêter l'Enregistrement' pour traiter et télécharger la vidéo.",
            faq2q: "La vidéo finale aura-t-elle un fond transparent ?",
            faq2a: "Oui. La vidéo téléchargée sera un fichier WEBM de haute qualité avec un fond transparent à l'extérieur du cercle, parfait pour une utilisation sur le web.",
            faq3q: "L'utilisation de cet outil de rognage vidéo en cercle est-elle gratuite ?",
            faq3a: "Absolument. Notre outil est 100% gratuit, sans limites ni filigranes.",
            faq4q: "Mes vidéos téléchargées sont-elles en sécurité ?",
            faq4a: "Oui, votre vie privée est notre priorité. L'ensemble du processus se déroule dans votre navigateur web, ce qui signifie que vos vidéos ne sont jamais envoyées ou stockées sur nos serveurs.",
            privacyPolicy: "Politique de Confidentialité",
            termsOfService: "Conditions d'Utilisation",
            contactUs: "Contactez-nous",
            footerRights: "Tous droits réservés."
        },
        ja: {
            pageTitle: "円形ビデオ切り抜きツール - 無料オンライン円形ビデオクロッパー",
            siteName: "circlecropimage.app",
            videoMainTitle: "円形ビデオ切り抜きツール",
            videoMainIntro: "オンラインで任何ビデオを完璧な円形に簡単に切り抜きます。無料で即時、安全。アニメーションプロフィール写真やSNSコンテンツに最適です。",
            uploadVideoCTA: "ここにビデオをドラッグ＆ドロップするか、",
            uploadClick: "クリックしてアップロード",
            uploadVideoFormats: "MP4、WEBM、OGGをサポートしています。",
            diameterLabel: "円の直径:",
            videoControlsTitle: "録画コントロール",
            startRecording: "録画開始",
            stopRecording: "録画停止",
            resetButton: "新規アップロード",
            downloadTitle: "切り抜かれたビデオ",
            downloadVideo: "ビデオをダウンロード (.webm)",
            processing: "処理中です。しばらくお待ちください...",
            howToTitle: "3つの簡単なステップで完了",
            step1Title: "ビデオをアップロード",
            step1Desc: "ファイルをドラッグ＆ドロップするか、クリックしてデバイスからビデオを選択します。",
            step2Title: "調整して録画",
            step2Desc: "円を配置し、サイズを調整します。「録画開始」をクリックしてキャプチャします。",
            step3Title: "ダウンロード",
            step3Desc: "録画を停止し、ダウンロードボタンをクリックして新しい円形ビデオを保存します。",
            otherToolsTitle: "他のツールもチェック",
            tool1Title: "円形画像切り抜きツール",
            tool1Desc: "静止画像を切り抜く必要がありますか？当社の画像切り抜きツールで完璧な円形写真を作成しましょう。",
            useCasesTitle: "円形ビデオの人気の使い方",
            useCase1Title: "アニメーションプロフィール写真",
            useCase1Desc: "ビデオアバターをサポートするプラットフォームで、あなたのプロフィールにダイナミックな外観を作成します。",
            useCase2Title: "SNSストーリー",
            useCase2Desc: "Instagram、Facebook、TikTokのストーリー用に、目を引く円形ビデオクリップを制作します。",
            useCase3Title: "ウェブサイトへの埋め込み",
            useCase3Desc: "モダンで魅力的な外観のために、ユニークな円形ビデオ要素をウェブサイトに追加します。",
            useCase4Title: "デジタルマーケティング",
            useCase4Desc: "広告やメールキャンペーンに円形ビデオを取り入れて、他と差をつけましょう。",
            featuresTitle: "なぜ私たちのツールを選ぶのか？",
            feature1: "<strong>完全無料：</strong>料金なしで好きなだけビデオを切り抜くことができます。",
            feature2: "<strong>プライバシー第一：</strong>ビデオはブラウザで処理され、サーバーにはアップロードされません。",
            feature3: "<strong>透明な出力：</strong>透明な背景を持つWEBMファイルとしてダウンロードされます。",
            feature4: "<strong>登録不要：</strong>アカウントを作成せずにすぐにツールを使用できます。",
            feature5: "<strong>どこでも動作：</strong>デスクトップ、タブレット、スマートフォンで動作する完全レスポンシブツールです。",
            faqTitle: "よくある質問",
            faq1q: "ビデオを円形に切り抜くにはどうすればよいですか？",
            faq1a: "ビデオをアップロードし、円のサイズと位置を調整して「録画開始」をクリックするだけです。完了したら、「録画停止」をクリックしてビデオを処理し、ダウンロードします。",
            faq2q: "最終的なビデオには透明な背景が含まれますか？",
            faq2a: "はい。ダウンロードされたビデオは、円の外側が透明な背景の高品質なWEBMファイルとなり、ウェブでの使用に最適です。",
            faq3q: "この円形ビデオ切り抜きツールは無料ですか？",
            faq3a: "もちろんです。私たちのツールは100％無料で、制限や透かしはありません。",
            faq4q: "アップロードしたビデオは安全ですか？",
            faq4a: "はい、お客様のプライバシーは私たちの最優先事項です。すべてのプロセスはウェブブラウザ内で行われるため、ビデオが当社のサーバーに送信されたり保存されたりすることはありません。",
            privacyPolicy: "プライバシーポリシー",
            termsOfService: "利用規約",
            contactUs: "お問い合わせ",
            footerRights: "無断複写・転載を禁じます。"
        },
        ko: {
            pageTitle: "원형 비디오 자르기 도구 - 무료 온라인 원형 비디오 크로퍼",
            siteName: "circlecropimage.app",
            videoMainTitle: "원형 비디오 자르기 도구",
            videoMainIntro: "온라인에서 모든 비디오를 완벽한 원형으로 쉽게 자르세요. 무료이며 즉각적이고 안전합니다. 애니메이션 프로필 사진 및 소셜 미디어 콘텐츠에 이상적입니다.",
            uploadVideoCTA: "여기에 비디오를 드래그 앤 드롭하거나, ",
            uploadClick: "클릭하여 업로드",
            uploadVideoFormats: "MP4, WEBM, OGG를 지원합니다.",
            diameterLabel: "원의 직경:",
            videoControlsTitle: "녹화 제어",
            startRecording: "녹화 시작",
            stopRecording: "녹화 중지",
            resetButton: "새로 업로드",
            downloadTitle: "잘라낸 비디오",
            downloadVideo: "비디오 다운로드 (.webm)",
            processing: "처리 중입니다. 잠시만 기다려 주세요...",
            howToTitle: "3가지 간단한 단계로 사용하기",
            step1Title: "비디오 업로드",
            step1Desc: "파일을 드래그 앤 드롭하거나 클릭하여 장치에서 비디오를 선택하십시오.",
            step2Title: "조정 및 녹화",
            step2Desc: "원을 배치하고 크기를 조정한 후 '녹화 시작'을 클릭하여 캡처하십시오.",
            step3Title: "다운로드",
            step3Desc: "녹화를 중지하고 다운로드 버튼을 클릭하여 새 원형 비디오를 저장하십시오.",
            otherToolsTitle: "다른 도구 확인하기",
            tool1Title: "원형 이미지 자르기 도구",
            tool1Desc: "정적 이미지를 잘라야 하나요? 이미지 자르기 도구를 사용하여 완벽한 원형 사진을 만드세요.",
            useCasesTitle: "원형 비디오의 인기 있는 사용법",
            useCase1Title: "애니메이션 프로필 사진",
            useCase1Desc: "비디오 아바타를 지원하는 플랫폼에서 프로필에 동적인 모습을 만드십시오.",
            useCase2Title: "소셜 미디어 스토리",
            useCase2Desc: "인스타그램, 페이스북 또는 틱톡 스토리를 위해 눈길을 끄는 원형 비디오 스니펫을 제작하십시오.",
            useCase3Title: "웹사이트 임베드",
            useCase3Desc: "현대적이고 매력적인 모습을 위해 웹사이트에 독특한 원형 비디오 요소를 추가하십시오.",
            useCase4Title: "디지털 마케팅",
            useCase4Desc: "광고나 이메일 캠페인에 원형 비디오를 통합하여 돋보이게 만드십시오.",
            featuresTitle: "왜 우리 도구를 선택해야 할까요?",
            feature1: "<strong>완전 무료:</strong> 비용 없이 원하는 만큼 비디오를 자를 수 있습니다.",
            feature2: "<strong>개인 정보 보호 우선:</strong> 비디오는 브라우저에서 처리되며 서버에 업로드되지 않습니다.",
            feature3: "<strong>투명한 출력:</strong> 투명한 배경을 가진 WEBM 파일로 다운로드됩니다.",
            feature4: "<strong>가입 필요 없음:</strong> 계정을 만들지 않고도 즉시 도구를 사용하십시오.",
            feature5: "<strong>어디서나 작동:</strong> 데스크톱, 태블릿 및 스마트폰에서 작동하는 완전 반응형 도구입니다.",
            faqTitle: "자주 묻는 질문",
            faq1q: "비디오를 원으로 자르려면 어떻게 해야 하나요?",
            faq1a: "비디오를 업로드하고 원의 크기와 위치를 조정한 다음 '녹화 시작'을 클릭하기만 하면 됩니다. 완료되면 '녹화 중지'를 클릭하여 비디오를 처리하고 다운로드하십시오.",
            faq2q: "최종 비디오에 투명한 배경이 있나요?",
            faq2a: "예. 다운로드한 비디오는 원 바깥쪽에 투명한 배경이 있는 고품질 WEBM 파일이므로 웹 사용에 적합합니다.",
            faq3q: "이 원형 비디오 자르기 도구는 무료인가요?",
            faq3a: "물론입니다. 저희 도구는 제한이나 워터마크 없이 100% 무료로 사용할 수 있습니다.",
            faq4q: "업로드한 비디오는 안전한가요?",
            faq4a: "예, 귀하의 개인 정보는 저희의 최우선 과제입니다. 전체 프로세스는 웹 브라우저에서 이루어지므로 비디오가 저희 서버로 전송되거나 저장되지 않습니다.",
            privacyPolicy: "개인정보 처리방침",
            termsOfService: "서비스 이용약관",
            contactUs: "문의하기",
            footerRights: "모든 권리 보유."
        },
        zh: {
            pageTitle: "圆形视频裁剪工具 - 免费在线圆形视频裁剪器",
            siteName: "circlecropimage.app",
            videoMainTitle: "圆形视频裁剪工具",
            videoMainIntro: "在线轻松将任何视频裁剪成完美的圆形。免费、即时、安全。是动态头像和社交媒体内容的理想选择。",
            uploadVideoCTA: "将视频拖放到此处，或 ",
            uploadClick: "点击上传",
            uploadVideoFormats: "支持 MP4, WEBM, OGG 格式。",
            diameterLabel: "圆圈直径:",
            videoControlsTitle: "录制控制",
            startRecording: "开始录制",
            stopRecording: "停止录制",
            resetButton: "上传新视频",
            downloadTitle: "您裁剪的视频",
            downloadVideo: "下载视频 (.webm)",
            processing: "处理中，请稍候...",
            howToTitle: "简单三步，轻松搞定",
            step1Title: "上传视频",
            step1Desc: "拖放您的文件，或单击以从您的设备中选择一个视频。",
            step2Title: "调整并录制",
            step2Desc: "定位圆圈并调整其大小。点击“开始录制”进行捕捉。",
            step3Title: "下载",
            step3Desc: "停止录制并点击下载按钮，以保存您的新圆形视频。",
            otherToolsTitle: "查看我们的其他工具",
            tool1Title: "圆形图片裁剪器",
            tool1Desc: "需要裁剪静态图片？使用我们的图片裁剪器制作完美的圆形照片。",
            useCasesTitle: "圆形视频的常用方式",
            useCase1Title: "动态个人资料头像",
            useCase1Desc: "为支持视频头像的平台创建动态的个人资料外观。",
            useCase2Title: "社交媒体快拍",
            useCase2Desc: "为 Instagram、Facebook 或 TikTok 快拍制作引人注目的圆形视频片段。",
            useCase3Title: "网站嵌入",
            useCase3Desc: "将独特的圆形视频元素添加到您的网站中，以获得现代化、引人入胜的外观。",
            useCase4Title: "数字营销",
            useCase4Desc: "将圆形视频融入您的广告或电子邮件活动中，以脱颖而出。",
            featuresTitle: "为什么选择我们的工具？",
            feature1: "<strong>完全免费：</strong>不花一分钱，随心所欲裁剪任意数量的视频。",
            feature2: "<strong>隐私至上：</strong>您的视频直接在浏览器中处理，绝不会上传到我们的服务器。",
            feature3: "<strong>透明背景输出：</strong>下载为带有透明背景的 WEBM 文件。",
            feature4: "<strong>无需注册：</strong>无需创建帐户，即刻使用该工具。",
            feature5: "<strong>随处可用：</strong>完全响应式工具，可在台式机、平板电脑和智能手机上使用。",
            faqTitle: "常见问题解答",
            faq1q: "如何将视频裁剪成圆形？",
            faq1a: "只需上传您的视频，调整圆形的大小和位置，然后点击“开始录制”。完成后，点击“停止录制”以处理和下载视频。",
            faq2q: "最终的视频会有透明背景吗？",
            faq2a: "是的。下载的视频将是一个高质量的 WEBM 文件，圆形外部带有透明背景，非常适合网页使用。",
            faq3q: "使用这个圆形视频裁剪工具是免费的吗？",
            faq3a: "完全免费。我们的工具100%免费使用，没有限制或水印。",
            faq4q: "我上传的视频安全吗？",
            faq4a: "是的，您的隐私是我们的首要任务。整个过程都在您的网络浏览器中进行，这意味着您的视频永远不会发送到或存储在我们的服务器上。",
            privacyPolicy: "隐私政策",
            termsOfService: "服务条款",
            contactUs: "联系我们",
            footerRights: "版权所有。"
        }
    };
    const flags = { en: '🇺🇸', es: '🇪🇸', pt: '🇧🇷', ru: '🇷🇺', de: '🇩🇪', fr: '🇫🇷', ja: '🇯🇵', ko: '🇰🇷', zh: '🇨🇳' };
    let currentLang = 'en';

    function updateNavLinks(langCode) {
        document.querySelectorAll(".nav-link").forEach(link => {
            const baseUrl = link.getAttribute("href").split("?")[0];
            let newUrl = baseUrl;
            if (baseUrl.includes('.html') || baseUrl.endsWith('/')) {
                newUrl = `${baseUrl}?lang=${langCode}`;
            }
            link.setAttribute("href", newUrl);
        });
    }

    function setLanguage(langCode) {
        const effectiveLang = translations[langCode] ? langCode : "en";
        currentLang = effectiveLang;
        const translationData = translations[effectiveLang] || translations.en;
        
        document.querySelectorAll("[data-lang-key]").forEach(el => {
            const key = el.getAttribute("data-lang-key");
            if (translationData[key]) {
                el.innerHTML = translationData[key];
            }
        });

        document.title = translationData.pageTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        if(metaDesc && translationData.metaDescription) {
            metaDesc.setAttribute("content", translationData.metaDescription);
        }
        
        document.documentElement.lang = effectiveLang;

        const currentLangFlag = document.getElementById("current-lang-flag");
        if (currentLangFlag) {
            currentLangFlag.textContent = flags[effectiveLang];
        }

        const langMenu = document.getElementById("lang-switcher-menu");
        if(langMenu) {
            langMenu.classList.add("hidden", "opacity-0", "scale-95");
        }
        
        updateNavLinks(effectiveLang);
    }

    // --- LANGUAGE SWITCHER INITIALIZATION ---
    const langSwitcherBtn = document.getElementById("lang-switcher-btn");
    const langSwitcherMenu = document.getElementById("lang-switcher-menu");

    let langMenuHTML = "<div class='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>";
    const langNames = {en:"English",es:"Español",pt:"Português",ru:"Русский",de:"Deutsch",fr:"Français",ja:"日本語",ko:"한국어",zh:"中文 (简体)"};
    for (const lang in flags) {
        if(translations[lang]) {
            langMenuHTML += `<a href="?lang=${lang}" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" data-lang="${lang}"><span class="mr-3">${flags[lang]}</span> ${langNames[lang]}</a>`;
        }
    }
    langMenuHTML += "</div>";
    langSwitcherMenu.innerHTML = langMenuHTML;

    langSwitcherBtn.addEventListener("click", () => {
        langSwitcherMenu.classList.toggle("hidden");
        setTimeout(() => {
            langSwitcherMenu.classList.toggle("opacity-0");
            langSwitcherMenu.classList.toggle("scale-95");
        }, 10);
        langSwitcherBtn.setAttribute("aria-expanded", !langSwitcherMenu.classList.contains("hidden"));
    });

    document.addEventListener("click", (event) => {
        if (!langSwitcherBtn.contains(event.target) && !langSwitcherMenu.contains(event.target)) {
            langSwitcherMenu.classList.add("hidden", "opacity-0", "scale-95");
            langSwitcherBtn.setAttribute("aria-expanded", "false");
        }
    });

    langSwitcherMenu.addEventListener("click", (event) => {
        event.preventDefault();
        const link = event.target.closest("a");
        if (link && link.dataset.lang) {
            const lang = link.dataset.lang;
            setLanguage(lang);
            try {
                const url = new URL(window.location);
                url.searchParams.set("lang", lang);
                window.history.pushState({}, "", url);
            } catch (e) {
                console.warn("Could not update URL with pushState.", e);
            }
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const initialLang = urlParams.get("lang") || "en";
    setLanguage(initialLang);

    document.getElementById("footer-year").textContent = new Date().getFullYear();

    // --- VIDEO CROPPER LOGIC ---
    const videoUploadContainer = document.getElementById('video-upload-container');
    const videoDropArea = document.getElementById('video-drop-area');
    const videoFileInput = document.getElementById('video-file-input');
    const videoEditorContainer = document.getElementById('video-editor-container');
    const videoPlayer = document.getElementById('video-player');
    const videoWrapper = document.querySelector('.canvas-wrapper');
    const guideCanvas = document.getElementById('video-guide-canvas');
    const guideCtx = guideCanvas.getContext('2d');
    const diameterSlider = document.getElementById('diameter-slider');
    const videoControlsContainer = document.getElementById('video-controls-container');
    const startRecBtn = document.getElementById('start-rec-btn');
    const stopRecBtn = document.getElementById('stop-rec-btn');
    const videoResetBtn = document.getElementById('video-reset-btn');
    const videoResetBtn2 = document.getElementById('video-reset-btn-2');
    const videoResultContainer = document.getElementById('video-result-container');
    const downloadVideoBtn = document.getElementById('download-video-btn');
    const processingNotice = document.getElementById('video-processing-notice');

    let videoFile = null;
    let webmRecorder;
    let webmChunks = [];
    let animationFrameId;
    let recordingTimerInterval = null;

    let circlePosition = { x: 0, y: 0 };
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };

    function handleVideoUpload(file) {
        if (file && file.type.startsWith('video/')) {
            videoFile = file;
            videoPlayer.src = URL.createObjectURL(videoFile);
            videoUploadContainer.classList.add('hidden');
            videoEditorContainer.classList.remove('hidden');
            videoControlsContainer.classList.remove('hidden');
            videoResultContainer.classList.add('hidden');
        }
    }

    function drawVideoGuide() {
        if (!guideCanvas) return;
        const diam = parseInt(diameterSlider.value, 10);
        const radius = diam / 2;
        const centerX = (guideCanvas.width / 2) + circlePosition.x;
        const centerY = (guideCanvas.height / 2) + circlePosition.y;
        
        guideCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
        guideCtx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        guideCtx.beginPath();
        guideCtx.rect(0, 0, guideCanvas.width, guideCanvas.height);
        guideCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
        guideCtx.fill();

        guideCtx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        guideCtx.lineWidth = 2;
        guideCtx.beginPath();
        guideCtx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        guideCtx.stroke();
    }

    function formatTime(ms) {
        const seconds = Math.floor(ms / 1000);
        const ss = String(seconds % 60).padStart(2, '0');
        const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
        return `${mm}:${ss}`;
    }

    videoPlayer.addEventListener('loadedmetadata', () => {
        const aspect = videoPlayer.videoWidth / videoPlayer.videoHeight;
        const containerWidth = videoPlayer.parentElement.clientWidth;
        guideCanvas.width = containerWidth;
        guideCanvas.height = containerWidth / aspect;
        diameterSlider.max = Math.min(guideCanvas.width, guideCanvas.height);
        diameterSlider.value = diameterSlider.max * 0.8;
        drawVideoGuide();
        videoPlayer.play();
    });

    function startRecording() {
        startRecBtn.classList.add('hidden');
        stopRecBtn.classList.remove('hidden');
        processingNotice.classList.add('hidden');
        videoResultContainer.classList.add('hidden');
        diameterSlider.disabled = true;

        const diam = parseInt(diameterSlider.value, 10);
        const transCanvas = document.createElement('canvas');
        transCanvas.width = diam;
        transCanvas.height = diam;
        const transCtx = transCanvas.getContext('2d');

        function renderLoop() {
            const scale = videoPlayer.videoWidth / guideCanvas.width;
            const radiusInVideoPixels = (diam / 2) * scale;
            const centerXInVideoPixels = (videoPlayer.videoWidth / 2) + (circlePosition.x * scale);
            const centerYInVideoPixels = (videoPlayer.videoHeight / 2) + (circlePosition.y * scale);
            const sx = centerXInVideoPixels - radiusInVideoPixels;
            const sy = centerYInVideoPixels - radiusInVideoPixels;
            const sWidth = 2 * radiusInVideoPixels;
            const sHeight = sWidth;
            transCtx.clearRect(0, 0, diam, diam);
            transCtx.save();
            transCtx.beginPath();
            transCtx.arc(diam / 2, diam / 2, diam / 2, 0, Math.PI * 2);
            transCtx.clip();
            transCtx.drawImage(videoPlayer, sx, sy, sWidth, sHeight, 0, 0, diam, diam);
            transCtx.restore();
            animationFrameId = requestAnimationFrame(renderLoop);
        }

        let audioStream = null;
        if (videoPlayer.mozCaptureStream) {
            audioStream = videoPlayer.mozCaptureStream().getAudioTracks().length > 0 ? new MediaStream(videoPlayer.mozCaptureStream().getAudioTracks()) : null;
        } else if (videoPlayer.captureStream) {
             audioStream = videoPlayer.captureStream().getAudioTracks().length > 0 ? new MediaStream(videoPlayer.captureStream().getAudioTracks()) : null;
        }
        const transStream = transCanvas.captureStream(30);
        if(audioStream && audioStream.getAudioTracks().length > 0) {
          const transAudioTrack = audioStream.getAudioTracks()[0].clone();
          transStream.addTrack(transAudioTrack);
        }
        webmRecorder = new MediaRecorder(transStream, { mimeType: 'video/webm; codecs=vp9,opus' });
        webmChunks = [];
        webmRecorder.ondataavailable = e => webmChunks.push(e.data);

        webmRecorder.onstop = () => {
            const blob = new Blob(webmChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const originalFilename = videoFile.name;
            const baseFilename = originalFilename.lastIndexOf('.') > 0 ? originalFilename.substring(0, originalFilename.lastIndexOf('.')) : originalFilename;
            downloadVideoBtn.href = url;
            downloadVideoBtn.download = `${baseFilename}-circle.webm`;
        };
        
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        webmRecorder.start();
        videoPlayer.play();
        renderLoop();

        const startTime = Date.now();
        const originalStopText = translations[currentLang].stopRecording;
        recordingTimerInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            stopRecBtn.textContent = `${originalStopText} (${formatTime(elapsedTime)})`;
        }, 1000);
    }

    function stopRecording() {
        if (recordingTimerInterval) {
            clearInterval(recordingTimerInterval);
            recordingTimerInterval = null;
        }
        if (stopRecBtn) stopRecBtn.textContent = translations[currentLang].stopRecording;

        if(videoPlayer.played) videoPlayer.pause();
        if (webmRecorder && webmRecorder.state !== "inactive") webmRecorder.stop();
        cancelAnimationFrame(animationFrameId);
        stopRecBtn.classList.add('hidden');
        startRecBtn.classList.remove('hidden');
        videoControlsContainer.classList.add('hidden');
        videoResultContainer.classList.remove('hidden');
        processingNotice.classList.remove('hidden');
        setTimeout(() => processingNotice.classList.add('hidden'), 2000);
        diameterSlider.disabled = false;
    }

    function resetVideoTool() {
        if (webmRecorder && webmRecorder.state !== 'inactive') {
            stopRecording();
        }
        if(videoPlayer.src) {
            URL.revokeObjectURL(videoPlayer.src);
            videoPlayer.src = "";
        }
        videoFile = null;
        videoFileInput.value = "";
        videoUploadContainer.classList.remove('hidden');
        videoEditorContainer.classList.add('hidden');
        videoControlsContainer.classList.add('hidden');
        videoResultContainer.classList.add('hidden');
        if (downloadVideoBtn.href) URL.revokeObjectURL(downloadVideoBtn.href);
        downloadVideoBtn.href = "#";
        diameterSlider.disabled = false;
        circlePosition = { x: 0, y: 0 };
    }

    if(videoPlayer) videoPlayer.onended = stopRecording;
    if(videoDropArea) videoDropArea.addEventListener('click', () => videoFileInput.click());
    if(videoDropArea) videoDropArea.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') videoFileInput.click(); });
    if(videoFileInput) videoFileInput.addEventListener('change', (e) => handleVideoUpload(e.target.files[0]));
    if(videoDropArea) videoDropArea.addEventListener('dragover', e => { e.preventDefault(); e.stopPropagation(); videoDropArea.classList.add('drag-over'); });
    if(videoDropArea) videoDropArea.addEventListener('dragleave', e => { e.preventDefault(); e.stopPropagation(); videoDropArea.classList.remove('drag-over'); });
    if(videoDropArea) videoDropArea.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); videoDropArea.classList.remove('drag-over'); handleVideoUpload(e.dataTransfer.files[0]); });

    if(diameterSlider) diameterSlider.addEventListener('input', () => {
        drawVideoGuide();
    });

    if(startRecBtn) startRecBtn.addEventListener('click', startRecording);
    if(stopRecBtn) stopRecBtn.addEventListener('click', stopRecording);
    if(videoResetBtn) videoResetBtn.addEventListener('click', resetVideoTool);
    if(videoResetBtn2) videoResetBtn2.addEventListener('click', resetVideoTool);

    function getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        const clientX = evt.clientX || (evt.touches && evt.touches[0].clientX);
        const clientY = evt.clientY || (evt.touches && evt.touches[0].clientY);
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function handleDragStart(evt) {
        evt.preventDefault();
        const clickPos = getMousePos(guideCanvas, evt);
        const radius = parseInt(diameterSlider.value, 10) / 2;
        const centerX = (guideCanvas.width / 2) + circlePosition.x;
        const centerY = (guideCanvas.height / 2) + circlePosition.y;
        const dx = clickPos.x - centerX;
        const dy = clickPos.y - centerY;
        if (dx * dx + dy * dy <= radius * radius) {
            isDragging = true;
            dragStart = getMousePos(guideCanvas, evt);
            if (videoWrapper) videoWrapper.classList.add('is-dragging');
        }
    }

    function handleDragMove(evt) {
        if (!isDragging) return;
        evt.preventDefault();
        const pos = getMousePos(guideCanvas, evt);
        const dx = pos.x - dragStart.x;
        const dy = pos.y - dragStart.y;
        
        circlePosition.x += dx;
        circlePosition.y += dy;

        const radius = parseInt(diameterSlider.value, 10) / 2;
        const maxX = (guideCanvas.width / 2) - radius;
        const maxY = (guideCanvas.height / 2) - radius;
        
        circlePosition.x = Math.max(-maxX, Math.min(maxX, circlePosition.x));
        circlePosition.y = Math.max(-maxY, Math.min(maxY, circlePosition.y));
        
        dragStart = pos;
        drawVideoGuide();
    }

    function handleDragEnd() {
        isDragging = false;
        if (videoWrapper) videoWrapper.classList.remove('is-dragging');
    }

    if(guideCanvas) {
        guideCanvas.addEventListener('mousemove', (evt) => {
            if(isDragging) return;
            const pos = getMousePos(guideCanvas, evt);
            const radius = parseInt(diameterSlider.value, 10) / 2;
            const centerX = (guideCanvas.width / 2) + circlePosition.x;
            const centerY = (guideCanvas.height / 2) + circlePosition.y;
            const dx = pos.x - centerX;
            const dy = pos.y - centerY;
            if (dx * dx + dy * dy <= radius * radius) {
                guideCanvas.style.cursor = 'move';
            } else {
                guideCanvas.style.cursor = 'default';
            }
        });

        guideCanvas.addEventListener('mouseleave', () => {
            guideCanvas.style.cursor = 'default';
        });

        guideCanvas.addEventListener('mousedown', handleDragStart);
        guideCanvas.addEventListener('touchstart', handleDragStart, { passive: false });
    }

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('touchmove', handleDragMove, { passive: false });

    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchend', handleDragEnd);
});