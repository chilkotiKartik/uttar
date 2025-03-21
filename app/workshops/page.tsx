import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WorkshopsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">वर्कशॉप और इवेंट्स</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            लाइव वर्चुअल क्लासरूम और इंटरएक्टिव सेशन में भाग लें और अपनी भाषा कौशल को बढ़ाएँ।
          </p>
        </div>
      </div>
      <Tabs defaultValue="upcoming" className="mt-10">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="upcoming">आगामी</TabsTrigger>
            <TabsTrigger value="past">पिछले</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="कुमाऊँनी लोकगीत वर्कशॉप"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="mt-4">कुमाऊँनी लोकगीत वर्कशॉप</CardTitle>
                <CardDescription>इंटरएक्टिव वर्कशॉप में कुमाऊँनी लोकगीतों के बारे में जानें</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">15 जुलाई, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">शाम 6:00 - 8:00 बजे</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">ऑनलाइन (ज़ूम)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">25 सीटें उपलब्ध</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">रजिस्टर करें</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="गढ़वाली भाषा प्रैक्टिस सेशन"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="mt-4">गढ़वाली भाषा प्रैक्टिस सेशन</CardTitle>
                <CardDescription>नेटिव स्पीकर्स के साथ गढ़वाली भाषा का अभ्यास करें</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">20 जुलाई, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">शाम 5:00 - 6:30 बजे</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">ऑनलाइन (गूगल मीट)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">15 सीटें उपलब्ध</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">रजिस्टर करें</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="उत्तराखंड के त्योहार"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="mt-4">उत्तराखंड के त्योहार</CardTitle>
                <CardDescription>उत्तराखंड के प्रमुख त्योहारों और उत्सवों के बारे में जानें</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">25 जुलाई, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">शाम 7:00 - 8:30 बजे</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">ऑनलाइन (ज़ूम)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">30 सीटें उपलब्ध</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">रजिस्टर करें</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="past" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="कुमाऊँनी व्याकरण वर्कशॉप"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold">रिकॉर्डिंग उपलब्ध</span>
                  </div>
                </div>
                <CardTitle className="mt-4">कुमाऊँनी व्याकरण वर्कशॉप</CardTitle>
                <CardDescription>कुमाऊँनी भाषा के व्याकरण के बारे में जानें</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">10 जून, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">शाम 6:00 - 8:00 बजे</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">ऑनलाइन (ज़ूम)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">45 प्रतिभागी</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">रिकॉर्डिंग देखें</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="गढ़वाली लोककथाएँ"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold">रिकॉर्डिंग उपलब्ध</span>
                  </div>
                </div>
                <CardTitle className="mt-4">गढ़वाली लोककथाएँ</CardTitle>
                <CardDescription>गढ़वाली लोककथाओं और कहानियों के बारे में जानें</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">5 जून, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">शाम 7:00 - 8:30 बजे</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">ऑनलाइन (गूगल मीट)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">38 प्रतिभागी</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">रिकॉर्डिंग देखें</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

