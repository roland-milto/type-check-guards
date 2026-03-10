# isFinite

## Apraksts

Nosaka, vai dotā `value` ir galīgs `number`.

### Lietošanas gadījums

Izmantojiet `isFinite`, lai validētu nezināmu ievadi (piem., no JSON, formām vai API) pirms skaitlisku aprēķinu
veikšanas, nodrošinot, ka vērtība ir reāls, galīgs skaitlis.

> **Piezīme TypeScript lietotājiem:**
>
> `isFinite` atgriež `true` tikai galīgiem skaitļiem; tas atgriež `false` vērtībām `NaN`, `Infinity` un jebkurai
> vērtībai, kas nav skaitlis.

### Priekšrocības

- Izmanto iebūvēto `Number.isFinite`, lai nodrošinātu uzticamu galīguma pārbaudi.
- Atgriež `true` tikai galīgiem skaitļiem; atgriež `false` vērtībām `NaN`, `Infinity` un ievadēm, kas nav skaitļi.
- Vienkāršs, bez blakusefektiem esošs predikāts, kas piemērots validācijai un aizsargloģikai.

## Lietošana

### Sintakse

Funkcija:

- `isFinite(value)`

Parametri:

- `value`: Vērtība, kurai jāpārbauda galīgums.

### Lokāls funkcijas imports

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers ir: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value šeit ir galīgs skaitlis
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isFinite(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 16:30:34 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>