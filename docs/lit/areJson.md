# areJson

## Aprašymas

Patikrina, ar visi masyvo elementai yra JSON eilutės, grąžindamas `true` tik jei masyvas yra užpildytas ir kiekvienas
elementas yra tinkamas JSON; kitu atveju grąžina `false`.

### Naudojimo atvejis

Validuokite gaunamus duomenis (pvz., iš užklausos parametrų, aplinkos kintamųjų ar išorinių API), kai tikitės JSON
užkoduotų eilučių masyvo ir norite atmesti tuščius masyvus arba bet kokius ne JSON įrašus.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areJson`, kai reikia patikrinti, kad `unknown[]` turi tik JSON eilutes prieš jas parsinant (pvz., su
`JSON.parse`).

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas yra tinkama JSON eilutė; kitu atveju grąžina `false`.
- Greitai nutraukia tikrinimą: nustoja tikrinti iškart, kai randamas ne JSON elementas.
- Pagal dizainą atmeta tuščius masyvus, grąžindamas `false` neužpildytai įvesčiai.

## Naudojimas

### Sintaksė

Funkcija:

- `areJson(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl JSON eilutės elementų.

### Lokalus funkcijos importas

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // tiesa
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // netiesa
const empty = areJson([]); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areJson(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areJson](../_analysis/areJson.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 16:16:36 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>