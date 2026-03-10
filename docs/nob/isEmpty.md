# isEmpty

## Beskrivelse

Avgjør om en gitt verdi er tom, og returnerer `true` for `null`, `undefined`, tomme/kun-mellomrom-strenger, tomme
arrayer, tom `Map`/`Set`, eller objekter uten egne enumerable egenskaper.

### Brukstilfelle

Bruk `isEmpty` til å validere input og oppdage manglende/tomme verdier på tvers av flere datatyper (f.eks. skjemafelt,
API-payloads, konfigurasjonsobjekter) der `null`, `undefined`, mellomrom-strenger, tomme samlinger og objekter uten
egenskaper skal behandles som tomme.

> **Merknad for TypeScript-brukere:**
>
> `isEmpty` er et verktøy som returnerer en boolsk verdi (ikke et TypeScript type predicate), så det snevrer ikke inn
> typer av seg selv; bruk det til validering/forgrening heller enn innskrenking ved kompileringstid.

### Fordeler

- Behandler `null` og `undefined` som `true` ved tomhetssjekker.
- Anser strenger som kun består av mellomrom som tomme ved å trimme før lengden sjekkes.
- Støtter vanlige beholdertyper (arrayer, `Map`, `Set`) og vanlige objekter uten egne enumerable egenskaper.
- Unngår å telle arvede egenskaper ved å bruke `hasOwnProperty`-sjekker.
- Returnerer et enkelt boolsk resultat (`true`/`false`) som egner seg for guards og validering.

## Bruk

### Syntaks

Funksjon:

- `isEmpty(value)`

Parametere:

- `value`: Verdien som skal sjekkes for tomhet.

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

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isEmpty(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Filen ble generert 6 February 2026 at 16:20:02 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>