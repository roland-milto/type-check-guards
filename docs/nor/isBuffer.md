# isBuffer

## Beskrivelse

Sjekker om en verdi er en Node.js-`Buffer` og returnerer `true` eller `false`.

### Brukstilfelle

Valider inndata ved kjøretid (f.eks. API-nyttelaster, fildata eller meldingsbuffere) for å sikre at en verdi er en
`Buffer` før den behandles, og få pålitelig `false` når du kjører utenfor Node.js der `Buffer` kanskje ikke finnes.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isBuffer` til å snevre inn `unknown`-verdier til `Buffer` før du kaller Buffer-spesifikke metoder.

### Fordeler

- Oppdager trygt Node.js-`Buffer`-instanser ved å bruke `Buffer.isBuffer`.
- Returnerer `false` i miljøer der `Buffer` ikke er tilgjengelig, og unngår kjøretidsfeil.
- Fungerer med `unknown`-input, noe som gjør den egnet for kjøretidsvalidering og typeinnsnevring.

## Bruk

### Syntaks

Funksjon:

- `isBuffer(value)`

Parametere:

- `value`: Verdien som skal testes.

### Lokal funksjonsimport

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // sant
console.log(isBuffer(b)); // falsk

if (isBuffer(a)) {
  // a er ein Buffer her
  console.log(a.toString("utf8"));
}
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isBuffer(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 16:32:40 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>