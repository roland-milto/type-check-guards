# isIndexFound

## Skildring

`isIndexFound` avgjer om ein gitt verdi er eit ikkje-negativt heiltal, som indikerer at ein indeks er funnen.

### Brukstilfelle

Valider at eit søkjeresultat representerer ein brukbar indeks (heiltal `>= 0`) før du indekserer inn i ein array eller
streng, for å hindre utilsikta bruk av `-1` eller ikkje-numeriske verdiar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isIndexFound` etter operasjonar som `indexOf`, `findIndex` eller eigendefinerte søk der `-1` (eller andre
> ugyldige verdiar) kan indikere «ikkje funnen». Når han returnerer `true`, er verdien eit tal og trygg å bruke som
> indeks
> i array/streng.

### Fordelar

- Gjev ein enkel typevakt for å oppdage om ein indeks vart funnen ved å sjekke etter eit ikkje-negativt heiltal.
- Returnerer `true` berre for gyldige indeksliknande verdiar (heiltal `>= 0`), og avviser negative tal, ikkje-heiltal og
  ikkje-tal.
- Hjelper med å unngå off-by-one- og sentinelverdi-feil når ein jobbar med API-ar som returnerer `-1` for «ikkje
  funnen».

## Bruk

### Syntaks

Funksjon:

- `isIndexFound(value)`

Parameter:

- `value`: Verdien som skal sjekkast for å vere eit ikkje-negativt heiltal.

### Lokal funksjonsimport

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx er eit tal her og er >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typisk bruk med indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isIndexFound(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:47:10 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>