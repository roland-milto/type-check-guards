# areSets

## Aprašymas

Patikrina, ar pateiktame netuščiam masyve yra tik `Set` egzemplioriai; jei taip, grąžina `true`, kitu atveju – `false`.

### Naudojimo atvejis

Patvirtinkite, kad reikšmė (pvz., iš naudotojo įvesties, JSON analizės ar išorinių API) yra netuščias `Set` objektų
masyvas prieš apdorodami kiekvieną rinkinį.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areSets`, kad patikrintumėte nežinomą įvestį prieš iteruodami ir kviesdami `Set` API (pvz., `.size`,
`.has`, `.add`) kiekvienam elementui.

### Privalumai

- Grąžina `true` tik tada, kai įvestis yra netuščias masyvas ir kiekvienas elementas yra `Set` egzempliorius.
- Apsaugo nuo klaidingų teigiamų rezultatų tuštiems masyvams, nes grąžina `false`, kai masyve nėra elementų.
- Naudinga kaip vykdymo laiko apsauga prieš atliekant `Set` specifines operacijas su kiekvienu elementu.

## Naudojimas

### Sintaksė

Funkcija:

- `areSets(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl `Set` egzempliorių.

### Lokalus funkcijos importas

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a yra Set egzempliorių masyvas vykdymo metu
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // netiesa
console.log(areSets(c)); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areSets(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areSets](../_analysis/areSets.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:14:13 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>