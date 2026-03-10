# isIndexFound

## Beskrivelse

`isIndexFound` avgjør om en gitt verdi er et ikke-negativt heltall, som indikerer at en indeks er funnet.

### Brukstilfelle

Valider at et søkeresultat representerer en brukbar indeks (heltall `>= 0`) før du indekserer inn i en array eller
streng, og unngå utilsiktet bruk av `-1` eller ikke-numeriske verdier.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isIndexFound` etter operasjoner som `indexOf`, `findIndex` eller egendefinerte søk der `-1` (eller andre
> ugyldige verdier) kan indikere «ikke funnet». Når den returnerer `true`, er verdien et tall og trygg å bruke som indeks
> i en array/streng.

### Fordeler

- Gir en enkel typevakt for å oppdage om en indeks ble funnet ved å sjekke etter et ikke-negativt heltall.
- Returnerer `true` bare for gyldige indeks-lignende verdier (heltall `>= 0`), og avviser negative tall, ikke-heltall og
  ikke-tall.
- Hjelper med å unngå off-by-one- og sentinelverdi-feil når du jobber med API-er som returnerer `-1` for «ikke funnet».

## Bruk

### Syntaks

Funksjon:

- `isIndexFound(value)`

Parametere:

- `value`: Verdien som skal sjekkes for å være et ikke-negativt heltall.

### Lokal funksjonsimport

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx er et tall her og er >= 0
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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isIndexFound(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 00:47:08 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>