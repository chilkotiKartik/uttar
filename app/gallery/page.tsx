"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play, X, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AipanBorder } from "@/components/decorative-elements"

export default function GalleryPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string
    alt: string
    category: string
    location: string
    description: string
  }>(null)

  // Sample gallery data
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "नैनीताल झील" : "Nainital Lake",
      category: "landscapes",
      location: language === "hi" ? "नैनीताल, उत्तराखंड" : "Nainital, Uttarakhand",
      description:
        language === "hi"
          ? "नैनीताल झील उत्तराखंड के सबसे प्रसिद्ध पर्यटन स्थलों में से एक है। इसे 'झीलों की नगरी' भी कहा जाता है।"
          : "Nainital Lake is one of the most famous tourist destinations in Uttarakhand. It is also called the 'City of Lakes'.",
    },
    {
      src: "https://images.unsplash.com/photo-1626715305289-eb3a372f9275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "केदारनाथ मंदिर" : "Kedarnath Temple",
      category: "temples",
      location: language === "hi" ? "केदारनाथ, उत्तराखंड" : "Kedarnath, Uttarakhand",
      description:
        language === "hi"
          ? "केदारनाथ मंदिर हिंदुओं के पवित्र चार धाम यात्रा का एक हिस्सा है और भगवान शिव को समर्पित है।"
          : "Kedarnath Temple is part of the sacred Char Dham pilgrimage for Hindus and is dedicated to Lord Shiva.",
    },
    {
      src: "https://images.unsplash.com/photo-1544639160-f91ece4e79b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "कुमाऊँनी लोक नृत्य" : "Kumaoni Folk Dance",
      category: "culture",
      location: language === "hi" ? "अल्मोड़ा, उत्तराखंड" : "Almora, Uttarakhand",
      description:
        language === "hi"
          ? "कुमाऊँनी लोक नृत्य उत्तराखंड की समृद्ध सांस्कृतिक विरासत का एक महत्वपूर्ण हिस्सा है।"
          : "Kumaoni folk dance is an important part of the rich cultural heritage of Uttarakhand.",
    },
    {
      src: "https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "बद्रीनाथ मंदिर" : "Badrinath Temple",
      category: "temples",
      location: language === "hi" ? "बद्रीनाथ, उत्तराखंड" : "Badrinath, Uttarakhand",
      description:
        language === "hi"
          ? "बद्रीनाथ मंदिर चार धाम यात्रा का एक हिस्सा है और भगवान विष्णु को समर्पित है।"
          : "Badrinath Temple is part of the Char Dham pilgrimage and is dedicated to Lord Vishnu.",
    },
    {
      src: "https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "गढ़वाली पारंपरिक वेशभूषा" : "Garhwali Traditional Attire",
      category: "culture",
      location: language === "hi" ? "देहरादून, उत्तराखंड" : "Dehradun, Uttarakhand",
      description:
        language === "hi"
          ? "गढ़वाली पारंपरिक वेशभूषा उत्तराखंड की समृद्ध सांस्कृतिक विरासत का प्रतिनिधित्व करती है।"
          : "Garhwali traditional attire represents the rich cultural heritage of Uttarakhand.",
    },
    {
      src: "https://images.unsplash.com/photo-1590332763673-cae4df71c3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "मसूरी का दृश्य" : "View of Mussoorie",
      category: "landscapes",
      location: language === "hi" ? "मसूरी, उत्तराखंड" : "Mussoorie, Uttarakhand",
      description:
        language === "hi"
          ? "मसूरी, जिसे 'पहाड़ों की रानी' भी कहा जाता है, उत्तराखंड के सबसे लोकप्रिय हिल स्टेशनों में से एक है।"
          : "Mussoorie, also known as the 'Queen of Hills', is one of the most popular hill stations in Uttarakhand.",
    },
    {
      src: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "रिषिकेश का दृश्य" : "View of Rishikesh",
      category: "landscapes",
      location: language === "hi" ? "ऋषिकेश, उत्तराखंड" : "Rishikesh, Uttarakhand",
      description:
        language === "hi"
          ? "ऋषिकेश, जिसे 'योग की राजधानी' भी कहा जाता है, गंगा नदी के तट पर स्थित है और अपने आध्यात्मिक महत्व के लिए जाना जाता है।"
          : "Rishikesh, also known as the 'Yoga Capital', is located on the banks of the Ganges River and is known for its spiritual significance.",
    },
    {
      src: "https://images.unsplash.com/photo-1531766024287-9e8a7bb7f5f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "उत्तराखंडी व्यंजन" : "Uttarakhandi Cuisine",
      category: "food",
      location: language === "hi" ? "उत्तराखंड" : "Uttarakhand",
      description:
        language === "hi"
          ? "उत्तराखंडी व्यंजन स्थानीय सामग्री और पारंपरिक पाक विधियों का उपयोग करके तैयार किया जाता है।"
          : "Uttarakhandi cuisine is prepared using local ingredients and traditional cooking methods.",
    },
    {
      src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "अल्पाइन फूल" : "Alpine Flowers",
      category: "flora",
      location: language === "hi" ? "वैली ऑफ फ्लावर्स, उत्तराखंड" : "Valley of Flowers, Uttarakhand",
      description:
        language === "hi"
          ? "वैली ऑफ फ्लावर्स नेशनल पार्क अपने विविध अल्पाइन फूलों और वनस्पतियों के लिए प्रसिद्ध है।"
          : "Valley of Flowers National Park is famous for its diverse alpine flowers and vegetation.",
    },
    {
      src: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "हिमालयी वन्यजीव" : "Himalayan Wildlife",
      category: "fauna",
      location: language === "hi" ? "जिम कॉर्बेट नेशनल पार्क, उत्तराखंड" : "Jim Corbett National Park, Uttarakhand",
      description:
        language === "hi"
          ? "जिम कॉर्बेट नेशनल पार्क भारत का सबसे पुराना राष्ट्रीय उद्यान है और अपने बाघों और विविध वन्यजीवों के लिए प्रसिद्ध है।"
          : "Jim Corbett National Park is the oldest national park in India and is famous for its tigers and diverse wildlife.",
    },
    {
      src: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "गंगा आरती" : "Ganga Aarti",
      category: "culture",
      location: language === "hi" ? "हरिद्वार, उत्तराखंड" : "Haridwar, Uttarakhand",
      description:
        language === "hi"
          ? "हरिद्वार में गंगा आरती एक आध्यात्मिक अनुष्ठान है जो हर शाम गंगा नदी के तट पर आयोजित किया जाता है।"
          : "Ganga Aarti in Haridwar is a spiritual ritual that is performed every evening on the banks of the Ganges River.",
    },
    {
      src: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: language === "hi" ? "अल्मोड़ा का दृश्य" : "View of Almora",
      category: "landscapes",
      location: language === "hi" ? "अल्मोड़ा, उत्तराखंड" : "Almora, Uttarakhand",
      description:
        language === "hi"
          ? "अल्मोड़ा उत्तराखंड का एक खूबसूरत हिल स्टेशन है जो अपने प्राकृतिक सौंदर्य और सांस्कृतिक विरासत के लिए जाना जाता है।"
          : "Almora is a beautiful hill station in Uttarakhand known for its natural beauty and cultural heritage.",
    },
  ]

  // Filter gallery items based on active tab and search query
  const filteredItems = galleryItems.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab
    const matchesSearch =
      item.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="py-12 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AipanBorder className="inline-block mb-4">
            <h1 className="text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "उत्तराखंड की झलक" : "Glimpses of Uttarakhand"}
            </h1>
          </AipanBorder>
          <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
            {language === "hi"
              ? "उत्तराखंड के सुंदर दृश्यों, संस्कृति, और विरासत की तस्वीरें"
              : "Pictures of Uttarakhand's beautiful landscapes, culture, and heritage"}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === "hi" ? "तस्वीरें खोजें..." : "Search images..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
            />
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full justify-center">
            <TabsList className="bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10">
              <TabsTrigger value="all" className="font-pahadi">
                {language === "hi" ? "सभी" : "All"}
              </TabsTrigger>
              <TabsTrigger value="landscapes" className="font-pahadi">
                {language === "hi" ? "प्राकृतिक दृश्य" : "Landscapes"}
              </TabsTrigger>
              <TabsTrigger value="culture" className="font-pahadi">
                {language === "hi" ? "संस्कृति" : "Culture"}
              </TabsTrigger>
              <TabsTrigger value="temples" className="font-pahadi">
                {language === "hi" ? "मंदिर" : "Temples"}
              </TabsTrigger>
              <TabsTrigger value="food" className="font-pahadi">
                {language === "hi" ? "व्यंजन" : "Cuisine"}
              </TabsTrigger>
              <TabsTrigger value="flora" className="font-pahadi">
                {language === "hi" ? "वनस्पति" : "Flora"}
              </TabsTrigger>
              <TabsTrigger value="fauna" className="font-pahadi">
                {language === "hi" ? "जीव-जंतु" : "Fauna"}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold font-pahadi">{item.alt}</h3>
                  <p className="text-sm text-white/80 font-pahadi">{item.location}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground font-pahadi">
              {language === "hi"
                ? "कोई परिणाम नहीं मिला। कृपया अपने फ़िल्टर बदलें।"
                : "No results found. Please try different filters."}
            </p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              <button
                className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-bold mb-2 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                    {selectedImage.alt}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 font-pahadi">{selectedImage.location}</p>
                  <p className="text-muted-foreground mb-6 font-pahadi">{selectedImage.description}</p>
                  <div className="mt-auto flex justify-between">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
                      onClick={() => {
                        const currentIndex = filteredItems.findIndex((item) => item.src === selectedImage.src)
                        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
                        setSelectedImage(filteredItems[prevIndex])
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
                      onClick={() => {
                        const currentIndex = filteredItems.findIndex((item) => item.src === selectedImage.src)
                        const nextIndex = (currentIndex + 1) % filteredItems.length
                        setSelectedImage(filteredItems[nextIndex])
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

