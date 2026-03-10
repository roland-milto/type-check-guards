# areStreams

## Aprašymas

`areStreams` nustato, ar reikšmė yra užpildytas masyvas, kuriame kiekvienas elementas yra `Stream`.

### Naudojimo atvejis

Patikrinkite naudotojo pateiktas arba dinamiškai sudarytas kolekcijas (pvz., kelis failų skaitymo srautus) prieš
nukreipiant (pipe), tęsiant (resume) ar kitaip su jomis dirbant kaip su grupe.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areStreams`, kad patikrintumėte nežinomą įvestį prieš laikydami ją `Stream[]`; ji grąžina `true` tik tada,
> kai reikšmė yra netuščias masyvas ir kiekvienas elementas yra `Stream`.

### Privalumai

- Užtikrina, kad įvestis yra užpildytas masyvas, kuriame kiekvienas elementas yra `Stream`.
- Suteikia paprastą `true`/`false` apsaugą srautų kolekcijoms patikrinti prieš apdorojimą.
- Greitai nutraukia: grąžina `false` iškart, kai randamas ne `Stream` elementas.
- Padeda išvengti vykdymo laiko klaidų, kai kodas daro prielaidą, kad visi elementai yra `Stream` egzemplioriai.

## Naudojimas

### Sintaksė

Funkcija:

- `areStreams(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jame yra Stream objektų.

### Lokalus funkcijos importas

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // įvestis yra užpildytas Stream objektų masyvas
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areStreams(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:34:33 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>