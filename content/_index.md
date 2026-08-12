---
title: 'Eubiotic - produse cu bacterii benefice pentru întreaga familie'
description: 'Descoperă produsele Eubiotic, suplimente create special pentru a susține sănătatea digestivă și imunitară prin bacterii benefice recomandate de specialiști.'

resources:
  - name: 'immunityBackground'
    src: '/images/about/hero-image-about-eubiotic.png'
  - name: 'immunityVideoPoster'
    src: '/images/eubiotic-imunoflu-video.png'
  - name: 'counterBackground'
    src: '/images/counter-bkg-homepage-eubiotic.png'
  - name: 'faqImage'
    src: '/images/happy-young-family-with-little-children-resting-n-2022-11-02-02-40-27-utc-scaled.webp'

blocksFolder: 'homepage'
blocks:
  - component: 'hero'
    title: 'Ține viața în echilibru'
    video: '/video/eubiotic-travel-20s-digital.mp4'
    poster: '/images/video-cover.png'
    ctaLabel: 'Află cum te ajută Eubiotic'
    ctaHref: '#beneficii'

  - component: 'benefits'
    id: 'beneficii'
    ariaLabel: 'Beneficiile Eubiotic'
    items:
      - icon: 'medic-icon'
        title: 'Tulpini recomandate'
        description: 'Conține tulpini bacteriene benefice organismului recomandate de Organizația Mondială de Gastro-Enterologie'
        animationDelay: 0
      - icon: 'intestines-icon'
        title: 'Garanția viabilității'
        description: 'Viabilitatea bacteriilor este garantată prin teste specifice'
        animationDelay: 100
      - icon: 'cell-icon'
        title: 'Bacterii benefice'
        description: 'Fiecare produs Eubiotic conține o combinație de microorganisme benefice ce sunt susținute de studii clinice publicate'
        animationDelay: 200
      - icon: 'chemestry-icon'
        title: 'Microfloră sănătoasă'
        description: 'Reechilibrează microflora intestinală în situațiile în care este necesară regenerarea acesteia'
        animationDelay: 300

  - component: 'products'
    title: 'Gama Eubiotic'
    description: 'Gamă complexă adaptată fiecărei vârste, din prima zi de viață'
    carouselId: 'home-products'
    ctaLabel: 'Vezi întreaga gamă Eubiotic'

  - component: 'immunity-video'
    title: 'Beneficii multiple pentru tine și imunitatea ta!'
    description: 'Află mai multe despre cum te ajută Eubiotic ImunoFlu'
    image: 'immunityBackground'
    videoPoster: 'immunityVideoPoster'
    videoPosterAlt: 'Eubiotic ImunoFlu'
    videoUrl: 'https://www.youtube-nocookie.com/embed/xIFkCo5IIIQ?feature=oembed&start&end&wmode=opaque&loop=0&controls=0&mute=0&rel=0&modestbranding=0&autoplay=1'
    videoLabel: 'Redă videoclipul Eubiotic ImunoFlu'
    modalId: 'home-immunity-video'

  - component: 'featured-blog'
    title: 'Blog Eubiotic<sup>®</sup>'
    description: 'Cele mai noi articole de pe blogul Eubiotic<sup>®</sup>, tips&amp;tricks pentru vacanțe reușite și multe altele'

  - component: 'stats'
    ariaLabel: 'Eubiotic în cifre'
    image: 'counterBackground'
    items:
      - value: 8
        label: 'tipuri de bacterii benefice'
      - value: 5
        label: 'produse în gama Eubiotic'
        animationDelay: 100
      - value: 5
        prefix: '+'
        suffix: 'M'
        label: '5.496.921 cutii de Eubiotic vândute în ultimii 6 ani*'
        animationDelay: 200
      - value: 19
        suffix: ' ani'
        label: 'de Eubiotic în România'
        animationDelay: 300

  - component: 'faq'
    title: 'Întrebări frecvente'
    description: 'Cele mai frecvente întrebări despre ce este și cum se utilizează Eubiotic<sup>®</sup>'
    image: 'faqImage'
    imageAlt: 'Familie petrecând timp împreună în natură'
    answerLabel: 'Pentru toate produsele din gama Eubiotic<sup>®</sup>'
    answerLinkLabel: 'citește tot răspunsul.'
---
