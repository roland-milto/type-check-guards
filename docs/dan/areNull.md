# areNull

## Beskrivelse

Kontrollerer, om alle elementer i det givne `array` er `null`.

### Anvendelsestilfælde

Validér, at en datasætkolonne, en API-feltliste eller et placeholder-array kun indeholder `null`-værdier, før du
anvender logik, der antager, at alle poster er bevidst tomme.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areNull`, når du har brug for en streng kontrol af, at et input er et ikke-tomt array, og at hvert element er
> præcis `null` (ikke `undefined`, ikke falsy-værdier).

### Fordele

- Returnerer kun `true`, når hvert element er `null`, hvilket gør den til en streng “alle matcher”-vagt.
- Afviser ikke-arrays og tomme arrays ved at returnere `false`, hvilket forhindrer utilsigtede truthy-resultater ved
  ugyldigt input.
- Fungerer godt som en forudsætningskontrol, før der behandles data, som skal være udelukkende `null`.

## Brug

### Syntaks

Funktion:

- `areNull(array)`

Parametre:

- `array`: Input-arrayet, der skal kontrolleres for `null`-elementer.

### Lokal import af funktion

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // sand
const allNullB = areNull(b); // falsk

const notAnArray = areNull(123 as unknown as unknown[]); // falsk
const empty = areNull([]); // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areNull(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areNull](../_analysis/areNull.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 15:42:57 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>