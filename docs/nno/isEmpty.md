# isEmpty

## Skildring

Avgjer om ein gitt verdi er tom, og returnerer `true` for `null`, `undefined`, tomme/blankteikn-strengjer, tomme
tabellar, tom `Map`/`Set`, eller objekt utan eigne oppramsbare eigenskapar.

### Brukstilfelle

Bruk `isEmpty` til å validere inndata og oppdage manglande/tomme verdiar på tvers av fleire datatypar (t.d. skjemafelt,
API-payloadar, konfigurasjonsobjekt) der `null`, `undefined`, blankteikn-strengjer, tomme samlingar og objekt utan
eigenskapar skal reknast som tomme.

> **Merknad for TypeScript-brukarar:**
>
> `isEmpty` er eit verktøy som returnerer ein boolsk verdi (ikkje eit TypeScript-typepredikat), så det snevrar ikkje inn
> typar av seg sjølv; bruk det til validering/forgreining heller enn innsnerving ved kompileringstid.

### Fordelar

- Handsamar `null` og `undefined` som `true` ved sjekk av om noko er tomt.
- Reknar strengjer som berre inneheld blankteikn som tomme ved å trimme før lengda blir sjekka.
- Støttar vanlege containertypar (tabellar, `Map`, `Set`) og enkle objekt utan eigne oppramsbare eigenskapar.
- Unngår å telje arva eigenskapar ved å bruke `hasOwnProperty`-sjekkar.
- Returnerer eit enkelt boolsk resultat (`true`/`false`) som passar for vakter og validering.

## Bruk

### Syntaks

Funksjon:

- `isEmpty(value)`

Parameter:

- `value`: Verdien som skal sjekkast for om ho er tom.

### Lokal funksjonsimport

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isEmpty(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 16:19:56 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>