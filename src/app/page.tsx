'use client'

import Image from 'next/image'
import { useState } from 'react'

type Language = 'en' | 'it' | 'es' | 'de'

export default function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showContactsModal, setShowContactsModal] = useState(false)

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
              src="/icon.png" 
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
      <div className="relative w-full h-screen -mt-16 md:-mt-20">
        <Image 
          src="/new-new.jpg" 
          alt="Hero" 
          fill
          className="object-cover object-center object-bottom"
          priority
        />
        
        {/* Logo in top left */}
        <div className="absolute top-16 md:top-20 left-4 md:left-6 z-20">
          <Image 
            src="/logo-logo.png" 
            alt="MAG ID Logo" 
            width={600} 
            height={240} 
            className="w-64 md:w-96 h-auto"
            priority
          />
        </div>
        
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-start px-4 md:px-8 pt-16 md:pt-20">
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
          <button 
            onClick={() => setShowTermsModal(true)}
            className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200"
          >
            {t.terms}
          </button>
          <button 
            onClick={() => setShowPrivacyModal(true)}
            className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200"
          >
            {t.privacy}
          </button>
          <button 
            onClick={() => setShowContactsModal(true)}
            className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200"
          >
            {t.contacts}
          </button>
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

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
                <p>
                  We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                
                <p>
                  By using our service, you agree to the collection and use of information in accordance with this policy.
                </p>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold mb-2">Founder & CEO of Mediaair Brands Limited CRN. 13799465</p>
                  <p><strong>Email:</strong> luisjavierperalta@aol.com</p>
                  <p><strong>Phone:</strong> +39 351 9911 296</p>
                  <p><strong>Registered office address:</strong> Office 11450 182-184 High Street North, East Ham, London, E6 2JA</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="bg-[#2ad516ff] hover:bg-[#25c014] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <h3 className="font-semibold text-base mt-6 mb-2">Use License:</h3>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Mediaair Brands Limited's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Mediaair Brands Limited's website;</li>
                  <li>Remove any copyright or other proprietary notations from the materials; or</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by Mediaair Brands Limited at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                </p>
                
                <h3 className="font-semibold text-base mt-6 mb-2">Disclaimer:</h3>
                <p>
                  The materials on Mediaair Brands Limited's website are provided on an 'as is' basis. Mediaair Brands Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  Further, Mediaair Brands Limited does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
                
                <h3 className="font-semibold text-base mt-6 mb-2">Limitations:</h3>
                <p>
                  In no event shall Mediaair Brands Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mediaair Brands Limited's website, even if Mediaair Brands Limited or a Mediaair Brands Limited authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
                
                <h3 className="font-semibold text-base mt-6 mb-2">Accuracy of materials:</h3>
                <p>
                  The materials appearing on Mediaair Brands Limited's website could include technical, typographical, or photographic errors. Mediaair Brands Limited does not warrant that any of the materials on its website are accurate, complete or current. Mediaair Brands Limited may make changes to the materials contained on its website at any time without notice. However Mediaair Brands Limited does not make any commitment to update the materials.
                </p>
                
                <h3 className="font-semibold text-base mt-6 mb-2">Links:</h3>
                <p>
                  Mediaair Brands Limited has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mediaair Brands Limited of the site. Use of any such linked website is at the user's own risk.
                </p>
                
                <h3 className="font-semibold text-base mt-6 mb-2">Modifications:</h3>
                <p>
                  Mediaair Brands Limited may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
                
                <h3 className="font-semibold text-base mt-6 mb-2">Governing Law:</h3>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold mb-2">Founder & CEO of Mediaair Brands Limited CRN. 13799465</p>
                  <p><strong>Registered office address:</strong> Office 11450 182-184 High Street North, East Ham, London, E6 2JA</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="bg-[#2ad516ff] hover:bg-[#25c014] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contacts Modal */}
      {showContactsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                <button
                  onClick={() => setShowContactsModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold mb-2">Founder & CEO of Mediaair Brands Limited</p>
                  <p className="font-semibold text-base mb-4">Luis Javier Peralta</p>
                  
                  <div className="space-y-2">
                    <p><strong>Support Email:</strong> support@mymag-id.com</p>
                    <p><strong>Email:</strong> luisjavierperalta@aol.com</p>
                    <p><strong>Phone:</strong> +39 351 9911 296</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowContactsModal(false)}
                  className="bg-[#2ad516ff] hover:bg-[#25c014] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 