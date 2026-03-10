# isBuffer

## Skildring

Sjekkar om ein verdi er ein Node.js-`Buffer` og returnerer `true` eller `false`.

### Brukstilfelle

Valider input ved køyretid (t.d. API-nyttelaster, fildata eller meldingsbufferar) for å sikre at ein verdi er ein
`Buffer` før han blir behandla, og få påliteleg `false` når du køyrer utanfor Node.js der `Buffer` kanskje ikkje finst.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isBuffer` til å snevre inn `unknown`-verdiar til `Buffer` før du kallar Buffer-spesifikke metodar.

### Fordelar

- Oppdagar trygt Node.js-`Buffer`-instansar ved å bruke `Buffer.isBuffer`.
- Returnerer `false` i miljø der `Buffer` ikkje er tilgjengeleg, og unngår køyretidsfeil.
- Fungerer med `unknown`-input, noko som gjer han eigna for validering ved køyretid og typeinnsnevring.

## Bruk

### Syntaks

Funksjon:

- `isBuffer(value)`

Parameter:

- `value`: Verdien som skal testast.

### Lokal funksjonsimport

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // sann
console.log(isBuffer(b)); // usann

if (isBuffer(a)) {
  // a er ein Buffer her
  console.log(a.toString("utf8"));
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isBuffer(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 16:32:39 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>