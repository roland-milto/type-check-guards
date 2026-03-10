# areNumerics

## Aprašymas

`areNumerics` patikrina, ar reikšmė yra netuščias masyvas, kuriame visi elementai yra skaitiniai.

### Naudojimo atvejis

Naudokite `areNumerics`, kad patikrintumėte išorinius arba netipuotus duomenis (pvz., JSON užkrovas, užklausos
parametrus, formos įvestį) prieš skaičiuodami sumas, vidurkius ar atlikdami kitas skaitines operacijas, užtikrindami,
kad įvestis yra netuščias skaitinis masyvas, o kitu atveju grąžindami `false`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areNumerics`, kad apsaugotumėte `unknown` įvestį prieš laikydami ją skaitiniu masyvu; ji grąžina `false` ne
> masyvams ir tuštiems masyvams.

### Privalumai

- Grąžina `true` tik tada, kai įvestis yra netuščias masyvas ir kiekvienas elementas yra skaitinis.
- Greitai nutraukia tikrinimą: nustoja tikrinti vos radęs neskaitinį elementą ir grąžina `false`.
- Padeda saugiai patikrinti nežinomą įvestį prieš atliekant skaitines operacijas.

## Naudojimas

### Sintaksė

Funkcija:

- `areNumerics(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jo elementai yra skaitiniai.

### Lokalus funkcijos importas

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // teisinga
console.log(areNumerics(b)); // teisinga
console.log(areNumerics(c)); // neteisinga
console.log(areNumerics(d)); // neteisinga
console.log(areNumerics(e)); // neteisinga

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areNumerics(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 16:06:05 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>