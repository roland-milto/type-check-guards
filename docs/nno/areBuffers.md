# areBuffers

## Skildring

`areBuffers` sjekkar om den oppgjevne verdien er eit ikkje-tomt, utfylt array der kvart element er ein `Buffer`, og
returnerer `true` i så fall og `false` elles.

### Brukstilfelle

Valider innkomande chunk-array (t.d. frå straumar, filopplastingar eller nettverkspakkar) for å sikre at alle delar er
`Buffer`-instansar før du set dei saman, dekodar, eller sender dei vidare til kryptografiske eller binærhandsamande
funksjonar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areBuffers` til å validere `unknown[]` før du kallar Buffer-spesifikke API-ar som `Buffer.concat`, og sikre at
> funksjonen berre returnerer `true` når kvart element er ein `Buffer`.

### Fordelar

- Sikrar at kvart element i inndata er ein Node.js-`Buffer`-instans, og returnerer `true` berre når heile arrayet
  samsvarar.
- Avviser ugyldige inndata tidleg ved å krevje eit ikkje-tomt, utfylt array; returnerer `false` for tomme array eller
  verdiar som ikkje er array.
- Nyttig som ein vakt før ein utfører operasjonar som berre gjeld bufferar (t.d. samankjeding, hashing, binære
  protokollar).

## Bruk

### Syntaks

Funksjon:

- `areBuffers(array)`

Parameter:

- `array`: Arrayet som skal kontrollerast for buffer-instansar.

### Lokal funksjonsimport

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areBuffers(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 16:26:34 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>