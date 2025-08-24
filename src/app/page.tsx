'use client'

import Image from 'next/image'
import { useState } from 'react'

type Language = 'en' | 'it' | 'es' | 'de'

export default function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)

  const translations = {
    en: {
      register: 'Register',
      heroTitle: 'Get paid, easy.',
      heroUrl: 'https://mymag-id.com/marc',
      poweredBy: 'Powered by stripe.com',
      whatIsMag: "What's MAG® ID?",
      gladYouAsked: 'Glad you asked!',
      magDescription: "MAG® ID It's like WhatsApp, but for money.",
      payMeLink: 'You get a personal PayMe link like',
      tapAndScan: 'Anyone can just tap it & scan your QR Code to pay you instantly.',
      noFees: 'No bank account numbers, no waiting, no fees.',
      balanceText: 'You see your balance right in the app, can split bills with friends, or get paid for anything.',
      sideHustle: 'Like helping with homework, reselling sneakers, or your side hustle.',
      bitcoinCard: 'You can also buy & hold bitcoin, and even get a free Visa card that works in stores and Apple Pay.',
      ifYouRegister: 'If you register, you get:',
      feature1Title: '1 Personal $CashTag Wallet:',
      feature1Desc: 'Share it with anyone to get paid instantly.',
      feature1Details: 'Split pizza🍕, Uber rides🚗, or travel costs in seconds.',
      feature2Title: '2 Get a free Visa/MasterCard card for shopping or Apple Pay💳',
      feature3Title: '3 Buy, sell, or hold bitcoin₿ in the same app.',
      downloadApp: 'Download the App',
      terms: 'Terms',
      privacy: 'Privacy',
      contacts: 'Contacts'
    },
    it: {
      register: 'Registrati',
      heroTitle: 'Ricevi pagamenti, facile.',
      heroUrl: 'https://mymag-id.com/marc',
      poweredBy: 'Powered by stripe.com',
      whatIsMag: "Cos'è MAG® ID?",
      gladYouAsked: 'Ottima domanda!',
      magDescription: "MAG® ID È come WhatsApp, ma per i soldi.",
      payMeLink: 'Ottieni un link PayMe personale come',
      tapAndScan: 'Chiunque può toccarlo e scansionare il tuo QR Code per pagarti istantaneamente.',
      noFees: 'Nessun numero di conto bancario, nessuna attesa, nessuna commissione.',
      balanceText: 'Vedi il tuo saldo direttamente nell\'app, puoi dividere le bollette con gli amici o essere pagato per qualsiasi cosa.',
      sideHustle: 'Come aiutare con i compiti, rivendere sneakers o il tuo lavoro extra.',
      bitcoinCard: 'Puoi anche comprare e tenere bitcoin, e persino ottenere una carta Visa gratuita che funziona nei negozi e Apple Pay.',
      ifYouRegister: 'Se ti registri, ottieni:',
      feature1Title: '1 Portafoglio $CashTag Personale:',
      feature1Desc: 'Condividilo con chiunque per essere pagato istantaneamente.',
      feature1Details: 'Dividi pizza🍕, corse Uber🚗, o costi di viaggio in secondi.',
      feature2Title: '2 Ottieni una carta Visa/MasterCard gratuita per lo shopping o Apple Pay💳',
      feature3Title: '3 Compra, vendi o tieni bitcoin₿ nella stessa app.',
      downloadApp: 'Scarica l\'App',
      terms: 'Termini',
      privacy: 'Privacy',
      contacts: 'Contatti'
    },
    es: {
      register: 'Registrarse',
      heroTitle: 'Recibe pagos, fácil.',
      heroUrl: 'https://mymag-id.com/marc',
      poweredBy: 'Powered by stripe.com',
      whatIsMag: "¿Qué es MAG® ID?",
      gladYouAsked: '¡Buena pregunta!',
      magDescription: "MAG® ID Es como WhatsApp, pero para dinero.",
      payMeLink: 'Obtienes un enlace PayMe personal como',
      tapAndScan: 'Cualquiera puede tocarlo y escanear tu código QR para pagarte al instante.',
      noFees: 'Sin números de cuenta bancaria, sin esperas, sin comisiones.',
      balanceText: 'Ves tu saldo directamente en la app, puedes dividir facturas con amigos o ser pagado por cualquier cosa.',
      sideHustle: 'Como ayudar con tareas, revender zapatillas o tu trabajo extra.',
      bitcoinCard: 'También puedes comprar y mantener bitcoin, e incluso obtener una tarjeta Visa gratuita que funciona en tiendas y Apple Pay.',
      ifYouRegister: 'Si te registras, obtienes:',
      feature1Title: '1 Billetera $CashTag Personal:',
      feature1Desc: 'Compártela con cualquiera para ser pagado al instante.',
      feature1Details: 'Divide pizza🍕, viajes Uber🚗, o costos de viaje en segundos.',
      feature2Title: '2 Obtén una tarjeta Visa/MasterCard gratuita para compras o Apple Pay💳',
      feature3Title: '3 Compra, vende o mantén bitcoin₿ en la misma app.',
      downloadApp: 'Descargar la App',
      terms: 'Términos',
      privacy: 'Privacidad',
      contacts: 'Contactos'
    },
    de: {
      register: 'Registrieren',
      heroTitle: 'Geld erhalten, einfach.',
      heroUrl: 'https://mymag-id.com/marc',
      poweredBy: 'Powered by stripe.com',
      whatIsMag: "Was ist MAG® ID?",
      gladYouAsked: 'Gute Frage!',
      magDescription: "MAG® ID Ist wie WhatsApp, aber für Geld.",
      payMeLink: 'Du bekommst einen persönlichen PayMe-Link wie',
      tapAndScan: 'Jeder kann darauf tippen und deinen QR-Code scannen, um dich sofort zu bezahlen.',
      noFees: 'Keine Bankkontonummern, kein Warten, keine Gebühren.',
      balanceText: 'Du siehst dein Guthaben direkt in der App, kannst Rechnungen mit Freunden teilen oder für alles bezahlt werden.',
      sideHustle: 'Wie bei Hausaufgaben helfen, Sneaker weiterverkaufen oder dein Nebenjob.',
      bitcoinCard: 'Du kannst auch Bitcoin kaufen und halten, und sogar eine kostenlose Visa-Karte bekommen, die in Geschäften und Apple Pay funktioniert.',
      ifYouRegister: 'Wenn du dich registrierst, bekommst du:',
      feature1Title: '1 Persönliche $CashTag Brieftasche:',
      feature1Desc: 'Teile sie mit jedem, um sofort bezahlt zu werden.',
      feature1Details: 'Teile Pizza🍕, Uber-Fahrten🚗, oder Reisekosten in Sekunden.',
      feature2Title: '2 Bekomme eine kostenlose Visa/MasterCard für Einkäufe oder Apple Pay💳',
      feature3Title: '3 Kaufe, verkaufe oder halte Bitcoin₿ in derselben App.',
      downloadApp: 'App herunterladen',
      terms: 'Bedingungen',
      privacy: 'Datenschutz',
      contacts: 'Kontakte'
    }
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-[#2ad516ff]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#e6e6e6ff] z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center space-x-1 px-3 py-1 text-sm bg-white rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <span>{language.toUpperCase()}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showLanguageDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 min-w-[120px]">
                <button
                  onClick={() => { setLanguage('en'); setShowLanguageDropdown(false); }}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => { setLanguage('it'); setShowLanguageDropdown(false); }}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Italiano
                </button>
                <button
                  onClick={() => { setLanguage('es'); setShowLanguageDropdown(false); }}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Español
                </button>
                <button
                  onClick={() => { setLanguage('de'); setShowLanguageDropdown(false); }}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Deutsch
                </button>
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Image 
              src="/newlogo.png" 
              alt="MAG ID Logo" 
              width={120} 
              height={48} 
              className="h-8 md:h-12 w-auto"
              priority
            />
          </div>

          {/* Register Button */}
          <button className="bg-[#2ad516ff] hover:bg-[#25c014] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-normal text-sm md:text-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 flex items-center justify-center min-w-[80px] md:min-w-[100px]">
            {t.register}
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image 
          src="/new-new.jpg" 
          alt="Hero" 
          fill
          className="object-cover object-center object-bottom"
          priority
        />
        
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-start px-4 md:px-8">
          <div className="text-white">
            <h1 className="text-3xl md:text-6xl font-['Arial'] mb-2 md:mb-4">{t.heroTitle}</h1>
            <p className="text-lg md:text-2xl font-['Arial']">{t.heroUrl}</p>
          </div>
        </div>
        
        {/* Powered by stripe.com at bottom */}
        <div className="absolute bottom-4 right-4 md:right-6 z-10">
          <p className="text-white text-sm md:text-base font-normal opacity-100">
            {t.poweredBy}
          </p>
        </div>
      </div>

      {/* Information Section - Green Block */}
      <div className="bg-[#2ad516ff] text-white px-4 md:px-6 py-6 md:py-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 font-['Calibri']">{t.whatIsMag}</h2>
        <h3 className="text-xl md:text-3xl font-semibold mb-4 md:mb-6 font-['Calibri']">{t.gladYouAsked}</h3>
        
        <div className="space-y-3 text-base md:text-lg leading-relaxed">
          <p>{t.magDescription}</p>
          <p>{t.payMeLink} <span className="font-bold">https://mymag-id.com/jasmine</span>.</p>
          <p>{t.tapAndScan}</p>
          <p>{t.noFees}</p>
          
          <div className="mt-4 md:mt-6 space-y-2">
            <p className="text-base md:text-lg leading-tight">{t.balanceText}</p>
            <p className="text-base md:text-lg leading-tight">{t.sideHustle}</p>
            <p className="text-base md:text-lg leading-tight">{t.bitcoinCard}</p>
          </div>
        </div>
      </div>

      {/* Card Image Section */}
      <div className="relative w-full">
        <Image 
          src="/card (3).png" 
          alt="Card" 
          width={400} 
          height={250} 
          className="w-full h-auto"
          priority
        />
        {/* Powered by stripe.com at bottom of card */}
        <div className="absolute bottom-3 right-4">
          <p className="text-white text-sm font-normal opacity-80">
            {t.poweredBy}
          </p>
        </div>
      </div>

      {/* New Dark Section */}
      <div className="bg-[#1a1a1aff] text-white px-4 md:px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-['Calibri']">
          {t.ifYouRegister}
        </h2>
        
        <div className="space-y-10">
          {/* Feature 1 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 font-['Calibri']">{t.feature1Title}</h3>
            <p className="text-base mb-4 text-blue-300 font-medium">https://mymag-id.com/jasmine</p>
            <div className="space-y-2 text-base leading-relaxed">
              <p>{t.feature1Desc}</p>
              <p>{t.feature1Details}</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 font-['Calibri']">{t.feature2Title}</h3>
          </div>
          
          {/* Feature 3 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 font-['Calibri']">{t.feature3Title}</h3>
          </div>
        </div>
        
        {/* Register Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#2ad516ff] hover:bg-[#25c014] text-white px-8 py-4 rounded-full font-normal text-lg w-28 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 flex items-center justify-center">
            {t.register}
          </button>
        </div>
      </div>

      {/* QR Code Image Section */}
      <div className="relative w-full">
        <Image 
          src="/QR.jpeg" 
          alt="QR Code" 
          width={400} 
          height={400} 
          className="w-full h-auto"
          priority
        />
        {/* Powered by stripe.com at bottom of QR */}
        <div className="absolute bottom-3 right-4">
          <p className="text-white text-sm font-normal opacity-80">
            {t.poweredBy}
          </p>
        </div>
      </div>

      {/* Final Green Footer Section */}
      <div className="bg-[#2ad516ff] text-white px-4 md:px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 font-['Calibri']">
          {t.downloadApp}
        </h2>
        
        <div className="flex items-center justify-center space-x-6">
          {/* Mag ID App Icon */}
          <div className="text-center">
            <Image 
              src="/icon.png" 
              alt="Mag ID App Icon" 
              width={80} 
              height={80} 
              className="w-20 h-20 rounded-2xl mb-2"
            />
            <p className="text-sm font-medium">Mag ID</p>
          </div>
          
          {/* App Store Icons */}
          <div className="text-center">
            <Image 
              src="/apps.png" 
              alt="App Store Icons" 
              width={200} 
              height={80} 
              className="w-48 h-auto"
            />
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          <a href="#" className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200">{t.terms}</a>
          <a href="#" className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200">{t.privacy}</a>
          <a href="#" className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200">{t.contacts}</a>
        </div>
        
        {/* Legal Disclaimer */}
        <div className="mt-12 pb-8 text-center">
          <div className="text-base leading-relaxed text-white max-w-4xl mx-auto space-y-3">
            <p>MAG®ID is a service of Mediaair Brands Limited CRN.13799465.</p>
            <p>All money compliance & legal infrastructure provided by stripe, Inc.</p>
            <p>The MAG®ID Visa Card® is issued by Stripe, Inc. Card may be used everywhere Visa is accepted.</p>
            <p>MAG®ID account required. Eligibility requirements and terms apply.</p>
            <p>Custody, buying, selling, and transfer services for cryptocurrency are performed for MAG®ID by our licensed service provider, MoonPay.com.</p>
            <p className="mt-6 font-medium">©2025 Mediaair Brands Limited CRN.13799465. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 