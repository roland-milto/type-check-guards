# isEmpty

## Popis

Určuje, či je daná hodnota prázdna; vracia `true` pre `null`, `undefined`, prázdne/iba biele znaky obsahujúce reťazce,
prázdne polia, prázdne `Map`/`Set` alebo objekty bez vlastných enumerovateľných vlastností.

### Prípad použitia

Použite `isEmpty` na validáciu vstupov a detekciu chýbajúcich/prázdnych hodnôt naprieč viacerými dátovými typmi (napr.
polia formulárov, payloady API, konfiguračné objekty), kde sa `null`, `undefined`, reťazce s bielymi znakmi, prázdne
kolekcie a objekty bez vlastností majú považovať za prázdne.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isEmpty` je utilita vracajúca boolean (nie TypeScript typový predikát), takže sama o sebe nezúžuje typy; používajte
> ju na validáciu/vetvenie, nie na zúženie v čase kompilácie.

### Výhody

- Pri kontrolách prázdnosti považuje `null` a `undefined` za `true`.
- Reťazce obsahujúce iba biele znaky považuje za prázdne tak, že ich pred kontrolou dĺžky oreže.
- Podporuje bežné kontajnerové typy (polia, `Map`, `Set`) aj obyčajné objekty bez vlastných enumerovateľných vlastností.
- Vyhýba sa započítaniu zdedených vlastností použitím kontrol `hasOwnProperty`.
- Vracia jednoduchý booleovský výsledok (`true`/`false`) vhodný pre guardy a validáciu.

## Použitie

### Syntax

Funkcia:

- `isEmpty(value)`

Parametre:

- `value`: Hodnota, pri ktorej sa má skontrolovať prázdnosť.

### Lokálny import funkcie

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isEmpty(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Súbor bol vygenerovaný 6 February 2026 at 16:20:43 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>