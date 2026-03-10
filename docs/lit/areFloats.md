# areFloats

## Aprašymas

`areFloats` patikrina, ar pateiktas masyvas yra užpildytas ir ar visi jo elementai yra slankiojo kablelio skaičiai.

### Naudojimo atvejis

Naudokite `areFloats`, kai gaunate `unknown[]` (pvz., iš JSON, užklausos parametrų ar išorinių API) ir jums reikia
užtikrinti, kad tai yra užpildytas masyvas, kuriame kiekvienas elementas yra slankiojo kablelio skaičius, prieš vykdant
skaitinę logiką, pvz., vidurkinimą, interpoliaciją ar statistinius skaičiavimus.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areFloats` kaip apsaugą `unknown[]` prieš laikydami jį `number[]`, kuriame yra tik slankiojo kablelio
> skaičiai; ji grąžina `false` tuštiems masyvams ir bet kuriam ne slankiojo kablelio elementui.

### Privalumai

- Grąžina `true` tik tada, kai įvestis yra netuščias masyvas ir kiekvienas elementas yra slankiojo kablelio skaičius.
- Greitai nutraukia: grąžina `false` iškart, kai randamas ne slankiojo kablelio elementas.
- Padeda patikrinti nežinomą įvestį prieš atliekant slankiojo kablelio skaičiavimus.

## Naudojimas

### Sintaksė

Funkcija:

- `areFloats(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl slankiojo kablelio elementų.

### Lokalus funkcijos importas

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // tiesa
console.log(areFloats(b)); // netiesa
console.log(areFloats(c)); // netiesa

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areFloats(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 15:58:19 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>