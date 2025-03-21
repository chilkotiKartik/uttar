"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mountain, Cloud, Droplet, Leaf, Sun, History, Landmark, Music, Utensils, Tent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, TempleArch, MountainDivider } from "@/components/decorative-elements"

export default function AboutUttarakhandPage() {
  const { language } = useLanguage()

  return (
    <div className="bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Uttarakhand Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-uttarakhand-mountain/50 via-transparent to-uttarakhand-wood/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-float backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-pahadi text-white drop-shadow-lg">
              {language === "hi" ? "देवभूमि उत्तराखंड" : "Devbhoomi Uttarakhand"}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 font-pahadi drop-shadow-lg">
              {language === "hi"
                ? "हिमालय की गोद में बसा, प्राकृतिक सौंदर्य और आध्यात्मिक विरासत से समृद्ध राज्य"
                : "Nestled in the lap of the Himalayas, a state rich in natural beauty and spiritual heritage"}
            </p>
            <Link href="/districts">
              <Button
                size="lg"
                className="bg-uttarakhand-sunset hover:bg-uttarakhand-sunset/90 text-white font-pahadi border border-white/20 backdrop-blur-sm"
              >
                {language === "hi" ? "उत्तराखंड के जिले देखें" : "Explore Districts of Uttarakhand"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AipanBorder className="inline-block mb-4">
                <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                  {language === "hi" ? "उत्तराखंड का परिचय" : "Introduction to Uttarakhand"}
                </h2>
              </AipanBorder>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "उत्तराखंड, जिसे 'देवभूमि' (देवताओं की भूमि) के नाम से भी जाना जाता है, भारत का एक राज्य है जो अपनी प्राकृतिक सुंदरता, आध्यात्मिक महत्व और समृद्ध सांस्कृतिक विरासत के लिए प्रसिद्ध है।"
                    : "Uttarakhand, also known as 'Devbhoomi' (Land of the Gods), is a state in India renowned for its natural beauty, spiritual significance, and rich cultural heritage."}
                </p>
                <p>
                  {language === "hi"
                    ? "9 नवंबर 2000 को उत्तर प्रदेश से अलग होकर बना, उत्तराखंड हिमालय की गोद में बसा है और इसमें कई प्रसिद्ध तीर्थस्थल, राष्ट्रीय उद्यान और वन्यजीव अभयारण्य हैं।"
                    : "Formed on November 9, 2000, after being separated from Uttar Pradesh, Uttarakhand is nestled in the lap of the Himalayas and is home to numerous famous pilgrimage sites, national parks, and wildlife sanctuaries."}
                </p>
                <p>
                  {language === "hi"
                    ? "राज्य को दो प्रमुख क्षेत्रों में विभाजित किया गया है: गढ़वाल और कुमाऊँ, जिनकी अपनी अलग-अलग सांस्कृतिक पहचान और भाषाएँ हैं।"
                    : "The state is divided into two major regions: Garhwal and Kumaon, each with its distinct cultural identity and languages."}
                </p>
                <p>
                  {language === "hi"
                    ? "उत्तराखंड की प्राकृतिक सुंदरता, हिमालय की विशाल चोटियों, हरे-भरे घाटियों, झरनों और नदियों के रूप में देखी जा सकती है। यहां के प्रमुख पर्यटन स्थलों में नैनीताल, मसूरी, हरिद्वार, ऋषिकेश, बद्रीनाथ और केदारनाथ शामिल हैं।"
                    : "Uttarakhand's natural beauty can be seen in the form of majestic Himalayan peaks, lush green valleys, waterfalls, and rivers. Major tourist destinations include Nainital, Mussoorie, Haridwar, Rishikesh, Badrinath, and Kedarnath."}
                </p>
                <p>
                  {language === "hi"
                    ? "उत्तराखंड में 13 जिले हैं, जिनमें से 7 गढ़वाल क्षेत्र में और 6 कुमाऊँ क्षेत्र में हैं। प्रत्येक जिले की अपनी अनूठी विशेषताएँ, संस्कृति और परंपराएँ हैं।"
                    : "Uttarakhand has 13 districts, 7 in the Garhwal region and 6 in the Kumaon region. Each district has its unique characteristics, culture, and traditions."}
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1574531732319-351283c73760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-wood/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड के क्षेत्र" : "Regions of Uttarakhand"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के दो प्रमुख क्षेत्र: गढ़वाल और कुमाऊँ"
                : "The two major regions of Uttarakhand: Garhwal and Kumaon"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Garhwal Region */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Garhwal Region"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold font-pahadi">
                    {language === "hi" ? "गढ़वाल क्षेत्र" : "Garhwal Region"}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4 font-pahadi text-muted-foreground">
                  <p>
                    {language === "hi"
                      ? "गढ़वाल क्षेत्र उत्तराखंड के पश्चिमी भाग में स्थित है और इसमें 7 जिले शामिल हैं: देहरादून, हरिद्वार, पौड़ी गढ़वाल, टिहरी गढ़वाल, उत्तरकाशी, चमोली और रुद्रप्रयाग।"
                      : "The Garhwal region is located in the western part of Uttarakhand and comprises 7 districts: Dehradun, Haridwar, Pauri Garhwal, Tehri Garhwal, Uttarkashi, Chamoli, and Rudraprayag."}
                  </p>
                  <p>
                    {language === "hi"
                      ? "यह क्षेत्र अपने धार्मिक स्थलों, प्राकृतिक सौंदर्य और समृद्ध सांस्कृतिक विरासत के लिए प्रसिद्ध है। चार धाम यात्रा के दो धाम - बद्रीनाथ और केदारनाथ - इसी क्षेत्र में स्थित हैं।"
                      : "This region is famous for its religious sites, natural beauty, and rich cultural heritage. Two of the Char Dham pilgrimage sites - Badrinath and Kedarnath - are located in this region."}
                  </p>
                  <p>
                    {language === "hi"
                      ? "गढ़वाली भाषा इस क्षेत्र की मुख्य भाषा है, और यहां के लोग अपनी पारंपरिक संस्कृति, लोक कलाओं और त्योहारों के लिए जाने जाते हैं।"
                      : "Garhwali language is the main language of this region, and the people here are known for their traditional culture, folk arts, and festivals."}
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "प्रमुख आकर्षण:" : "Key Attractions:"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "बद्रीनाथ और केदारनाथ मंदिर" : "Badrinath and Kedarnath Temples"}</li>
                      <li>{language === "hi" ? "हर की पौड़ी, हरिद्वार" : "Har Ki Pauri, Haridwar"}</li>
                      <li>{language === "hi" ? "वैली ऑफ फ्लावर्स" : "Valley of Flowers"}</li>
                      <li>{language === "hi" ? "मसूरी हिल स्टेशन" : "Mussoorie Hill Station"}</li>
                      <li>{language === "hi" ? "ऋषिकेश - योग की राजधानी" : "Rishikesh - Yoga Capital"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kumaon Region */}
            <Card className="border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Kumaon Region"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold font-pahadi">
                    {language === "hi" ? "कुमाऊँ क्षेत्र" : "Kumaon Region"}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4 font-pahadi text-muted-foreground">
                  <p>
                    {language === "hi"
                      ? "कुमाऊँ क्षेत्र उत्तराखंड के पूर्वी भाग में स्थित है और इसमें 6 जिले शामिल हैं: नैनीताल, अल्मोड़ा, पिथौरागढ़, चंपावत, बागेश्वर और ऊधम सिंह नगर।"
                      : "The Kumaon region is located in the eastern part of Uttarakhand and comprises 6 districts: Nainital, Almora, Pithoragarh, Champawat, Bageshwar, and Udham Singh Nagar."}
                  </p>
                  <p>
                    {language === "hi"
                      ? "यह क्षेत्र अपने प्राकृतिक सौंदर्य, झीलों, वन्यजीव अभयारण्यों और शांत हिल स्टेशनों के लिए प्रसिद्ध है। नैनीताल, रानीखेत और अल्मोड़ा जैसे प्रसिद्ध हिल स्टेशन इसी क्षेत्र में स्थित हैं।"
                      : "This region is famous for its natural beauty, lakes, wildlife sanctuaries, and serene hill stations. Famous hill stations like Nainital, Ranikhet, and Almora are located in this region."}
                  </p>
                  <p>
                    {language === "hi"
                      ? "कुमाऊँनी भाषा इस क्षेत्र की मुख्य भाषा है, और यहां के लोग अपनी समृद्ध साहित्यिक परंपरा, संगीत और नृत्य के लिए जाने जाते हैं।"
                      : "Kumaoni language is the main language of this region, and the people here are known for their rich literary tradition, music, and dance."}
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "प्रमुख आकर्षण:" : "Key Attractions:"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "नैनीताल झील" : "Naini Lake"}</li>
                      <li>{language === "hi" ? "जिम कॉर्बेट राष्ट्रीय उद्यान" : "Jim Corbett National Park"}</li>
                      <li>{language === "hi" ? "मुक्तेश्वर और रानीखेत" : "Mukteshwar and Ranikhet"}</li>
                      <li>{language === "hi" ? "पिंडारी और मिलम ग्लेशियर" : "Pindari and Milam Glaciers"}</li>
                      <li>{language === "hi" ? "जागेश्वर मंदिर परिसर" : "Jageshwar Temple Complex"}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Video Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड की झलक" : "Glimpse of Uttarakhand"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की प्राकृतिक सुंदरता और सांस्कृतिक विरासत की एक झलक"
                : "A glimpse of Uttarakhand's natural beauty and cultural heritage"}
            </p>
          </div>

          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/P5J5SrPyqYs?si=_5HYYYYYYYYYYYYs"
              title="Uttarakhand Tourism Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-mountain/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड के बारे में महत्वपूर्ण तथ्य" : "Key Facts About Uttarakhand"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के भूगोल, जलवायु, और सामाजिक-आर्थिक पहलुओं के बारे में जानकारी"
                : "Information about Uttarakhand's geography, climate, and socio-economic aspects"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Geography */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                  <CardTitle className="text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                    {language === "hi" ? "भूगोल" : "Geography"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 font-pahadi text-muted-foreground">
                <p>{language === "hi" ? "क्षेत्रफल: 53,483 वर्ग किलोमीटर" : "Area: 53,483 square kilometers"}</p>
                <p>
                  {language === "hi"
                    ? "राजधानी: देहरादून (अस्थायी), गैरसैंण (ग्रीष्मकालीन)"
                    : "Capital: Dehradun (Interim), Gairsain (Summer)"}
                </p>
                <p>
                  {language === "hi"
                    ? "सीमाएँ: उत्तर में तिब्बत, पूर्व में नेपाल, पश्चिम में हिमाचल प्रदेश, दक्षिण में उत्तर प्रदेश"
                    : "Borders: Tibet to the north, Nepal to the east, Himachal Pradesh to the west, Uttar Pradesh to the south"}
                </p>
                <p>
                  {language === "hi"
                    ? "प्रमुख नदियाँ: गंगा, यमुना, रामगंगा, काली"
                    : "Major Rivers: Ganges, Yamuna, Ramganga, Kali"}
                </p>
                <p>
                  {language === "hi" ? "सबसे ऊंची चोटी: नंदा देवी (7,816 मीटर)" : "Highest Peak: Nanda Devi (7,816 meters)"}
                </p>
              </CardContent>
            </Card>

            {/* Climate */}
            <Card className="border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                  <CardTitle className="text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
                    {language === "hi" ? "जलवायु" : "Climate"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 font-pahadi text-muted-foreground">
                <p>
                  {language === "hi"
                    ? "मौसम: ऊंचाई के अनुसार भिन्न, तराई में उष्णकटिबंधीय से लेकर उच्च हिमालय में अल्पाइन तक"
                    : "Weather: Varies with altitude, from tropical in the Terai to alpine in the high Himalayas"}
                </p>
                <p>
                  {language === "hi"
                    ? "तापमान: गर्मियों में 7°C से 35°C, सर्दियों में -15°C से 15°C"
                    : "Temperature: 7°C to 35°C in summer, -15°C to 15°C in winter"}
                </p>
                <p>
                  {language === "hi" ? "वर्षा: औसतन 1500-2000 मिमी वार्षिक" : "Rainfall: Average 1500-2000 mm annually"}
                </p>
                <p>
                  {language === "hi"
                    ? "मौसम: गर्मी (मार्च-जून), मानसून (जुलाई-सितंबर), सर्दी (अक्टूबर-फरवरी)"
                    : "Seasons: Summer (March-June), Monsoon (July-September), Winter (October-February)"}
                </p>
                <p>
                  {language === "hi"
                    ? "सर्वोत्तम यात्रा का समय: मार्च से जून और सितंबर से नवंबर"
                    : "Best Time to Visit: March to June and September to November"}
                </p>
              </CardContent>
            </Card>

            {/* Demographics */}
            <Card className="border-2 border-uttarakhand-sunset/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <History className="h-5 w-5 text-uttarakhand-sunset dark:text-uttarakhand-meadow" />
                  <CardTitle className="text-uttarakhand-sunset dark:text-uttarakhand-meadow font-pahadi">
                    {language === "hi" ? "जनसांख्यिकी" : "Demographics"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 font-pahadi text-muted-foreground">
                <p>
                  {language === "hi"
                    ? "जनसंख्या: लगभग 10 मिलियन (2011 की जनगणना)"
                    : "Population: Approximately 10 million (2011 Census)"}
                </p>
                <p>
                  {language === "hi"
                    ? "भाषाएँ: हिंदी (आधिकारिक), गढ़वाली, कुमाऊँनी, जौनसारी"
                    : "Languages: Hindi (Official), Garhwali, Kumaoni, Jaunsari"}
                </p>
                <p>{language === "hi" ? "साक्षरता दर: 87.6% (2011 की जनगणना)" : "Literacy Rate: 87.6% (2011 Census)"}</p>
                <p>
                  {language === "hi"
                    ? "धर्म: हिंदू (मुख्य), मुस्लिम, सिख, बौद्ध, जैन, ईसाई"
                    : "Religion: Hindu (Majority), Muslim, Sikh, Buddhist, Jain, Christian"}
                </p>
                <p>
                  {language === "hi"
                    ? "जिले: 13 (गढ़वाल क्षेत्र में 7 और कुमाऊँ क्षेत्र में 6)"
                    : "Districts: 13 (7 in Garhwal region and 6 in Kumaon region)"}
                </p>
              </CardContent>
            </Card>

            {/* Flora & Fauna */}
            <Card className="border-2 border-uttarakhand-meadow/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-uttarakhand-meadow dark:text-uttarakhand-meadow" />
                  <CardTitle className="text-uttarakhand-meadow dark:text-uttarakhand-meadow font-pahadi">
                    {language === "hi" ? "वनस्पति और जीव" : "Flora & Fauna"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 font-pahadi text-muted-foreground">
                <p>
                  {language === "hi"
                    ? "वन क्षेत्र: राज्य का लगभग 65% भाग वनों से आच्छादित"
                    : "Forest Cover: About 65% of the state is covered with forests"}
                </p>
                <p>
                  {language === "hi"
                    ? "प्रमुख वनस्पति: देवदार, चीड़, बुरांश, बांज, काफल"
                    : "Major Flora: Deodar, Pine, Rhododendron, Oak, Kafal"}
                </p>
                <p>
                  {language === "hi"
                    ? "प्रमुख जीव: बाघ, तेंदुआ, हिमालयी भालू, कस्तूरी मृग, हिम तेंदुआ"
                    : "Major Fauna: Tiger, Leopard, Himalayan Bear, Musk Deer, Snow Leopard"}
                </p>
                <p>
                  {language === "hi"
                    ? "राष्ट्रीय उद्यान: जिम कॉर्बेट, राजाजी, गंगोत्री, फूलों की घाटी"
                    : "National Parks: Jim Corbett, Rajaji, Gangotri, Valley of Flowers"}
                </p>
                <p>
                  {language === "hi"
                    ? "वन्यजीव अभयारण्य: केदारनाथ, गोविंद, अस्कोट, सोनानदी"
                    : "Wildlife Sanctuaries: Kedarnath, Govind, Askot, Sonanadi"}
                </p>
              </CardContent>
            </Card>

            {/* Economy */}
            <Card className="border-2 border-uttarakhand-wood/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-uttarakhand-wood dark:text-uttarakhand-meadow" />
                  <CardTitle className="text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi">
                    {language === "hi" ? "अर्थव्यवस्था" : "Economy"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 font-pahadi text-muted-foreground">
                <p>
                  {language === "hi"
                    ? "प्रमुख उद्योग: पर्यटन, कृषि, वानिकी, जल विद्युत"
                    : "Major Industries: Tourism, Agriculture, Forestry, Hydropower"}
                </p>
                <p>
                  {language === "hi"
                    ? "प्रमुख फसलें: चावल, गेहूं, मक्का, मंडुआ, झंगोरा"
                    : "Major Crops: Rice, Wheat, Maize, Mandua, Jhangora"}
                </p>
                <p>
                  {language === "hi"
                    ? "हस्तशिल्प: ऊनी वस्त्र, लकड़ी का काम, तांबे के बर्तन"
                    : "Handicrafts: Woolen textiles, Woodwork, Copper utensils"}
                </p>
                <p>
                  {language === "hi"
                    ? "पर्यटन: धार्मिक, साहसिक, प्राकृतिक, वन्यजीव"
                    : "Tourism: Religious, Adventure, Nature, Wildlife"}
                </p>
                <p>
                  {language === "hi"
                    ? "जल विद्युत क्षमता: लगभग 25,000 मेगावाट"
                    : "Hydropower Potential: Approximately 25,000 MW"}
                </p>
              </CardContent>
            </Card>

            {/* Culture */}
            <Card className="border-2 border-uttarakhand-flower/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-meadow" />
                  <CardTitle className="text-uttarakhand-flower dark:text-uttarakhand-meadow font-pahadi">
                    {language === "hi" ? "संस्कृति" : "Culture"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 font-pahadi text-muted-foreground">
                <p>
                  {language === "hi"
                    ? "लोक नृत्य: चौफुला, झोड़ा, छपेली, लांगवीर नृत्य"
                    : "Folk Dances: Chaufula, Jhora, Chappeli, Langvir Dance"}
                </p>
                <p>
                  {language === "hi"
                    ? "त्योहार: फूलदेई, हरेला, बसंत पंचमी, भितौली, घुघुती"
                    : "Festivals: Phool Dei, Harela, Basant Panchami, Bhitauli, Ghughuti"}
                </p>
                <p>
                  {language === "hi"
                    ? "वाद्य यंत्र: ढोल-दमाऊ, मशकबीन, रणसिंगा, थाली-गागरी"
                    : "Musical Instruments: Dhol-Damau, Mashakbeen, Ransingha, Thali-Gagari"}
                </p>
                <p>
                  {language === "hi"
                    ? "व्यंजन: आलू के गुटके, कफूली, झंगोरे की खीर, भंग की चटनी"
                    : "Cuisine: Aloo Gutke, Kafuli, Jhangore ki Kheer, Bhang ki Chutney"}
                </p>
                <p>
                  {language === "hi" ? "लोक कला: आइपन, रंगवाली, थापा, मुरल" : "Folk Art: Aipan, Rangwali, Thapa, Mural"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabs Section for Detailed Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड के विविध पहलू" : "Various Aspects of Uttarakhand"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के पर्यटन, धार्मिक स्थलों, साहसिक गतिविधियों और व्यंजनों के बारे में विस्तृत जानकारी"
                : "Detailed information about Uttarakhand's tourism, religious sites, adventure activities, and cuisine"}
            </p>
          </div>

          <Tabs defaultValue="tourism" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="tourism" className="font-pahadi">
                <Mountain className="h-4 w-4 mr-2" />
                {language === "hi" ? "पर्यटन" : "Tourism"}
              </TabsTrigger>
              <TabsTrigger value="religious" className="font-pahadi">
                <Landmark className="h-4 w-4 mr-2" />
                {language === "hi" ? "धार्मिक" : "Religious"}
              </TabsTrigger>
              <TabsTrigger value="adventure" className="font-pahadi">
                <Tent className="h-4 w-4 mr-2" />
                {language === "hi" ? "साहसिक" : "Adventure"}
              </TabsTrigger>
              <TabsTrigger value="cuisine" className="font-pahadi">
                <Utensils className="h-4 w-4 mr-2" />
                {language === "hi" ? "व्यंजन" : "Cuisine"}
              </TabsTrigger>
              <TabsTrigger value="culture" className="font-pahadi">
                <Music className="h-4 w-4 mr-2" />
                {language === "hi" ? "संस्कृति" : "Culture"}
              </TabsTrigger>
            </TabsList>

            {/* Tourism Tab */}
            <TabsContent value="tourism" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड में पर्यटन" : "Tourism in Uttarakhand"}
              </h3>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "उत्तराखंड अपने विविध पर्यटन आकर्षणों के लिए प्रसिद्ध है, जिसमें प्राकृतिक सौंदर्य, धार्मिक स्थल, साहसिक गतिविधियां और शांत हिल स्टेशन शामिल हैं।"
                    : "Uttarakhand is famous for its diverse tourist attractions, including natural beauty, religious sites, adventure activities, and serene hill stations."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "प्रमुख हिल स्टेशन" : "Major Hill Stations"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "मसूरी - 'पहाड़ों की रानी'" : "Mussoorie - 'Queen of Hills'"}</li>
                      <li>{language === "hi" ? "नैनीताल - 'झीलों की नगरी'" : "Nainital - 'City of Lakes'"}</li>
                      <li>{language === "hi" ? "अल्मोड़ा - प्राचीन सांस्कृतिक केंद्र" : "Almora - Ancient Cultural Center"}</li>
                      <li>{language === "hi" ? "रानीखेत - शांत हिल स्टेशन" : "Ranikhet - Serene Hill Station"}</li>
                      <li>
                        {language === "hi" ? "लैंसडाउन - शांत और कम भीड़भाड़ वाला" : "Lansdowne - Quiet and Less Crowded"}
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "प्राकृतिक आकर्षण" : "Natural Attractions"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        {language === "hi" ? "फूलों की घाटी - विश्व धरोहर स्थल" : "Valley of Flowers - World Heritage Site"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "जिम कॉर्बेट राष्ट्रीय उद्यान - भारत का सबसे पुराना राष्ट्रीय उद्यान"
                          : "Jim Corbett National Park - India's Oldest National Park"}
                      </li>
                      <li>{language === "hi" ? "चोपता - 'मिनी स्विट्जरलैंड'" : "Chopta - 'Mini Switzerland'"}</li>
                      <li>{language === "hi" ? "औली - स्कीइंग के लिए प्रसिद्ध" : "Auli - Famous for Skiing"}</li>
                      <li>
                        {language === "hi"
                          ? "पिंडारी ग्लेशियर - लोकप्रिय ट्रेकिंग स्थल"
                          : "Pindari Glacier - Popular Trekking Destination"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Religious Tab */}
            <TabsContent value="religious" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "धार्मिक स्थल" : "Religious Sites"}
              </h3>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "उत्तराखंड को 'देवभूमि' (देवताओं की भूमि) के रूप में जाना जाता है और यह कई प्रसिद्ध हिंदू तीर्थस्थलों का घर है।"
                    : "Uttarakhand is known as 'Devbhoomi' (Land of the Gods) and is home to many famous Hindu pilgrimage sites."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "चार धाम" : "Char Dham"}
                    </h4>
                    <p className="mb-2">
                      {language === "hi"
                        ? "चार धाम यात्रा हिंदुओं के लिए सबसे पवित्र तीर्थयात्राओं में से एक है।"
                        : "The Char Dham Yatra is one of the most sacred pilgrimages for Hindus."}
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "बद्रीनाथ - विष्णु को समर्पित" : "Badrinath - Dedicated to Vishnu"}</li>
                      <li>{language === "hi" ? "केदारनाथ - शिव को समर्पित" : "Kedarnath - Dedicated to Shiva"}</li>
                      <li>
                        {language === "hi" ? "गंगोत्री - गंगा नदी का उद्गम" : "Gangotri - Source of the Ganges River"}
                      </li>
                      <li>
                        {language === "hi" ? "यमुनोत्री - यमुना नदी का उद्गम" : "Yamunotri - Source of the Yamuna River"}
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "अन्य प्रमुख धार्मिक स्थल" : "Other Major Religious Sites"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "हरिद्वार - कुंभ मेला का स्थल" : "Haridwar - Site of the Kumbh Mela"}</li>
                      <li>{language === "hi" ? "ऋषिकेश - 'योग की राजधानी'" : "Rishikesh - 'Yoga Capital'"}</li>
                      <li>
                        {language === "hi"
                          ? "हेमकुंड साहिब - सिखों का प्रमुख तीर्थस्थल"
                          : "Hemkund Sahib - Major Sikh Pilgrimage Site"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "जागेश्वर - प्राचीन शिव मंदिर परिसर"
                          : "Jageshwar - Ancient Shiva Temple Complex"}
                      </li>
                      <li>{language === "hi" ? "पूर्णागिरि - शक्ति पीठ" : "Purnagiri - Shakti Peeth"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Adventure Tab */}
            <TabsContent value="adventure" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "साहसिक गतिविधियां" : "Adventure Activities"}
              </h3>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "उत्तराखंड अपनी विविध भौगोलिक विशेषताओं के कारण साहसिक गतिविधियों के लिए एक स्वर्ग है।"
                    : "Uttarakhand is a paradise for adventure activities due to its diverse geographical features."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "जल आधारित गतिविधियां" : "Water-Based Activities"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        {language === "hi"
                          ? "राफ्टिंग - ऋषिकेश में गंगा नदी पर"
                          : "Rafting - On the Ganges River in Rishikesh"}
                      </li>
                      <li>
                        {language === "hi" ? "कयाकिंग - तेज बहाव वाली नदियों पर" : "Kayaking - On fast-flowing rivers"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "बोटिंग - नैनीताल, भीमताल और अन्य झीलों पर"
                          : "Boating - On Nainital, Bhimtal, and other lakes"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "स्विमिंग - प्राकृतिक झरनों और कुंडों में"
                          : "Swimming - In natural springs and pools"}
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "भूमि आधारित गतिविधियां" : "Land-Based Activities"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        {language === "hi"
                          ? "ट्रेकिंग - रोपाई, पिंडारी ग्लेशियर, वैली ऑफ फ्लावर्स"
                          : "Trekking - Roopkund, Pindari Glacier, Valley of Flowers"}
                      </li>
                      <li>{language === "hi" ? "स्कीइंग - औली, मुनस्यारी" : "Skiing - Auli, Munsiyari"}</li>
                      <li>
                        {language === "hi" ? "रॉक क्लाइम्बिंग - ऋषिकेश, नैनीताल" : "Rock Climbing - Rishikesh, Nainital"}
                      </li>
                      <li>
                        {language === "hi" ? "माउंटेन बाइकिंग - मसूरी, नैनीताल" : "Mountain Biking - Mussoorie, Nainital"}
                      </li>
                      <li>
                        {language === "hi" ? "पैराग्लाइडिंग - मुक्तेश्वर, रानीखेत" : "Paragliding - Mukteshwar, Ranikhet"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Cuisine Tab */}
            <TabsContent value="cuisine" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंडी व्यंजन" : "Uttarakhandi Cuisine"}
              </h3>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "उत्तराखंडी व्यंजन स्थानीय सामग्री और मसालों का उपयोग करते हैं, जो इसके स्वाद को विशिष्ट बनाते हैं। यह सरल, पौष्टिक और स्वादिष्ट है।"
                    : "Uttarakhandi cuisine uses local ingredients and spices, giving it a distinctive flavor. It is simple, nutritious, and delicious."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "प्रमुख व्यंजन" : "Main Dishes"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        {language === "hi" ? "आलू के गुटके - मसालेदार आलू का व्यंजन" : "Aloo Ke Gutke - Spicy potato dish"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "कफूली - पालक और मेथी से बना व्यंजन"
                          : "Kafuli - Dish made from spinach and fenugreek"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "चैंसू - काले चने की दाल से बना व्यंजन"
                          : "Chainsoo - Dish made from black gram dal"}
                      </li>
                      <li>
                        {language === "hi" ? "पहाड़ी रायता - दही आधारित व्यंजन" : "Pahadi Raita - Yogurt-based dish"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "भट्ट की चुड़कानी - काले सोयाबीन से बना व्यंजन"
                          : "Bhatt Ki Churdkani - Dish made from black soybeans"}
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "मिठाई और स्नैक्स" : "Sweets and Snacks"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        {language === "hi"
                          ? "झंगोरे की खीर - बाजरा से बनी खीर"
                          : "Jhangore Ki Kheer - Pudding made from barnyard millet"}
                      </li>
                      <li>{language === "hi" ? "सिंगोड़ी - पत्तों में लिपटी मिठाई" : "Singodi - Sweet wrapped in leaves"}</li>
                      <li>
                        {language === "hi"
                          ? "बाल मिठाई - अल्मोड़ा की प्रसिद्ध मिठाई"
                          : "Bal Mithai - Famous sweet from Almora"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "अरसे - गुड़ और चावल के आटे से बना स्नैक"
                          : "Arsa - Snack made from jaggery and rice flour"}
                      </li>
                      <li>
                        {language === "hi"
                          ? "मंडुआ की रोटी - रागी से बनी रोटी"
                          : "Mandua Ki Roti - Flatbread made from finger millet"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Culture Tab */}
            <TabsContent value="culture" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंडी संस्कृति" : "Uttarakhandi Culture"}
              </h3>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>
                  {language === "hi"
                    ? "उत्तराखंड की संस्कृति अपनी विविधता, जीवंतता और प्राचीन परंपराओं के लिए जानी जाती है। यहाँ की संस्कृति हिमालयी परिवेश, धार्मिक मान्यताओं और स्थानीय जीवनशैली से गहराई से प्रभावित है।"
                    : "Uttarakhand's culture is known for its diversity, vibrancy, and ancient traditions. The culture is deeply influenced by the Himalayan environment, religious beliefs, and local way of life."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "लोक नृत्य और संगीत" : "Folk Dance and Music"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "चौफुला - गढ़वाली लोक नृत्य" : "Chaufula - Garhwali folk dance"}</li>
                      <li>{language === "hi" ? "झोड़ा - कुमाऊँनी लोक नृत्य" : "Jhora - Kumaoni folk dance"}</li>
                      <li>
                        {language === "hi"
                          ? "छपेली - युवा लड़के-लड़कियों द्वारा किया जाने वाला नृत्य"
                          : "Chappeli - Dance performed by young boys and girls"}
                      </li>
                      <li>{language === "hi" ? "लांगवीर नृत्य - युद्ध नृत्य" : "Langvir Dance - War dance"}</li>
                      <li>{language === "hi" ? "हुड़का बाजा - लोक वाद्य यंत्र" : "Hudka Baja - Folk musical instrument"}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow mb-2">
                      {language === "hi" ? "त्योहार और परंपराएँ" : "Festivals and Traditions"}
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{language === "hi" ? "फूलदेई - वसंत का त्योहार" : "Phool Dei - Spring festival"}</li>
                      <li>{language === "hi" ? "हरेला - बुवाई का त्योहार" : "Harela - Sowing festival"}</li>
                      <li>{language === "hi" ? "बसंत पंचमी - सरस्वती पूजा" : "Basant Panchami - Saraswati Puja"}</li>
                      <li>
                        {language === "hi"
                          ? "भितौली - भाई-बहन का त्योहार"
                          : "Bhitauli - Festival of brothers and sisters"}
                      </li>
                      <li>{language === "hi" ? "घुघुती - बच्चों का त्योहार" : "Ghughuti - Children's festival"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <MountainDivider />

      {/* Cultural Heritage Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-mountain/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड की सांस्कृतिक विरासत" : "Cultural Heritage of Uttarakhand"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की समृद्ध सांस्कृतिक विरासत, परंपराएँ और रीति-रिवाज"
                : "The rich cultural heritage, traditions, and customs of Uttarakhand"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1623604747457-bd5efb4f2a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Cultural Heritage"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 text-muted-foreground font-pahadi">
              <p>
                {language === "hi"
                  ? "उत्तराखंड की संस्कृति अपनी विविधता, जीवंतता और प्राचीन परंपराओं के लिए जानी जाती है। यहाँ की संस्कृति हिमालयी परिवेश, धार्मिक मान्यताओं और स्थानीय जीवनशैली से गहराई से प्रभावित है।"
                  : "Uttarakhand's culture is known for its diversity, vibrancy, and ancient traditions. The culture is deeply influenced by the Himalayan environment, religious beliefs, and local way of life."}
              </p>
              <p>
                {language === "hi"
                  ? "राज्य के दो प्रमुख क्षेत्र - गढ़वाल और कुमाऊँ - अपनी अलग-अलग सांस्कृतिक पहचान रखते हैं, जिसमें भाषा, वेशभूषा, लोक कलाएँ, संगीत और नृत्य शामिल हैं।"
                  : "The two major regions of the state - Garhwal and Kumaon - have their distinct cultural identities, including language, attire, folk arts, music, and dance."}
              </p>
              <p>
                {language === "hi"
                  ? "उत्तराखंड के लोक नृत्य, जैसे चौफुला, झोड़ा, छपेली और लांगवीर नृत्य, स्थानीय त्योहारों और समारोहों का एक अभिन्न अंग हैं और पीढ़ियों से संरक्षित किए गए हैं।"
                  : "Uttarakhand's folk dances, such as Chaufula, Jhora, Chappeli, and Langvir Dance, are an integral part of local festivals and celebrations and have been preserved for generations."}
              </p>
              <p>
                {language === "hi"
                  ? "राज्य के हस्तशिल्प, जैसे ऊनी वस्त्र, लकड़ी का काम, तांबे के बर्तन और आइपन (एक पारंपरिक लोक कला), स्थानीय कारीगरों की कुशलता और रचनात्मकता को दर्शाते हैं।"
                  : "The state's handicrafts, such as woolen textiles, woodwork, copper utensils, and Aipan (a traditional folk art), showcase the skill and creativity of local artisans."}
              </p>
              <p>
                {language === "hi"
                  ? "उत्तराखंड के त्योहार, जैसे फूलदेई, हरेला, बसंत पंचमी और भितौली, प्रकृति, मौसम और कृषि चक्र से जुड़े हैं और स्थानीय समुदायों द्वारा बड़े उत्साह के साथ मनाए जाते हैं।"
                  : "Uttarakhand's festivals, such as Phool Dei, Harela, Basant Panchami, and Bhitauli, are linked to nature, seasons, and agricultural cycles and are celebrated with great enthusiasm by local communities."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड की झलकियाँ" : "Glimpses of Uttarakhand"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के प्राकृतिक सौंदर्य और सांस्कृतिक विरासत की कुछ झलकियाँ"
                : "Some glimpses of Uttarakhand's natural beauty and cultural heritage"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1626620411842-2eb0b1391c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Mountains"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-pahadi">
                <p className="text-lg font-bold">{language === "hi" ? "हिमालय पर्वत" : "Himalayan Mountains"}</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1574531732319-351283c73760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Valley"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-pahadi">
                <p className="text-lg font-bold">{language === "hi" ? "हरी-भरी घाटियाँ" : "Lush Green Valleys"}</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Temple"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-pahadi">
                <p className="text-lg font-bold">{language === "hi" ? "प्राचीन मंदिर" : "Ancient Temples"}</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1623604747457-bd5efb4f2a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Culture"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-pahadi">
                <p className="text-lg font-bold">{language === "hi" ? "समृद्ध संस्कृति" : "Rich Culture"}</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1590332763673-cae4df71c3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Waterfall"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-pahadi">
                <p className="text-lg font-bold">{language === "hi" ? "सुंदर झरने" : "Beautiful Waterfalls"}</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Uttarakhand Lake"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-pahadi">
                <p className="text-lg font-bold">{language === "hi" ? "शांत झीलें" : "Serene Lakes"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset via-uttarakhand-wood to-uttarakhand-pine text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-pahadi">
              {language === "hi" ? "उत्तराखंड के जिलों का अन्वेषण करें" : "Explore the Districts of Uttarakhand"}
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90 font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के सभी 13 जिलों के बारे में विस्तृत जानकारी प्राप्त करें, उनकी विशिष्ट विशेषताओं, प्रमुख पर्यटन स्थलों और सांस्कृतिक महत्व को जानें।"
                : "Get detailed information about all 13 districts of Uttarakhand, learn about their unique characteristics, major tourist attractions, and cultural significance."}
            </p>
            <Link href="/districts">
              <Button size="lg" className="bg-white text-uttarakhand-sunset hover:bg-white/90 font-pahadi">
                {language === "hi" ? "जिलों का अन्वेषण करें" : "Explore Districts"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

