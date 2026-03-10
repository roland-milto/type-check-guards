# areHexadecimals

## Skildring

Sjekkar om alle element i ein array er heksadesimale strengar, og returnerer `true` berre for ikkje-tomme arrayar der
kvart element er gyldig.

### Brukstilfelle

Bruk `areHexadecimals` til å validere brukarinnputt eller eksterne data (t.d. ID-ar, sjekksummar, fargekodar utan ein
innleiande '#') før du utfører heksadesimal parsing eller vidare handsaming.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areHexadecimals` til å validere ukjende inndata før du parsar eller konverterer verdiar (til dømes før
`parseInt(value, 16)` eller BigInt-konverteringar).

### Fordelar

- Validerer at kvart element er ein heksadesimal streng og returnerer `true` berre når alle elementa samsvarar.
- Avviser tomme arrayar med vilje, og returnerer `false` når inndata manglar.
- Gjev eit enkelt boolsk resultat (`true`/`false`) som passar for guards og tidleg-retur-validering.

## Bruk

### Syntaks

Funksjon:

- `areHexadecimals(array)`

Parameter:

- `array`: Arrayen som skal sjekkast for heksadesimale streng-element.

### Lokal funksjonsimport

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areHexadecimals(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 23:07:16 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>