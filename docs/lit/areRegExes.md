# areRegExes

## Aprašymas

`areRegExes` patikrina, ar reikšmė yra užpildytas masyvas, kuriame yra tik `RegExp` objektai.

### Naudojimo atvejis

Patikrinkite, ar konfigūracijos parinktis (pvz., leidžiamų / draudžiamų šablonų sąrašas) yra netuščias reguliariųjų
reiškinių masyvas prieš naudojant ją atitikčių paieškai.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areRegExes`, kad susiaurintumėte `unknown` iki `RegExp[]` prieš iteruodami ar komponuodami šablonus.

### Privalumai

- Užtikrina, kad reikšmė yra netuščias masyvas, kuriame kiekvienas elementas yra `RegExp` egzempliorius.
- Suteikia paprastą loginę apsaugą (`true`/`false`) naudotojo įvesties ar konfigūracijos tikrinimui.
- Padeda išvengti vykdymo laiko klaidų, kai vėlesnis kodas daro prielaidą, kad visi elementai palaiko reguliariųjų
  reiškinių operacijas.

## Naudojimas

### Sintaksė

Funkcija:

- `areRegExes(array)`

Parametrai:

- `array`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // čia patterns yra RegExp masyvas
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areRegExes(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:19:40 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>