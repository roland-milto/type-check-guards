# isPrimitive

## Beskrivelse

`isPrimitive` avgjør om en gitt verdi er en primitiv (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Brukstilfelle

Valider inndata ved kjøring (f.eks. API-payload-felter, konfigurasjonsverdier eller brukeroppgitte data) for å sikre at
en verdi er en primitiv før serialisering, logging eller bruk av operasjoner som kun gjelder primitiver.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isPrimitive` til å beskytte `unknown`-inndata før du behandler dem som objekter eller funksjoner; den returnerer
`true` for primitiver og `false` for objekter og funksjoner.

### Fordeler

- Rask, allokeringsfri sjekk for om en verdi er en JavaScript-primitiv.
- Behandler `null` korrekt som primitiv (selv om `typeof null` er `"object"`).
- Hjelper med å snevre inn `unknown`-verdier før du utfører operasjoner som kun gjelder objekter.

## Bruk

### Syntaks

Funksjon:

- `isPrimitive(value)`

Parametere:

- `value`: Verdien som skal sjekkes for primitiv type.

### Lokal funksjonsimport

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isPrimitive(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:57:12 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>