# areBuffers

## Beskrivelse

`areBuffers` sjekker om den oppgitte verdien er et ikke-tomt, utfylt array der hvert element er en `Buffer`, og
returnerer `true` hvis det er tilfelle og `false` ellers.

### Brukstilfelle

Valider innkommende chunk-arrayer (f.eks. fra strømmer, filopplastinger eller nettverkspakker) for å sikre at alle deler
er `Buffer`-instanser før du sammenkjedner, dekoder eller sender dem til kryptografiske eller binærbehandlende
funksjoner.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areBuffers` til å validere `unknown[]` før du kaller Buffer-spesifikke API-er som `Buffer.concat`, slik at
> funksjonen returnerer `true` bare når hvert element er en `Buffer`.

### Fordeler

- Sikrer at hvert element i inndataene er en Node.js-`Buffer`-instans, og returnerer `true` bare når hele arrayet
  samsvarer.
- Avviser ugyldige inndata tidlig ved å kreve et ikke-tomt, utfylt array; returnerer `false` for tomme arrayer eller
  ikke-arrayer.
- Nyttig som en vakt før du utfører operasjoner som kun gjelder buffere (f.eks. sammenkjedning, hashing, binære
  protokoller).

## Bruk

### Syntaks

Funksjon:

- `areBuffers(array)`

Parametere:

- `array`: Arrayet som skal sjekkes for buffer-instanser.

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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areBuffers(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 16:26:35 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>