# areIntegers

## Aprašymas

`areIntegers` nustato, ar visi pateikto masyvo elementai yra sveikieji skaičiai, grąžindamas `true`, jei taip, ir
`false` kitu atveju.

### Naudojimo atvejis

Naudokite `areIntegers` naudotojo pateiktiems ar išoriniams duomenims (pvz., užklausos parametrams, JSON payloadams, CSV
eilutėms) patikrinti, kai jūsų logikai reikalingas užpildytas sveikųjų skaičių reikšmių sąrašas, pvz., ID, skaitikliai,
puslapiavimo poslinkiai ar masyvo indeksai.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areIntegers` kaip vykdymo laiko apsaugą `unknown[]` įvestims prieš traktuodami jas kaip `number[]`, kuriame
> yra tik sveikieji skaičiai. Jei grąžinama `false`, įvestis arba nėra užpildytas masyvas, arba joje yra bent viena ne
> sveikojo skaičiaus reikšmė.

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas yra sveikasis skaičius; kitu atveju grąžina `false`.
- Padeda patikrinti nežinomą įvestį prieš atliekant operacijas, skirtas tik sveikiesiems skaičiams (pvz., indeksavimą,
  kiekius, ID).
- Greitai nutraukia: nustoja tikrinti, kai tik randamas bent vienas ne sveikasis skaičius.

## Naudojimas

### Sintaksė

Funkcija:

- `areIntegers(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl sveikųjų skaičių elementų.

### Lokalus funkcijos importas

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // teisinga
console.log(areIntegers(b)); // teisinga
console.log(areIntegers(c)); // neteisinga

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areIntegers(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:59:20 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>