# isNumeric

## Apraksts

`isNumeric` nosaka, vai dotā `value` tiek uzskatīta par skaitlisku, pārbaudot tās noteikto tipu pret `NUMERIC_TYPES`.

### Lietošanas gadījums

Izmantojiet `isNumeric`, lai validētu ievades datus (piem., API slodzes, formas vērtības, konfigurāciju) pirms
skaitlisku operāciju veikšanas, un lai konsekventi pieņemtu skaitliskām līdzīgus tipus (piemēram, `BigInt`) saskaņā ar
`NUMERIC_TYPES`.

> **Piezīme TypeScript lietotājiem:**
>
> `isNumeric` ir predikāts, kas atgriež būla vērtību; uztveriet to kā izpildlaika pārbaudi, vai vērtība pieder
> bibliotēkas definētajai skaitlisko tipu kopai.

### Priekšrocības

- Izmanto `getTypeOf` kopā ar `NUMERIC_TYPES`, lai centralizētu skaitlisko vērtību noteikšanas loģiku un uzturētu
  pārbaudes konsekventas visā kodbāzē.
- Atgriež vienkāršu būla vērtību (`true`/`false`) ērtai atzarošanai un izmantošanai kā sargpārbaudei.
- Atbalsta vairākas skaitliskās reprezentācijas (piem., `number`, `BigInt`), kā noteikts `NUMERIC_TYPES`.

## Lietošana

### Sintakse

Funkcija:

- `isNumeric(value)`

Parametri:

- `value`: Vērtība, kurai jāpārbauda, vai tai ir skaitlisks tips.

### Lokāls funkcijas imports

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v tiek uzskatīts par skaitlisku saskaņā ar bibliotēkas tipu noteikumiem
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isNumeric(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 15:53:23 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>