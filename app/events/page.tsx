"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Ticket, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"
import { TempleArch } from "@/components/decorative-elements"

export default function EventsPage() {
  const { language } = useLanguage()
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample events data
  const events = [
    {
      id: 1,
      title: language === "hi" ? "कुमाऊँनी लोकगीत उत्सव" : "Kumaoni Folk Music Festival",
      category: "music",
      date: language === "hi" ? "15 जुलाई, 2024" : "July 15, 2024",
      time: language === "hi" ? "शाम 6:00 - 9:00 बजे" : "6:00 PM - 9:00 PM",
      location: language === "hi" ? "टाउन हॉल, नैनीताल" : "Town Hall, Nainital",
      price: language === "hi" ? "₹500 प्रति व्यक्ति" : "₹500 per person",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      color: "uttarakhand-mountain",
    },
    {
      id: 2,
      title: language === "hi" ? "गढ़वाली भाषा कार्यशाला" : "Garhwali Language Workshop",
      category: "workshop",
      date: language === "hi" ? "20 जुलाई, 2024" : "July 20, 2024",
      time: language === "hi" ? "सुबह 10:00 - शाम 4:00 बजे" : "10:00 AM - 4:00 PM",
      location: language === "hi" ? "सांस्कृतिक केंद्र, देहरादून" : "Cultural Center, Dehradun",
      price: language === "hi" ? "₹300 प्रति व्यक्ति" : "₹300 per person",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      color: "uttarakhand-pine",
    },
    {
      id: 3,
      title: language === "hi" ? "उत्तराखंड सांस्कृतिक महोत्सव" : "Uttarakhand Cultural Festival",
      category: "festival",
      date: language === "hi" ? "5-7 अगस्त, 2024" : "August 5-7, 2024",
      time: language === "hi" ? "सुबह 9:00 - रात 9:00 बजे" : "9:00 AM - 9:00 PM",
      location: language === "hi" ? "पैराडाइज़ ग्राउंड, मसूरी" : "Paradise Ground, Mussoorie",
      price: language === "hi" ? "₹800 प्रति व्यक्ति" : "₹800 per person",
      image:
        "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      color: "uttarakhand-flower",
    },
    {
      id: 4,
      title: language === "hi" ? "पहाड़ी व्यंजन महोत्सव" : "Pahadi Cuisine Festival",
      category: "food",
      date: language === "hi" ? "12 अगस्त, 2024" : "August 12, 2024",
      time: language === "hi" ? "दोपहर 12:00 - रात 8:00 बजे" : "12:00 PM - 8:00 PM",
      location: language === "hi" ? "रिज़ॉर्ट पैराडाइज़, रानीखेत" : "Resort Paradise, Ranikhet",
      price: language === "hi" ? "₹600 प्रति व्यक्ति" : "₹600 per person",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      color: "uttarakhand-sunset",
    },
    {
      id: 5,
      title: language === "hi" ? "उत्तराखंड फिल्म फेस्टिवल" : "Uttarakhand Film Festival",
      category: "film",
      date: language === "hi" ? "20-22 अगस्त, 2024" : "August 20-22, 2024",
      time: language === "hi" ? "दोपहर 2:00 - रात 10:00 बजे" : "2:00 PM - 10:00 PM",
      location: language === "hi" ? "सिनेमा हॉल, हरिद्वार" : "Cinema Hall, Haridwar",
      price: language === "hi" ? "₹400 प्रति व्यक्ति" : "₹400 per person",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      color: "uttarakhand-wood",
    },
    {
      id: 6,
      title: language === "hi" ? "पहाड़ी हस्तशिल्प मेला" : "Pahadi Handicraft Fair",
      category: "fair",
      date: language === "hi" ? "28-30 अगस्त, 2024" : "August 28-30, 2024",
      time: language === "hi" ? "सुबह 10:00 - शाम 6:00 बजे" : "10:00 AM - 6:00 PM",
      location: language === "hi" ? "टाउन स्क्वायर, अल्मोड़ा" : "Town Square, Almora",
      price: language === "hi" ? "₹200 प्रति व्यक्ति" : "₹200 per person",
      image:
        "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      color: "uttarakhand-mountain",
    },
  ]

  // Filter events based on category and search query
  const filteredEvents = events.filter((event) => {
    const matchesFilter = filter === "all" || event.category === filter
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="py-12 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <TempleArch className="inline-block mb-4">
            <h1 className="text-4xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "आगामी कार्यक्रम" : "Upcoming Events"}
            </h1>
          </TempleArch>
          <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
            {language === "hi"
              ? "उत्तराखंड की भाषा और संस्कृति से जुड़े विशेष कार्यक्रम और उत्सव"
              : "Special events and festivals related to Uttarakhand's language and culture"}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px] border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20">
                <SelectValue placeholder={language === "hi" ? "श्रेणी द्वारा फ़िल्टर करें" : "Filter by category"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === "hi" ? "सभी श्रेणियाँ" : "All Categories"}</SelectItem>
                <SelectItem value="music">{language === "hi" ? "संगीत" : "Music"}</SelectItem>
                <SelectItem value="workshop">{language === "hi" ? "वर्कशॉप" : "Workshop"}</SelectItem>
                <SelectItem value="festival">{language === "hi" ? "उत्सव" : "Festival"}</SelectItem>
                <SelectItem value="food">{language === "hi" ? "भोजन" : "Food"}</SelectItem>
                <SelectItem value="film">{language === "hi" ? "फिल्म" : "Film"}</SelectItem>
                <SelectItem value="fair">{language === "hi" ? "मेला" : "Fair"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === "hi" ? "कार्यक्रम या स्थान खोजें..." : "Search events or locations..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full md:w-[300px] border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className={`border-2 border-${event.color}/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className={`absolute top-2 right-2 bg-${event.color} text-white text-xs px-2 py-1 rounded-full`}>
                  {language === "hi"
                    ? event.category === "music"
                      ? "संगीत"
                      : event.category === "workshop"
                        ? "वर्कशॉप"
                        : event.category === "festival"
                          ? "उत्सव"
                          : event.category === "food"
                            ? "भोजन"
                            : event.category === "film"
                              ? "फिल्म"
                              : "मेला"
                    : event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </div>
              </div>
              <CardHeader className="relative z-10 -mt-12 pb-0">
                <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className={`text-${event.color} dark:text-uttarakhand-meadow font-pahadi`}>
                      {event.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className={`h-5 w-5 text-${event.color} dark:text-uttarakhand-meadow`} />
                      <span className="text-sm text-muted-foreground font-pahadi">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className={`h-5 w-5 text-${event.color} dark:text-uttarakhand-meadow`} />
                      <span className="text-sm text-muted-foreground font-pahadi">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className={`h-5 w-5 text-${event.color} dark:text-uttarakhand-meadow`} />
                      <span className="text-sm text-muted-foreground font-pahadi">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className={`h-5 w-5 text-${event.color} dark:text-uttarakhand-meadow`} />
                      <span className="text-sm text-muted-foreground font-pahadi">{event.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white dark:bg-gray-900 pt-0 pb-4 px-4">
                <a
                  href="https://forms.gle/QsgATnNtYchCKJB48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className={`w-full bg-${event.color} hover:bg-${event.color}/90 text-white font-pahadi`}>
                    {language === "hi" ? "टिकट बुक करें" : "Book Tickets"}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground font-pahadi">
              {language === "hi"
                ? "कोई परिणाम नहीं मिला। कृपया अपने फ़िल्टर बदलें।"
                : "No results found. Please try different filters."}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

