"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Mountain, Landmark, Users, Tent, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, MountainDivider } from "@/components/decorative-elements"
import { VideoGallery } from "@/components/video-gallery"

export default function DistrictPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const districtId = Number.parseInt(params.id)

  // Comprehensive district data with information from Wikipedia
  const districts = [
    {
      id: 1,
      name: {
        en: "Dehradun",
        hi: "देहरादून",
      },
      region: {
        en: "Garhwal",
        hi: "गढ़वाल",
      },
      overview: {
        en: "Dehradun is the capital city and a municipal corporation in the Indian state of Uttarakhand. Located in the Doon Valley on the foothills of the Himalayas, nestled between the Song river on the east and the Tons river on the west, Dehradun is known for its pleasant climate and picturesque landscape. It is the administrative headquarters of Dehradun district and the interim capital of Uttarakhand state.",
        hi: "देहरादून भारतीय राज्य उत्तराखंड की राजधानी और एक नगर निगम है। हिमालय की तलहटी में दून घाटी में स्थित, पूर्व में सोंग नदी और पश्चिम में टोंस नदी के बीच बसा हुआ, देहरादून अपने सुहावने मौसम और मनोरम परिदृश्य के लिए जाना जाता है। यह देहरादून जिले का प्रशासनिक मुख्यालय और उत्तराखंड राज्य की अंतरिम राजधानी है।",
      },
      history: {
        en: "The history of Dehradun goes back to the Vedic period when it was part of the Kedarkhand region. The earliest mention of the place is found in the Skanda Purana, which refers to the region as Kedar Khand, the abode of Lord Shiva. The city's name is a combination of two words: 'Dehra' referring to the temporary camp established by Guru Ram Rai, the eldest son of the seventh Sikh Guru Har Rai, and 'Dun' or 'Doon' referring to the Doon Valley. During the British Raj, Dehradun became an important center for education and military establishments.",
        hi: "देहरादून का इतिहास वैदिक काल तक जाता है जब यह केदारखंड क्षेत्र का हिस्सा था। इस स्थान का सबसे पहला उल्लेख स्कंद पुराण में मिलता है, जो इस क्षेत्र को केदार खंड, भगवान शिव का निवास स्थान कहता है। शहर का नाम दो शब्दों का संयोजन है: 'देहरा' जो सातवें सिख गुरु हर राय के सबसे बड़े बेटे गुरु राम राय द्वारा स्थापित अस्थायी शिविर को संदर्भित करता है, और 'दून' या 'डून' जो दून घाटी को संदर्भित करता है। ब्रिटिश राज के दौरान, देहरादून शिक्षा और सैन्य प्रतिष्ठानों के लिए एक महत्वपूर्ण केंद्र बन गया।",
      },
      geography: {
        en: "Dehradun is located in the Doon Valley on the foothills of the Himalayas at an elevation of 435 meters (1,427 ft) above sea level. The city is situated between two of India's mightiest rivers — the Ganges on the east and the Yamuna on the west. The Doon Valley has the Himalayas to its north, the Shivalik Hills to its south, the sacred river Ganges to its east, and the Yamuna river to its west. The city has a temperate climate with mild summers and cool winters. The average temperature in summer ranges from 36°C to 16.7°C, while in winter it ranges from 23.4°C to 5.2°C.",
        hi: "देहरादून हिमालय की तलहटी में दून घाटी में समुद्र तल से 435 मीटर (1,427 फीट) की ऊंचाई पर स्थित है। शहर भारत की दो सबसे शक्तिशाली नदियों - पूर्व में गंगा और पश्चिम में यमुना के बीच स्थित है। दून घाटी के उत्तर में हिमालय, दक्षिण में शिवालिक पहाड़ियाँ, पूर्व में पवित्र गंगा नदी और पश्चिम में यमुना नदी है। शहर में समशीतोष्ण जलवायु है जिसमें हल्की गर्मी और ठंडी सर्दियां होती हैं। गर्मियों में औसत तापमान 36°C से 16.7°C तक रहता है, जबकि सर्दियों में यह 23.4°C से 5.2°C तक रहता है।",
      },
      culture: {
        en: "Dehradun has a rich cultural heritage that blends Garhwali, Kumaoni, and North Indian traditions. The city is known for its diverse population, with people from various parts of India contributing to its cultural tapestry. Traditional Garhwali and Kumaoni festivals like Basant Panchami, Phool Dei, Harela, and Bissu are celebrated with great enthusiasm. The city also hosts the annual Jhanda Fair at the Guru Ram Rai Darbar Sahib, which attracts thousands of devotees. Dehradun is famous for its Basmati rice, traditional sweets like Bal Mithai and Singodi, and handicrafts like Garhwal paintings and wooden crafts.",
        hi: "देहरादून की समृद्ध सांस्कृतिक विरासत है जो गढ़वाली, कुमाऊंनी और उत्तर भारतीय परंपराओं का मिश्रण है। शहर अपनी विविध आबादी के लिए जाना जाता है, जिसमें भारत के विभिन्न हिस्सों के लोग इसकी सांस्कृतिक विरासत में योगदान देते हैं। बसंत पंचमी, फूल देई, हरेला और बिस्सु जैसे पारंपरिक गढ़वाली और कुमाऊंनी त्योहार बड़े उत्साह के साथ मनाए जाते हैं। शहर में गुरु राम राय दरबार साहिब में वार्षिक झंडा मेला भी आयोजित किया जाता है, जो हजारों भक्तों को आकर्षित करता है। देहरादून अपने बासमती चावल, बाल मिठाई और सिंगोड़ी जैसे पारंपरिक मिठाइयों, और गढ़वाल चित्रकला और लकड़ी के शिल्प जैसे हस्तशिल्प के लिए प्रसिद्ध है।",
      },
      economy: {
        en: "Dehradun's economy is primarily driven by the service sector, with education, healthcare, tourism, and government services being the major contributors. The city is home to numerous educational institutions, research centers, and training academies, making education a significant economic activity. Tourism is another major industry, with the city serving as a gateway to popular hill stations like Mussoorie and religious sites like Haridwar and Rishikesh. The Information Technology sector is growing, with the establishment of IT parks and software companies. Traditional industries include basmati rice cultivation, tea gardens, and handicrafts. The city also has a thriving retail sector with both traditional markets and modern shopping malls.",
        hi: "देहरादून की अर्थव्यवस्था मुख्य रूप से सेवा क्षेत्र द्वारा संचालित है, जिसमें शिक्षा, स्वास्थ्य सेवा, पर्यटन और सरकारी सेवाएं प्रमुख योगदानकर्ता हैं। शहर में कई शैक्षिक संस्थान, अनुसंधान केंद्र और प्रशिक्षण अकादमियां हैं, जिससे शिक्षा एक महत्वपूर्ण आर्थिक गतिविधि बन गई है। पर्यटन एक अन्य प्रमुख उद्योग है, जिसमें शहर मसूरी जैसे लोकप्रिय हिल स्टेशनों और हरिद्वार और ऋषिकेश जैसे धार्मिक स्थलों के लिए प्रवेश द्वार के रूप में कार्य करता है। आईटी पार्क और सॉफ्टवेयर कंपनियों की स्थापना के साथ सूचना प्रौद्योगिकी क्षेत्र बढ़ रहा है। पारंपरिक उद्योगों में बासमती चावल की खेती, चाय बागान और हस्तशिल्प शामिल हैं। शहर में पारंपरिक बाजारों और आधुनिक शॉपिंग मॉल दोनों के साथ एक समृद्ध खुदरा क्षेत्र भी है।",
      },
      tourism: {
        en: "Dehradun is a popular tourist destination and serves as a gateway to several hill stations and religious sites in Uttarakhand. Key attractions include:\n\n1. **Robber's Cave (Guchhupani)**: A natural cave formation with a stream flowing through it.\n2. **Sahastradhara**: Known for its 'thousand-fold springs' and sulphur water springs with medicinal properties.\n3. **Tapkeshwar Temple**: An ancient Shiva temple where water drips from the ceiling onto the Shivalinga.\n4. **Forest Research Institute**: A colonial-era building with six museums showcasing the forestry and wildlife of the region.\n5. **Mindrolling Monastery**: One of the largest Buddhist centers in India with a 220-foot-high Great Stupa.\n6. **Rajaji National Park**: A wildlife sanctuary home to elephants, tigers, leopards, and various bird species.\n7. **Malsi Deer Park**: A zoological garden and wildlife conservation center.\n8. **Mussoorie**: A popular hill station just 35 km from Dehradun, known as the 'Queen of Hills'.\n9. **Doon Valley**: Offers panoramic views of the surrounding mountains and valleys.\n10. **Lachhiwala**: A popular picnic spot known for its man-made pools and lush forests.",
        hi: "देहरादून एक लोकप्रिय पर्यटन स्थल है और उत्तराखंड में कई हिल स्टेशनों और धार्मिक स्थलों के लिए प्रवेश द्वार के रूप में कार्य करता है। प्रमुख आकर्षणों में शामिल हैं:\n\n1. **रॉबर्स केव (गुच्छुपानी)**: एक प्राकृतिक गुफा निर्माण जिसमें से एक धारा बहती है।\n2. **सहस्त्रधारा**: अपने 'हजार गुना झरनों' और औषधीय गुणों वाले सल्फर के पानी के झरनों के लिए जाना जाता है।\n3. **तपकेश्वर मंदिर**: एक प्राचीन शिव मंदिर जहां छत से शिवलिंग पर पानी टपकता है।\n4. **वन अनुसंधान संस्थान**: एक औपनिवेशिक युग की इमारत जिसमें क्षेत्र के वन और वन्यजीवन को प्रदर्शित करने वाले छह संग्रहालय हैं।\n5. **मिंद्रोलिंग मठ**: 220 फीट ऊंचे ग्रेट स्तूप के साथ भारत के सबसे बड़े बौद्ध केंद्रों में से एक।\n6. **राजाजी राष्ट्रीय उद्यान**: एक वन्यजीव अभयारण्य जो हाथियों, बाघों, तेंदुओं और विभिन्न पक्षी प्रजातियों का घर है।\n7. **मालसी हिरण पार्क**: एक प्राणी उद्यान और वन्यजीव संरक्षण केंद्र।\n8. **मसूरी**: देहरादून से मात्र 35,,
      },
    },
  ]

  const district = districts.find((d) => d.id === districtId)

  if (!district) {
    return <div>District not found</div>
  }

  return (
    <div className="bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564087744172-97cddc566143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt={district.name[language]}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-uttarakhand-mountain/50 via-transparent to-uttarakhand-wood/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-float backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight font-pahadi text-white drop-shadow-lg">
              {district.name[language]}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4 text-white/90 font-pahadi drop-shadow-lg">
              {district.region[language]} Region
            </p>
            <Link href="/districts">
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm font-pahadi"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Districts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Overview Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AipanBorder className="inline-block mb-4">
                <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                  Overview
                </h2>
              </AipanBorder>
              <div className="space-y-4 text-muted-foreground font-pahadi">
                <p>{district.overview[language]}</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1564087744172-97cddc566143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt={district.name[language]}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-mountain/10 dark:bg-gray-800">
        \
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                About {district.name[language]}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              Learn about the history, geography, climate, and economy of {district.name[language]}
            </p>
          </div>

          <Tabs defaultValue="history" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="history" className="font-pahadi">
                <Calendar className="h-4 w-4 mr-2" />
                History
              </TabsTrigger>
              <TabsTrigger value="geography" className="font-pahadi">
                <MapPin className="h-4 w-4 mr-2" />
                Geography
              </TabsTrigger>
              <TabsTrigger value="culture" className="font-pahadi">
                <Users className="h-4 w-4 mr-2" />
                Culture
              </TabsTrigger>
              <TabsTrigger value="economy" className="font-pahadi">
                <Landmark className="h-4 w-4 mr-2" />
                Economy
              </TabsTrigger>
            </TabsList>
            <TabsContent value="history" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Historical Background
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.history[language]}</p>
            </TabsContent>
            <TabsContent value="geography" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Geographical Features
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.geography[language]}</p>
            </TabsContent>
            <TabsContent value="culture" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              {" "}
              shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Culture and Traditions
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.culture[language]}</p>
            </TabsContent>
            <TabsContent value="economy" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Economic Activities
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.economy[language]}</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <MountainDivider />

      {/* Tourist Attractions Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Tourist Attractions
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              Major tourist spots and attractions in {district.name[language]}
            </p>
          </div>

          <Tabs defaultValue="natural" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="natural" className="font-pahadi">
                <Mountain className="h-4 w-4 mr-2" />
                Natural
              </TabsTrigger>
              <TabsTrigger value="religious" className="font-pahadi">
                <Landmark className="h-4 w-4 mr-2" />
                Religious
              </TabsTrigger>
              <TabsTrigger value="historical" className="font-pahadi">
                <Calendar className="h-4 w-4 mr-2" />
                Historical
              </TabsTrigger>
              <TabsTrigger value="adventure" className="font-pahadi">
                <Tent className="h-4 w-4 mr-2" />
                Adventure
              </TabsTrigger>
              <TabsTrigger value="cultural" className="font-pahadi">
                <Palette className="h-4 w-4 mr-2" />
                Cultural
              </TabsTrigger>
            </TabsList>

            <TabsContent value="natural" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Natural Attractions
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.tourism[language]}</p>
            </TabsContent>

            <TabsContent value="religious" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Religious Attractions
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.tourism[language]}</p>
            </TabsContent>

            <TabsContent value="historical" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Historical Attractions
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.tourism[language]}</p>
            </TabsContent>

            <TabsContent value="adventure" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Adventure Spots
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.tourism[language]}</p>
            </TabsContent>

            <TabsContent value="cultural" className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Cultural Hotspots
              </h3>
              <p className="text-muted-foreground font-pahadi">{district.tourism[language]}</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <MountainDivider />

      {/* Video Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-wood/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                Video Gallery
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              Explore the beauty of {district.name[language]} through videos
            </p>
          </div>
          <VideoGallery districtId={districtId} />
        </div>
      </section>

      <MountainDivider />

      {/* Back to Districts List */}
      <section className="py-8 bg-white dark:bg-gray-900 text-center">
        <Link href="/districts">
          <Button className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
            <ArrowLeft className="mr-2 h-4 w-4" />
            View All Districts
          </Button>
        </Link>
      </section>
    </div>
  )
}

