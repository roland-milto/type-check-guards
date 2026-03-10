# isNullOrUndefined

## Skildring

Sjekkar om ein gitt verdi er `null` eller `undefined`.

### Brukstilfelle

Bruk `isNullOrUndefined` når du treng å handsame både `null` og `undefined` som «ingen verdi», til dømes ved validering
av valfrie inndata, normalisering av API-nyttelast, eller vern av kodebanar før du derefererer ein verdi som kan mangle.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isNullOrUndefined` for å verne mot manglande verdiar før du får tilgang til eigenskapar eller kallar metodar;
> han returnerer `true` berre for `null` og `undefined`.

### Fordelar

- Gjev ein tydeleg, gjenbrukbar vakt for å oppdage `null` og `undefined` på éin stad.
- Returnerer ein enkel boolsk verdi (`true`/`false`) som er lett å setje saman i vilkår og valideringar.
- Hjelper med å unngå vanlege køyretidsfeil ved å sjekke etter manglande verdiar før ein får tilgang til eigenskapar
  eller kallar metodar.

## Bruk

### Syntaks

Funksjon:

- `isNullOrUndefined(value)`

Parameter:

- `value`: Verdien som skal sjekkast for `null` eller `undefined`.

### Lokal funksjonsimport

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // handter manglande verdi
}

console.log(isNullOrUndefined(b)); // sant
console.log(isNullOrUndefined(c)); // usant

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isNullOrUndefined(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:34:44 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>