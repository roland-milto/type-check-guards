# isBinary

## Beskrivelse

`isBinary` avgjør om en verdi er en binærstreng (valgfritt med prefiks `0b`/`0B`) og returnerer `true` eller `false`.

### Brukstilfelle

Valider brukeroppgitte strenger (f.eks. skjemafelt, CLI-argumenter, konfigurasjonsverdier) for å sikre at de kun
representerer binære sifre, eventuelt med prefiks `0b`/`0B`, før videre behandling.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isBinary` som en type guard før du parser eller konverterer en streng til `BigInt`/`Number` for å unngå ugyldige
> inndata.

### Fordeler

- Godtar binærstrenger med eller uten prefikset `0b`/`0B`.
- Avviser tomme strenger og strenger med innledende/etterfølgende blanktegn (ASCII ≤ 32).
- Returnerer `true`/`false` uten å kaste feil, noe som gjør den trygg for ukjente inndata.

## Bruk

### Syntaks

Funksjon:

- `isBinary(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // sann
const b = isBinary("1010");   // sann
const c = isBinary("0b1020"); // usann
const d = isBinary(0b1010);     // usann

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isBinary(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 23:10:51 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>