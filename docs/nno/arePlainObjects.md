# arePlainObjects

## Skildring

Sjekkar om alle element i eit array er vanlege objekt, og returnerer `true` berre dersom kvart element kvalifiserer.

### Brukstilfelle

Valider eksterne eller utypte data (t.d. tolka JSON, API-payloadar, skjemainnsendingar) for å sikre at du har fått eit
ikkje-tomt array der kvar oppføring er eit vanleg objekt før du itererer og les eigenskapar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `arePlainObjects` til å validere ukjend inndata før du handsamar det som `Record<string, unknown>[]` (eller ei
> strengare objektform) i TypeScript.

### Fordelar

- Sikrar at kvart element i inndata-arrayet er eit vanleg objekt, og returnerer `true` berre når alle elementa
  samsvarar.
- Avviser ugyldige inndata tidleg (ikkje-array eller tomme array) ved å returnere `false`.
- Reknar både objekt-literal-objekt og `Object.create(null)`-objekt som gyldige vanlege objekt.

## Bruk

### Syntaks

Funksjon:

- `arePlainObjects(array)`

Parameter:

- `array`: Arrayet som skal kontrollerast for vanlege objekt-element.

### Lokal funksjonsimport

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // sant
const b = arePlainObjects([{}, Object.create(null)]); // sant
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // usant
const d = arePlainObjects([] as unknown[]); // usant
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.arePlainObjects(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 16:55:02 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>