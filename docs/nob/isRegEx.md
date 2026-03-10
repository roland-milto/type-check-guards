# isRegEx

## Beskrivelse

Avgjør om en oppgitt verdi er en `RegExp`-instans.

### Brukstilfelle

Valider brukeroppgitte eller dynamiske verdier (f.eks. konfigurasjon, API-nyttelaster, plugin-inndata) før du behandler
dem som et regulært uttrykk.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isRegEx` til å snevre inn `unknown`- (eller union-)verdier før du bruker RegExp-spesifikke egenskaper eller
> metoder; den returnerer `true` kun for verdier som er instanser av `RegExp`.

### Fordeler

- Gir en enkel typevakt ved kjøring for å sjekke om en verdi er en `RegExp`.
- Hjelper med å forhindre feil når kode forventer et regulært uttrykk (f.eks. før man kaller `test`, `exec`, eller leser
  `source`).
- Fungerer både med regex-litteraler og instanser opprettet via `new RegExp(...)`.
- Returnerer et tydelig boolsk resultat (`true`/`false`) uten å kaste feil for ikke-regex-inndata.

## Bruk

### Syntaks

Funksjon:

- `isRegEx(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input er en RegExp her
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isRegEx(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:30:26 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>