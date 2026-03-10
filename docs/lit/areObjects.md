# areObjects

## Aprašymas

`areObjects` patikrina, ar pateiktame užpildytame masyve yra tik objektai.

### Naudojimo atvejis

Naudokite `areObjects`, kai gaunate nežinomą masyvą (pvz., iš JSON analizės ar išorinių API) ir reikia užtikrinti, kad
jis nebūtų tuščias ir kad kiekvienas elementas būtų objektas prieš iteruojant ir pasiekiant objekto savybes.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areObjects`, kad patikrintumėte `unknown[]` prieš laikydami elementus objektais; tuštiems masyvams ji
> grąžina `false`.

### Privalumai

- Grąžina `true` tik tada, kai įvestis yra užpildytas masyvas ir kiekvienas elementas yra objektas.
- Sustoja anksčiau ir grąžina `false`, kai tik randamas ne objekto tipo elementas.
- Padeda patikrinti nežinomą įvestį prieš atliekant objektams būdingas operacijas.

## Naudojimas

### Sintaksė

Funkcija:

- `areObjects(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jame yra objektų elementų.

### Lokalus funkcijos importas

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value yra užpildytas objektų masyvas
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areObjects(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:09:26 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>