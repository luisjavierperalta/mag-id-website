'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2ad516ff] max-w-md mx-auto">
      {/* Fixed Navigation/Header */}
      <div className="fixed top-0 left-0 right-0 bg-[#e6e6e6ff] px-4 py-2 flex justify-between items-center z-50 max-w-md mx-auto shadow-sm border-b border-gray-100">
        {/* Left side - empty for balance */}
        <div className="w-20"></div>
        
        {/* Center - MAG® ID Logo */}
        <div className="flex items-center justify-center">
          <Image 
            src="/newlogo.png" 
            alt="MAG ID Logo" 
            width={800} 
            height={300} 
            className="h-28 w-auto"
            priority
          />
        </div>
        
        {/* Right side - Register Button */}
        <button className="bg-[#2ad516ff] hover:bg-[#25c014] text-white px-8 py-4 rounded-full font-normal text-lg w-28 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 flex items-center justify-center">
          Register
        </button>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-32"></div>

      {/* Hero Section with Background Image */}
      <div className="relative h-96">
        {/* Background Image - man-ad.jpg */}
        <div className="absolute inset-0">
          <Image 
            src="/man-ad.jpg" 
            alt="Background" 
            fill
            className="object-cover object-center object-bottom"
            priority
          />
        </div>
        
        {/* Overlay Text */}
        <div className="relative z-10 h-full flex flex-col justify-center p-6">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-4 opacity-90 font-['Arial'] leading-tight">
              Get paid, easy.
            </h1>
            <p className="text-2xl opacity-80 font-['Arial']">
              https://mymag-id.com/marc
            </p>
          </div>
        </div>
        
        {/* Powered by stripe.com at bottom */}
        <div className="absolute bottom-4 right-6 z-10">
          <p className="text-white text-base font-semibold opacity-100">
            Powered by stripe.com
          </p>
        </div>
      </div>

      {/* Information Section - Green Block */}
      <div className="bg-[#2ad516ff] text-white px-6 py-8">
        <h2 className="text-4xl font-bold mb-2 font-['Calibri']">What's MAG® ID?</h2>
        <h3 className="text-3xl font-semibold mb-6 font-['Calibri']">Glad you asked!</h3>
        
        <div className="space-y-3 text-lg leading-relaxed">
          <p>MAG® ID It's like WhatsApp, but for money.</p>
          <p>You get a personal money link like <span className="font-bold">https://mymag-id.com/jasmine</span>, your Wallet.</p>
          <p>Anyone can <span className="font-bold">just tap it & scan your QR Code</span> to pay you instantly.</p>
          <p>No bank account numbers, no waiting, no fees.</p>
          
          <div className="mt-6 space-y-2">
            <p className="text-lg leading-tight">You see your balance right in the app, can split bills with friends, or get paid for anything.</p>
            <p className="text-lg leading-tight">Like helping with homework, reselling sneakers, or your side hustle.</p>
            <p className="text-lg leading-tight">And if you want, you can also buy bitcoin and even get a free Visa card that works in stores and Apple Pay.</p>
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
            Powered by stripe.com
          </p>
        </div>
      </div>

      {/* New Dark Section */}
      <div className="bg-[#1a1a1aff] text-white px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 font-['Calibri']">
          If you register, you get:
        </h2>
        
        <div className="space-y-10">
          {/* Feature 1 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 font-['Calibri']">1 Personal $CashTag Wallet:</h3>
            <p className="text-base mb-4 text-blue-300 font-medium">https://mymag-id.com/jasmine</p>
            <div className="space-y-2 text-base leading-relaxed">
              <p>Share it with anyone to get paid instantly.</p>
              <p>Split pizza🍕, Uber rides🚗, or travel costs in seconds.</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 font-['Calibri']">2 Get a free Visa/MasterCard card for shopping or Apple Pay💳</h3>
          </div>
          
          {/* Feature 3 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 font-['Calibri']">3 Buy, sell, or hold bitcoin₿ in the same app.</h3>
          </div>
        </div>
        
        {/* Register Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#2ad516ff] hover:bg-[#25c014] text-white px-8 py-4 rounded-full font-normal text-lg w-28 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 flex items-center justify-center">
            Register
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
            Powered by stripe.com
          </p>
        </div>
      </div>

      {/* Final Green Footer Section */}
      <div className="bg-[#2ad516ff] text-white px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 font-['Calibri']">
          Download the App
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
          <a href="#" className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200">Terms</a>
          <a href="#" className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200">Privacy</a>
          <a href="#" className="text-sm font-medium hover:underline cursor-pointer transition-colors duration-200">Contacts</a>
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