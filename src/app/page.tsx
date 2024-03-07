import { EmailForm, formValue } from "@/components/emailFrom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Carousel className="w-full bg-accent">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className=" rounded-none">
                <CardContent className="flex items-center justify-center p-6 h-[600px]">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Card
        className="p-8 rounded-none border-none bg-background w-full xl:px-24"
        id="OverMij"
      >
        <div className="bg-slate-400 aspect-video ml-6 lg:w-[600px] float-right"></div>

        <CardHeader className="p-none">
          <CardTitle>Over mij</CardTitle>
        </CardHeader>

        <CardContent className="p-none grid grid-cols-1 gap-4">
          <p>
            Hi! Wat leuk dat je kijkt op mijn pagina. Welkom! Ik ben Sarah, 24
            jaar en ik verhuur hobbymatig mijn Lincoln Continental Mark IV uit
            1975 met chauffeur voor trouwerijen, gala&apos;s, feesten en
            partijen in de omgeving van Alkmaar. Ik zal zelf de chauffeur zijn
            om u rond te rijden in mijn Lincoln.
          </p>

          <p>
            Op mijn pagina kunt u een impressie krijgen wie ik ben en hoe mijn
            Lincoln er uit ziet. Onder het kopje: &ldquo;Lincoln&ldquo; kunt u
            zien in welke auto ik rijd en hoe die er van binnen uit ziet door
            middel van foto&apos;s.
          </p>

          <p>
            Onder het kopje &ldquo;over mij&ldquo; krijgt u wat informatie van
            mij over wie ik ben en waarom ik interesse heb in oldtimers.
          </p>

          <p>
            Heeft u interesse, een vraag of speciale wensen? Schroom dan niet om
            het contactformulier in te vullen onderaan de pagina en wie weet
            kunnen we wat voor elkaar betekenen voor uw speciale gelegenheid!
          </p>
        </CardContent>

        <div className="inline bg-slate-400 aspect-video ml-6 w-full float-right lg:hidden"></div>
      </Card>
      <Card
        className="p-8 rounded-none bg-accent w-full xl:px-24"
        id="MijnAuto"
      >
        <div className="bg-slate-400 aspect-video ml-6 lg:w-[600px] float-right"></div>

        <CardHeader>
          <CardTitle className="p-none">Mijn auto</CardTitle>
        </CardHeader>

        <CardContent className="p-none grid grid-cols-1 gap-4">
          <p>
            Ik ben Sarah, 24 jaar en ik heb een hart voor oldtimers. Sinds dat
            ik mijn eerste bijbaantje had op mijn vijftiende als vakkenvuller
            ben ik gaan sparen voor een Amerikaanse oldtimer.
          </p>

          <p>
            Waarom ik deze interesse heb is namelijk omdat ik sinds jongs af aan
            al op oldtimershows kom. Ik vond al dat chroom zo mooi en
            indrukwekkend als klein meisje en zei altijd dat ik graag zo&apos;n
            auto zou willen hebben.
          </p>

          <p>
            Toen ik de mogelijkheid had om te werken heb ik door middel van
            bijbaantjes volop gespaard. Na 6 jaar heb ik dan eindelijk deze
            mooie Lincoln Continental Mark IV uit 1975 kunnen kopen.
          </p>
        </CardContent>

        <div className="inline bg-slate-400 aspect-video ml-6 w-full float-right lg:hidden"></div>
      </Card>

      <Card
        className="p-8 rounded-none border-none bg-primary w-full xl:px-24"
        id="Contact"
      >
        <CardHeader>
          <CardTitle className="p-none">Neem contact op</CardTitle>
        </CardHeader>

        <CardContent>
          <EmailForm />
        </CardContent>
      </Card>
    </main>
  );
}
