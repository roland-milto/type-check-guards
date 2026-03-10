# getTypeOf

## Skildring

`getTypeOf` returnerer ei detaljert, menneskeleg typeetikett for ein gitt verdi, inkludert meir presise numeriske typar
og spesifikke objektslag.

### Brukstilfelle

Bruk `getTypeOf` for å normalisere typeoppdaging i inndatavalidering og diagnostikk—til dømes for å avvise `nan`, berre
godta `integer`-ID-ar, handsame numeriske strengar som `decimal` annleis enn vanleg `string`, eller for å logge presise
objektslag som `date` og `regexp`.

> **Merknad for TypeScript-brukarar:**
>
> Returtypen er `DataTypeAsString | string`. Handsam han som ei skildrande etikett; samanlikn mot kjende literal som
`integer`, `float`, `nan`, `array`, `null` og `undefined` når du greinar.

### Fordelar

- Returnerer ein meir finmaska typestreng enn JavaScript sin `typeof`, inkludert numeriske undertypar som `integer`,
  `float` og `nan`.
- Skil `null` og `undefined` tydeleg som `null` og `undefined`.
- Oppdagar vanlege format for numeriske strengar og rapporterer dei som `binary`, `octal`, `decimal` eller `hexadecimal`
  i staden for berre `string`.
- Identifiserer òg tabellar som `array` og brukar `Object.prototype.toString` for å gje spesifikke objekttypenamn (t.d.
  `date`, `regexp`, `map`, `set`).
- Svært nyttig for validering, logging og feilsøking der ein treng konsistente, menneskelege typemerkingar.

## Bruk

### Syntaks

Funksjon:

- `getTypeOf(value)`

Parameter:

- `value`: Verdien du vil fastsetje datatypen for.

### Lokal funksjonsimport

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Døme på sjekkar
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.getTypeOf(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Fila vart generert 6 February 2026 at 13:13:42 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>