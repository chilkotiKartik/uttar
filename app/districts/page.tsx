"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import { TempleArch } from "@/components/decorative-elements"
import { InteractiveMap } from "@/components/interactive-map"
import { VideoGallery } from "@/components/video-gallery"

export default function DistrictsPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  // Districts data with updated images and information
  const districts = [
    {
      id: 1,
      name: language === "hi" ? "देहरादून" : "Dehradun",
      image:
        "https://images.unsplash.com/photo-1590332763673-cae4df71c3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "उत्तराखंड की अंतरिम राजधानी और राज्य का सबसे बड़ा शहर। यह अपने बोर्डिंग स्कूलों, प्राकृतिक सौंदर्य और धार्मिक स्थलों के लिए प्रसिद्ध है।"
          : "The interim capital of Uttarakhand and the largest city in the state. It is famous for its boarding schools, natural beauty, and religious sites.",
      attractions:
        language === "hi"
          ? "रोबर्ट्स केव, मसूरी, तपकेश्वर महादेव मंदिर, सहस्त्रधारा, एफआरआई"
          : "Robber's Cave, Mussoorie, Tapkeshwar Temple, Sahastradhara, FRI",
      color: "uttarakhand-mountain",
    },
    {
      id: 2,
      name: language === "hi" ? "नैनीताल" : "Nainital",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "झीलों की नगरी के रूप में प्रसिद्ध, नैनीताल अपनी प्राकृतिक सुंदरता और शांत वातावरण के लिए जाना जाता है। यह उत्तराखंड के सबसे लोकप्रिय पर्यटन स्थलों में से एक है।"
          : "Known as the 'City of Lakes', Nainital is famous for its natural beauty and serene environment. It is one of the most popular tourist destinations in Uttarakhand.",
      attractions:
        language === "hi"
          ? "नैनीताल झील, नैना देवी मंदिर, स्नो व्यू, टिफिन टॉप, भीमताल"
          : "Naini Lake, Naina Devi Temple, Snow View, Tiffin Top, Bhimtal",
      color: "uttarakhand-pine",
    },
    {
      id: 3,
      name: language === "hi" ? "हरिद्वार" : "Haridwar",
      image:
        "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "हिंदुओं के सबसे पवित्र स्थानों में से एक, हरिद्वार गंगा नदी के तट पर स्थित है और अपने धार्मिक महत्व के लिए प्रसिद्ध है। यह चार धाम यात्रा का प्रवेश द्वार भी है।"
          : "One of the holiest places for Hindus, Haridwar is located on the banks of the Ganges River and is famous for its religious significance. It is also the gateway to the Char Dham pilgrimage.",
      attractions:
        language === "hi"
          ? "हर की पौड़ी, मनसा देवी मंदिर, चंडी देवी मंदिर, गंगा आरती, राजाजी नेशनल पार्क"
          : "Har Ki Pauri, Mansa Devi Temple, Chandi Devi Temple, Ganga Aarti, Rajaji National Park",
      color: "uttarakhand-sunset",
    },
    {
      id: 4,
      name: language === "hi" ? "ऋषिकेश" : "Rishikesh",
      image:
        "https://images.unsplash.com/photo-1591018533273-5a45e534a05d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "योग की राजधानी के रूप में प्रसिद्ध, ऋषिकेश गंगा नदी के तट पर स्थित है और अपने आध्यात्मिक महत्व के लिए जाना जाता है। यह साहसिक गतिविधियों का भी एक प्रमुख केंद्र है।"
          : "Known as the 'Yoga Capital', Rishikesh is located on the banks of the Ganges River and is known for its spiritual significance. It is also a major center for adventure activities.",
      attractions:
        language === "hi"
          ? "लक्ष्मण झूला, राम झूला, त्रिवेणी घाट, नीलकंठ महादेव, राफ्टिंग"
          : "Laxman Jhula, Ram Jhula, Triveni Ghat, Neelkanth Mahadev, Rafting",
      color: "uttarakhand-flower",
    },
    {
      id: 5,
      name: language === "hi" ? "उत्तरकाशी" : "Uttarkashi",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "उत्तरकाशी, जिसका अर्थ है 'उत्तर का काशी', अपने धार्मिक महत्व और प्राकृतिक सौंदर्य के लिए प्रसिद्ध है। यह गंगोत्री और यमुनोत्री के लिए प्रवेश द्वार है।"
          : "Uttarkashi, which means 'Kashi of the North', is famous for its religious significance and natural beauty. It is the gateway to Gangotri and Yamunotri.",
      attractions:
        language === "hi"
          ? "गंगोत्री, यमुनोत्री, नेहरू पर्वतारोहण संस्थान, विशनाथ मंदिर, दयारा बुग्याल"
          : "Gangotri, Yamunotri, Nehru Institute of Mountaineering, Vishwanath Temple, Dayara Bugyal",
      color: "uttarakhand-wood",
    },
    {
      id: 6,
      name: language === "hi" ? "चमोली" : "Chamoli",
      image:
        "https://images.unsplash.com/photo-1626715305289-eb3a372f9275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "चमोली, जिसे 'गढ़वाल की राजधानी' भी कहा जाता है, अपने प्राकृतिक सौंदर्य और धार्मिक महत्व के लिए प्रसिद्ध है। यह बद्रीनाथ और हेमकुंड साहिब के लिए प्रवेश द्वार है।"
          : "Chamoli, also known as the 'Capital of Garhwal', is famous for its natural beauty and religious significance. It is the gateway to Badrinath and Hemkund Sahib.",
      attractions:
        language === "hi"
          ? "बद्रीनाथ, हेमकुंड साहिब, वैली ऑफ फ्लावर्स, अलकनंदा नदी, नंदा देवी राष्ट्रीय उद्यान"
          : "Badrinath, Hemkund Sahib, Valley of Flowers, Alaknanda River, Nanda Devi National Park",
      color: "uttarakhand-mountain",
    },
    {
      id: 7,
      name: language === "hi" ? "पौड़ी गढ़वाल" : "Pauri Garhwal",
      image:
        "https://images.unsplash.com/photo-1574531732319-351283c73760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "पौड़ी गढ़वाल अपने प्राकृतिक सौंदर्य, शांत वातावरण और धार्मिक स्थलों के लिए प्रसिद्ध है। यह कई प्रसिद्ध मंदिरों और झीलों का घर है।"
          : "Pauri Garhwal is famous for its natural beauty, serene environment, and religious sites. It is home to several famous temples and lakes.",
      attractions:
        language === "hi"
          ? "खिरसू, कंडोलिया देवता मंदिर, तारा देवी मंदिर, चौथान, कोट गढ़"
          : "Khirsu, Kandoliya Devta Temple, Tara Devi Temple, Chauthan, Kot Garh",
      color: "uttarakhand-pine",
    },
    {
      id: 8,
      name: language === "hi" ? "टिहरी गढ़वाल" : "Tehri Garhwal",
      image:
        "https://images.unsplash.com/photo-1590332763673-cae4df71c3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "टिहरी गढ़वाल अपने प्राकृतिक सौंदर्य, टिहरी बांध और साहसिक गतिविधियों के लिए प्रसिद्ध है। यह कई प्रसिद्ध मंदिरों और झीलों का भी घर है।"
          : "Tehri Garhwal is famous for its natural beauty, Tehri Dam, and adventure activities. It is also home to several famous temples and lakes.",
      attractions:
        language === "hi"
          ? "टिहरी झील, चंबा, कंडिताल, सुरकंडा देवी मंदिर, धनौल्टी"
          : "Tehri Lake, Chamba, Kanditaal, Surkanda Devi Temple, Dhanaulti",
      color: "uttarakhand-sunset",
    },
    {
      id: 9,
      name: language === "hi" ? "रुद्रप्रयाग" : "Rudraprayag",
      image:
        "https://images.unsplash.com/photo-1626715305289-eb3a372f9275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "गढ़वाल" : "Garhwal",
      description:
        language === "hi"
          ? "रुद्रप्रयाग अपने धार्मिक महत्व और प्राकृतिक सौंदर्य के लिए प्रसिद्ध है। यह अलकनंदा और मंदाकिनी नदियों के संगम पर स्थित है और केदारनाथ के लिए प्रवेश द्वार है।"
          : "Rudraprayag is famous for its religious significance and natural beauty. It is located at the confluence of the Alaknanda and Mandakini rivers and is the gateway to Kedarnath.",
      attractions:
        language === "hi"
          ? "रुद्रनाथ मंदिर, केदारनाथ, चोपता, कर्णप्रयाग, अगस्त्यमुनि"
          : "Rudranath Temple, Kedarnath, Chopta, Karnaprayag, Agastyamuni",
      color: "uttarakhand-flower",
    },
    {
      id: 10,
      name: language === "hi" ? "अल्मोड़ा" : "Almora",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "अल्मोड़ा अपने प्राकृतिक सौंदर्य, सांस्कृतिक विरासत और शांत वातावरण के लिए प्रसिद्ध है। यह कई प्रसिद्ध मंदिरों और प्राकृतिक स्थलों का घर है।"
          : "Almora is famous for its natural beauty, cultural heritage, and serene environment. It is home to several famous temples and natural sites.",
      attractions:
        language === "hi"
          ? "कटारमल सूर्य मंदिर, चित्रई मंदिर, सिमतोला, कौसानी, जागेश्वर"
          : "Katarmal Sun Temple, Chitai Temple, Simtola, Kausani, Jageshwar",
      color: "uttarakhand-wood",
    },
    {
      id: 11,
      name: language === "hi" ? "बागेश्वर" : "Bageshwar",
      image:
        "https://images.unsplash.com/photo-1591018533273-5a45e534a05d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "बागेश्वर अपने धार्मिक महत्व और प्राकृतिक सौंदर्य के लिए प्रसिद्ध है। यह सरयू और गोमती नदियों के संगम पर स्थित है और कई प्रसिद्ध मंदिरों का घर है।"
          : "Bageshwar is famous for its religious significance and natural beauty. It is located at the confluence of the Saryu and Gomti rivers and is home to several famous temples.",
      attractions:
        language === "hi"
          ? "बागनाथ मंदिर, चंद्रेश्वर मंदिर, पिंडारी ग्लेशियर, कंडा, बैजनाथ"
          : "Bagnath Temple, Chandreshwar Temple, Pindari Glacier, Kanda, Baijnath",
      color: "uttarakhand-mountain",
    },
    {
      id: 12,
      name: language === "hi" ? "पिथौरागढ़" : "Pithoragarh",
      image:
        "https://images.unsplash.com/photo-1626620411842-2eb0b1391c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "पिथौरागढ़, जिसे 'मिनी कश्मीर' भी कहा जाता है, अपने प्राकृतिक सौंदर्य और सांस्कृतिक विरासत के लिए प्रसिद्ध है। यह कैलाश मानसरोवर यात्रा के लिए प्रवेश द्वार है।"
          : "Pithoragarh, also known as 'Mini Kashmir', is famous for its natural beauty and cultural heritage. It is the gateway for the Kailash Mansarovar Yatra.",
      attractions:
        language === "hi"
          ? "कैलाश मानसरोवर यात्रा, मुनस्यारी, चौकोरी, धारचूला, नारायण आश्रम"
          : "Kailash Mansarovar Yatra, Munsyari, Chaukori, Dharchula, Narayan Ashram",
      color: "uttarakhand-pine",
    },
    {
      id: 13,
      name: language === "hi" ? "चंपावत" : "Champawat",
      image:
        "https://images.unsplash.com/photo-1574531732319-351283c73760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      region: language === "hi" ? "कुमाऊँ" : "Kumaon",
      description:
        language === "hi"
          ? "चंपावत अपने ऐतिहासिक महत्व, प्राकृतिक सौंदर्य और सांस्कृतिक विरासत के लिए प्रसिद्ध है। यह कई प्रसिद्ध मंदिरों और ऐतिहासिक स्थलों का घर है।"
          : "Champawat is famous for its historical significance, natural beauty, and cultural heritage. It is home to several famous temples and historical sites.",
      attractions:
        language === "hi"
          ? "बालेश्वर मंदिर, लोहाघाट, पूर्णागिरि, अबोट माउंट, बनबसा"
          : "Baleshwar Temple, Lohaghat, Purnagiri, Abbott Mount, Banasaa",
      color: "uttarakhand-sunset",
    },
  ]

  // Filter districts based on search query
  const filteredDistricts = districts.filter((district) => {
    return (
      district.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      district.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      district.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      district.attractions.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  // Videos data for the video gallery
  const districtVideos = [
    {
      id: "P5J5SrPyqYs",
      title: {
        en: "Uttarakhand Tourism - The Land of Gods",
        hi: "उत्तराखंड पर्यटन - देवताओं की भूमि",
      },
      description: {
        en: "A beautiful overview of Uttarakhand's scenic beauty and cultural heritage.",
        hi: "उत्तराखंड के प्राकृतिक सौंदर्य और सांस्कृतिक विरासत का एक सुंदर अवलोकन।",
      },
      type: "youtube",
      thumbnail: "https://img.youtube.com/vi/P5J5SrPyqYs/maxresdefault.jpg",
    },
    {
      id: "Jf3tTIQTD4w",
      title: {
        en: "Char Dham Yatra - The Sacred Pilgrimage",
        hi: "चार धाम यात्रा - पवित्र तीर्थयात्रा",
      },
      description: {
        en: "Explore the sacred Char Dham pilgrimage route in Uttarakhand.",
        hi: "उत्तराखंड में पवित्र चार धाम तीर्थयात्रा मार्ग का अन्वेषण करें।",
      },
      type: "youtube",
      thumbnail: "https://img.youtube.com/vi/Jf3tTIQTD4w/maxresdefault.jpg",
    },
    {
      id: "qHVJOSgXVSM",
      title: {
        en: "Valley of Flowers - A Paradise on Earth",
        hi: "फूलों की घाटी - धरती पर स्वर्ग",
      },
      description: {
        en: "Discover the breathtaking Valley of Flowers National Park in Chamoli district.",
        hi: "चमोली जिले में स्थित अद्भुत फूलों की घाटी राष्ट्रीय उद्यान की खोज करें।",
      },
      type: "youtube",
      thumbnail: "https://img.youtube.com/vi/qHVJOSgXVSM/maxresdefault.jpg",
    },
    {
      id: "CqQXDY3BvEo",
      title: {
        en: "Rishikesh - Adventure Capital of India",
        hi: "ऋषिकेश - भारत की साहसिक राजधानी",
      },
      description: {
        en: "Experience the thrill of adventure activities in Rishikesh, the adventure capital of India.",
        hi: "भारत की साहसिक राजधानी ऋषिकेश में साहसिक गतिविधियों का रोमांच अनुभव करें।",
      },
      type: "youtube",
      thumbnail: "https://img.youtube.com/vi/CqQXDY3BvEo/maxresdefault.jpg",
    },
    {
      id: "CfJzrmS4sKw",
      title: {
        en: "Nainital - The Lake District",
        hi: "नैनीताल - झील जिला",
      },
      description: {
        en: "Explore the beautiful hill station of Nainital and its surrounding lakes.",
        hi: "सुंदर हिल स्टेशन नैनीताल और उसके आसपास की झीलों का अन्वेषण करें।",
      },
      type: "youtube",
      thumbnail: "https://img.youtube.com/vi/CfJzrmS4sKw/maxresdefault.jpg",
    },
    {
      id: "CnZxcgVOTVU",
      title: {
        en: "Uttarakhand Folk Culture and Traditions",
        hi: "उत्तराखंड की लोक संस्कृति और परंपराएँ",
      },
      description: {
        en: "A glimpse into the rich folk culture and traditions of Uttarakhand.",
        hi: "उत्तराखंड की समृद्ध लोक संस्कृति और परंपराओं की एक झलक।",
      },
      type: "youtube",
      thumbnail: "https://img.youtube.com/vi/CnZxcgVOTVU/maxresdefault.jpg",
    },
  ]

  return (
    <div className="py-12 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden mb-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Uttarakhand Districts"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-uttarakhand-mountain/50 via-transparent to-uttarakhand-wood/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-float backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-pahadi text-white drop-shadow-lg">
              {language === "hi" ? "उत्तराखंड के जिले" : "Districts of Uttarakhand"}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-pahadi drop-shadow-lg">
              {language === "hi"
                ? "उत्तराखंड के सभी 13 जिलों के बारे में जानकारी, उनकी विशेषताएँ, प्रमुख पर्यटन स्थल और सांस्कृतिक विरासत"
                : "Information about all 13 districts of Uttarakhand, their characteristics, major tourist attractions, and cultural heritage"}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Interactive Map Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "इंटरैक्टिव मानचित्र" : "Interactive Map"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi mb-8">
              {language === "hi"
                ? "उत्तराखंड के जिलों का अन्वेषण करने के लिए मानचित्र पर क्लिक करें"
                : "Click on the map to explore the districts of Uttarakhand"}
            </p>
          </div>
          <InteractiveMap />
        </section>

        {/* Tabs for View Options */}
        <Tabs defaultValue="grid" className="mb-8">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="grid" className="font-pahadi">
                {language === "hi" ? "ग्रिड व्यू" : "Grid View"}
              </TabsTrigger>
              <TabsTrigger value="list" className="font-pahadi">
                {language === "hi" ? "लिस्ट व्यू" : "List View"}
              </TabsTrigger>
            </TabsList>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={language === "hi" ? "जिले खोजें..." : "Search districts..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
              />
            </div>
          </div>

          {/* Grid View */}
          <TabsContent value="grid" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDistricts.map((district) => (
                <Card
                  key={district.id}
                  className={`border-2 border-${district.color}/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={district.image || "/placeholder.svg"}
                      alt={district.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 text-xs px-2 py-1 rounded-full font-pahadi">
                      {district.region}
                    </div>
                  </div>
                  <CardHeader className="relative z-10 -mt-12 pb-0">
                    <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                      <div className="flex justify-between items-center">
                        <CardTitle className={`text-${district.color} dark:text-uttarakhand-meadow font-pahadi`}>
                          {district.name}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                      <div className="space-y-3 pt-4">
                        <p className="text-muted-foreground font-pahadi line-clamp-3">{district.description}</p>
                        <div className="flex items-start gap-2">
                          <MapPin
                            className={`h-5 w-5 text-${district.color} dark:text-uttarakhand-meadow mt-1 flex-shrink-0`}
                          />
                          <span className="text-sm text-muted-foreground font-pahadi">
                            <span className="font-bold">{language === "hi" ? "प्रमुख आकर्षण:" : "Key Attractions:"}</span>{" "}
                            {district.attractions}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-white dark:bg-gray-900 pt-0 pb-4 px-4">
                    <Link href={`/districts/${district.id}`} className="w-full">
                      <Button
                        className={`w-full bg-${district.color} hover:bg-${district.color}/90 text-white font-pahadi`}
                      >
                        {language === "hi" ? "और जानें" : "Learn More"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* List View */}
          <TabsContent value="list" className="mt-6">
            <div className="space-y-4">
              {filteredDistricts.map((district) => (
                <Card
                  key={district.id}
                  className={`border-2 border-${district.color}/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/4 h-48 md:h-auto">
                      <Image
                        src={district.image || "/placeholder.svg"}
                        alt={district.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3
                            className={`text-xl font-bold text-${district.color} dark:text-uttarakhand-meadow font-pahadi`}
                          >
                            {district.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-pahadi">
                            {district.region} {language === "hi" ? "क्षेत्र" : "Region"}
                          </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-pahadi">
                          {language === "hi" ? "जिला" : "District"} #{district.id}
                        </div>
                      </div>
                      <p className="text-muted-foreground font-pahadi mb-4">{district.description}</p>
                      <div className="flex items-start gap-2 mb-4">
                        <MapPin
                          className={`h-5 w-5 text-${district.color} dark:text-uttarakhand-meadow mt-1 flex-shrink-0`}
                        />
                        <span className="text-sm text-muted-foreground font-pahadi">
                          <span className="font-bold">{language === "hi" ? "प्रमुख आकर्षण:" : "Key Attractions:"}</span>{" "}
                          {district.attractions}
                        </span>
                      </div>
                      <Link href={`/districts/${district.id}`}>
                        <Button className={`bg-${district.color} hover:bg-${district.color}/90 text-white font-pahadi`}>
                          {language === "hi" ? "और जानें" : "Learn More"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* No results message */}
        {filteredDistricts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground font-pahadi">
              {language === "hi"
                ? "कोई परिणाम नहीं मिला। कृपया अपनी खोज बदलें।"
                : "No results found. Please try a different search."}
            </p>
          </div>
        )}

        {/* Video Gallery Section */}
        <section className="mt-16 mb-12">
          <VideoGallery
            videos={districtVideos}
            title={{
              en: "Explore Uttarakhand Through Videos",
              hi: "वीडियो के माध्यम से उत्तराखंड का अन्वेषण करें",
            }}
            description={{
              en: "Watch these amazing videos to get a glimpse of Uttarakhand's beauty and culture",
              hi: "उत्तराखंड के सौंदर्य और संस्कृति की झलक पाने के लिए इन अद्भुत वीडियो को देखें",
            }}
          />
        </section>

        {/* Back to About Uttarakhand */}
        <div className="text-center mt-12">
          <Link href="/about-uttarakhand">
            <Button
              variant="outline"
              className="border-uttarakhand-mountain text-uttarakhand-mountain hover:bg-uttarakhand-mountain/10 dark:border-uttarakhand-meadow dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow/10 font-pahadi"
            >
              {language === "hi" ? "उत्तराखंड के बारे में वापस जाएँ" : "Back to About Uttarakhand"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

