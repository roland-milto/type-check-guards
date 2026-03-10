# isString

## Beskrivelse

`isString` avgjør om en gitt verdi er en streng.

### Brukstilfelle

Valider brukerinput, API-payload-felter eller konfigurasjonsverdier ved runtime for å sikre at en verdi er en streng før
du bruker strengoperasjoner (f.eks. trimming, splitting, endring av store/små bokstaver).

> **Merknad for TypeScript-brukere:**
>
> Bruk `isString` for å validere `unknown` eller løst typede verdier før du kaller strengmetoder; den returnerer `true`
> bare når `typeof value === "string"`.

### Fordeler

- Enkel og rask sjekk ved å bruke `typeof`.
- Returnerer et forutsigbart boolsk resultat: `true` for strenger, ellers `false`.
- Fungerer for både tomme og ikke-tomme strenger.
- Nyttig som en lettvekts runtime-guard før du utfører strengspesifikke operasjoner.

## Bruk

### Syntaks

Funksjon:

- `isString(value)`

Parametere:

- `value`: Verdien som skal testes for strengtype.

### Lokal funksjonsimport

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input ke thapo mo
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isString(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isString](../_analysis/isString.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:15:04 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>