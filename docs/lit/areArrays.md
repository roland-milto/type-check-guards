# areArrays

## Aprašymas

`areArrays` nustato, ar reikšmė yra užpildytas dvimatis masyvas, kurio visi elementai yra masyvai.

### Naudojimo atvejis

Naudokite `areArrays` lentelinių ar matricą primenančių įvesčių (pvz., CSV eilučių, tinklelio duomenų ar sugrupuotų
sąrašų) patikrinimui prieš atliekant eilučių/stulpelių operacijas; ji grąžina `false`, jei įvestis nėra masyvas, yra
tuščia arba joje yra bent vienas ne masyvo elementas.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areArrays`, kai reikia užtikrinti, kad reikšmė yra netuščias 2D masyvas ir kad kiekviena eilutė yra masyvas
> prieš iteruojant ar indeksuojant į įdėtus masyvus.

### Privalumai

- Patikrina, ar įvestis yra netuščias dvimatis masyvas, kuriame kiekvienas elementas yra masyvas.
- Grąžina paprastą loginį rezultatą (`true`/`false`), tinkamą apsaugoms ir ankstyvam vykdymo nutraukimui.
- Padeda išvengti vykdymo laiko klaidų, kai vėlesnis kodas daro prielaidą apie įdėtų masyvų operacijas (pvz., eilučių
  atvaizdavimą).

## Naudojimas

### Sintaksė

Funkcija:

- `areArrays(array)`

Parametrai:

- `array`: Įvestis, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value yra 2D masyvas, kurio elementai yra masyvai
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areArrays(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 13:40:24 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>