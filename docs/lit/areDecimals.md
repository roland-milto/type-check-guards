# areDecimals

## Aprašymas

Patikrina, ar visi masyvo elementai yra dešimtainiai skaičiai ir ar masyvas yra užpildytas, grąžindama `true` arba
`false`.

### Naudojimo atvejis

Patikrinkite naudotojo pateiktus sąrašus (pvz., CSV stulpelius ar formos įvestis), kad įsitikintumėte, jog masyvas nėra
tuščias ir kiekvienas įrašas yra dešimtainė reikšmė prieš atliekant analizę ar skaičiavimus.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areDecimals`, kai reikia greito loginio patikrinimo, kad `unknown[]` nėra tuščias ir kiekvienas elementas
> yra dešimtainė reprezentacija.

### Privalumai

- Užtikrina, kad įvestis būtų užpildytas masyvas prieš tikrinant elementus, taip užkertant kelią netyčiniam tuščių
  sąrašų priėmimui.
- Patikrina kiekvieną elementą su `isDecimal`, todėl mišrios arba neteisingos reikšmės iškart duoda `false` rezultatą.
- Pateikia paprastą loginį rezultatą (`true`/`false`), tinkamą apsaugoms (guards) ir ankstyvo grąžinimo (early-return)
  tikrinimo srautams.

## Naudojimas

### Sintaksė

Funkcija:

- `areDecimals(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // tiesa
console.log(areDecimals(b)); // netiesa
console.log(areDecimals(c)); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areDecimals(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 15:57:56 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>