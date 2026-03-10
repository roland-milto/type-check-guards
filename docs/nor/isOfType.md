# isOfType

## Beskrivelse

Avgjør om en gitt `value` samsvarer med en spesifisert typestreng, ved å bruke `typeof` for primitive typer og en
reserve for komplekse typer.

### Brukstilfelle

Valider og snevre inn `unknown`-inndata (f.eks. API-responser, brukerinput, parsede JSON-data) ved å sjekke om en verdi
er av en forventet typestreng før du utfører typespesifikke operasjoner.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isOfType` til å forgrene på runtime-typer når du jobber med `unknown`-verdier; den returnerer `true`/`false` og
> behandler `null` og `undefined` eksplisitt.

### Fordeler

- Sjekker primitive typer via direkte `typeof` for hastighet og tydelighet.
- Håndterer `null` og `undefined` korrekt, noe `typeof` alene ikke kan skille slik det er ment.
- Støtter komplekse eller egendefinerte typestrenger via en reserve-sammenligning ved bruk av `getTypeOf`.
- Returnerer et enkelt boolsk resultat (`true`/`false`) som passer for guards og forgrening.

## Bruk

### Syntaks

Funksjon:

- `isOfType(value, type)`

Parametere:

- `value`: Verdien som skal testes mot `type`.
- `type`: Strengrepresentasjonen av typen det skal sjekkes mot.

### Lokal funksjonsimport

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input ke nomoro mo
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input ke thapo mo
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isOfType(value, type)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 17:05:31 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>