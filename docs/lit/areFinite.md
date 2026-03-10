# areFinite

## Aprašymas

`areFinite` patikrina, ar reikšmė yra netuščias masyvas, kurio elementai visi yra baigtiniai skaičiai; jei taip, grąžina
`true`, kitu atveju – `false`.

### Naudojimo atvejis

Validuokite skaitinių įvesčių masyvus (pvz., diagramų sekas, koordinačių sąrašus, matavimo mėginius) prieš atlikdami
skaičiavimus, užtikrindami, kad rezultatas būtų `true` tik tada, kai visos reikšmės yra baigtiniai skaičiai.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areFinite`, kai reikia užtikrinti, kad masyvas būtų netuščias ir jame būtų tik baigtiniai skaičiai;
> tuštiems masyvams ir masyvams, kuriuose yra `NaN` ar begalybės, ji grąžina `false`.

### Privalumai

- Grąžina `true` tik tada, kai įvestis yra netuščias masyvas ir kiekvienas elementas yra baigtinis skaičius.
- Atmeta `Infinity`, `-Infinity` ir `NaN`, remdamasis `isFinite` patikromis kiekvienam elementui.
- Pateikia paprastą loginį rezultatą (`true`/`false`), tinkamą sargams ir validavimo srautams.

## Naudojimas

### Sintaksė

Funkcija:

- `areFinite(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar visi jo elementai yra baigtiniai.

### Lokalus funkcijos importas

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // tiesa
console.log(areFinite(b)); // netiesa
console.log(areFinite(c)); // netiesa

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areFinite(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 16:35:46 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>