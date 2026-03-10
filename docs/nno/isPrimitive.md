# isPrimitive

## Skildring

`isPrimitive` avgjer om ein gitt verdi er ein primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Brukstilfelle

Valider inndata ved køyretid (t.d. felt i API-nyttelast, konfigurasjonsverdiar eller brukargjevne data) for å sikre at
ein verdi er ein primitive før serialisering, logging eller bruk av operasjonar som berre gjeld primitive.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isPrimitive` til å verne `unknown`-inndata før du handsamar dei som objekt eller funksjonar; han returnerer
`true` for primitive og `false` for objekt og funksjonar.

### Fordelar

- Rask, allokeringsfri sjekk for om ein verdi er ein JavaScript-primitive.
- Handterer `null` korrekt som primitive (sjølv om `typeof null` er `"object"`).
- Hjelper med å snevre inn `unknown`-verdiar før ein utfører operasjonar som berre gjeld objekt.

## Bruk

### Syntaks

Funksjon:

- `isPrimitive(value)`

Parameter:

- `value`: Verdien som skal sjekkast for primitiv type.

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

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isPrimitive(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:57:11 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>