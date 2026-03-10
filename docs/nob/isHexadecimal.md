# isHexadecimal

## Beskrivelse

`isHexadecimal` sjekker om en gitt verdi er en heksadesimal strengliteral med obligatorisk `0x`/`0X`-prefiks.

### Brukstilfelle

Bruk `isHexadecimal` til å validere konfigurasjonsverdier, felt i API-nyttelast eller CLI-argumenter som må oppgis som
heksadesimale strengliteraler (f.eks. ID-er, masker eller adresser) og ikke må inneholde omgivende mellomrom.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isHexadecimal` når du trenger å validere brukerinndata eller serialiserte data som en streng, strikt
> heksadesimal literal (inkludert `0x`/`0X`-prefikset) før du parser eller konverterer den.

### Fordeler

- Validerer at en verdi er en streng og samsvarer med et strengt heksadesimalt literalformat (krever `0x`/`0X`-prefiks).
- Avviser strenger med innledende eller etterfølgende mellomrom, noe som bidrar til å unngå utilsiktet aksept av
  polstret inndata.
- Støtter valgfritt fortegn og er ikke skille mellom store og små bokstaver for prefiks og sifre, og returnerer `true`/
  `false` på en forutsigbar måte.

## Bruk

### Syntaks

Funksjon:

- `isHexadecimal(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (mangler prefiks)
isHexadecimal(" 0x1A2B"); // false (innledende mellomrom)
isHexadecimal(0x1a2b); // false (ikke en streng)
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isHexadecimal(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 22:59:53 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>