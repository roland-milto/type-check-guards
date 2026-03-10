# areFalse

## Beskrywing

`areFalse` kontroleer of alle elemente in ’n verskafde skikking streng die booleaanse `false` is.

### Gebruikscenario

Valideer dat ’n lys van feature flags, kontroles, of guard-resultate almal `false` is voordat jy voortgaan (bv. bevestig
dat geen blokkerende toestande teenwoordig is nie).

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areFalse` wanneer jy ’n streng validering nodig het dat ’n skikking nie leeg is nie en slegs die booleaanse
> waarde `false` bevat.

### Voordele

- Verseker dat elke element streng `false` is (geen truthy/falsey-kohersie).
- Gee `false` terug vir nie-skikkings of leë skikkings deur ’n gevulde skikking via `isFilledArray` te vereis.
- Stop vroeg by die eerste nie-`false` element vir doeltreffendheid.

## Gebruik

### Sintaksis

Funksie:

- `areFalse(array)`

Parameters:

- `array`: Die skikking om na te gaan, wat elemente van enige tipe bevat.

### Plaaslike funksie-invoer

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // waar
const b = areFalse([false, true, false]);  // vals
const c = areFalse([false, "false", false]); // vals
const d = areFalse([]); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areFalse(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 16:16:06 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>