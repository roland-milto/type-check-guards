# areValidDates

## Aprašymas

Nustato, ar masyvas yra netuščias ir sudarytas vien tik iš galiojančių `Date` objektų.

### Naudojimo atvejis

Naudokite `areValidDates`, kad patikrintumėte naudotojo pateiktus arba API pateiktus masyvus prieš atliekant su datomis
susijusias operacijas (rikiavimą, intervalo patikras, formatavimą), užtikrindami, kad visi įrašai yra tikri, galiojantys
`Date` objektai ir kad sąrašas nėra tuščias.

> **Pastaba TypeScript naudotojams:**
>
> `areValidDates` grąžina `false` tuščiam masyvui; prieš remdamiesi tuo kaip validacijos žingsniu, įsitikinkite, kad
> masyvas turi būti netuščias.

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas yra galiojantis `Date` egzempliorius (be negaliojančių datų, tokių
  kaip `new Date('invalid')`).
- Atmeta tuščią įvestį grąžindamas `false`, užtikrindamas, kad priimtumėte tik prasmingus, netuščius datų sąrašus.
- Pateikia paprastą loginį „guard“ tipo patikrinimą, kurį lengva derinti su kitomis validacijomis.

## Naudojimas

### Sintaksė

Funkcija:

- `areValidDates(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, galimai turintis `Date` objektų.

### Lokalus funkcijos importas

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // tiesa
console.log(areValidDates(b)); // netiesa
console.log(areValidDates(c)); // netiesa
console.log(areValidDates(d)); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areValidDates(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:32:43 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>