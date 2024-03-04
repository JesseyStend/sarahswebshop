import ChevronLeft from "@/icons/ChevronLeft";
import ChevronRight from "@/icons/ChevronRight";
import { twMerge } from "tailwind-merge";

interface TextfieldProps {
  inputProps?: {
    className?: string;
    multiLine?: boolean;
  };
  label?: string;
}

const Textfield: React.FunctionComponent<TextfieldProps> = ({
  label,
  inputProps,
}) => {
  return (
    <div className="grid grid-col-1 gap-2">
      {label && <h5>{label}</h5>}
      {inputProps?.multiLine ? (
        <textarea
          className={twMerge(
            "rounded-md bg-background border border-text p-2 text-xl",
            inputProps?.className
          )}
        />
      ) : (
        <input
          className={twMerge(
            "rounded-md bg-background border border-text p-2 text-xl",
            inputProps?.className
          )}
        />
      )}
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className=" bg-slate-200 h-[600px] w-full relative">
        <ChevronLeft className="w-24 h-24 absolute left-8 top-1/2 -translate-y-1/2 drop-shadow-lg" />
        <ChevronRight className="w-24 h-24 absolute right-8 top-1/2 -translate-y-1/2 drop-shadow-lg" />
      </div>
      <div className=" px-24 py-8 w-full flex items-center" id="OverMij">
        <div className="flex-auto pr-16 grid grid-col-1 gap-4">
          <h3>Over mij</h3>
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
        </div>
        <div className="flex-none bg-slate-400 w-[40em] h-[22em]"></div>
      </div>
      <div
        className="px-24 py-8 w-full flex bg-accent items-center"
        id="MijnAuto"
      >
        <div className="flex-auto pr-16 grid grid-col-1 gap-4">
          <h3>Mijn auto</h3>
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
        </div>
        <div className="flex-none bg-slate-400 w-[40em] h-[22em]"></div>
      </div>
      <form className="px-24 py-8 w-full bg-primary" id="Contact">
        <h4>Neem contact op</h4>
        <div className="grid grid-cols-2 divide-x divide-text pb-4">
          <div className="grid grid-cols-1 gap-2 pr-4">
            <Textfield label="Naam" />
            <Textfield label="Telefoonnummer" />
            <Textfield label="E-mail adres" />
          </div>
          <div className="grid grid-cols-1 gap-2 pl-4">
            <Textfield label="Voor welke gelegenheid" />
            <Textfield
              label="Telefoonnummer"
              inputProps={{ className: "min-h-36", multiLine: true }}
            />
          </div>
        </div>
        <button
          type="submit"
          className=" bg-background border-text rounded-xl border-2 py-2 px-4 font-bold"
        >
          Verzenden
        </button>
      </form>
    </main>
  );
}
