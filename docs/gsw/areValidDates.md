# areValidDates

## Bschrybig

Bestimmt, öb es Array nöd läär isch und usschliesslich us gültige `Date`-Objekt besteht.

### Aawändig

Bruuch `areValidDates`, zum vom User oder vo ere API gliefereti Arrays z validiere, bevor du datum-basierte Operatione
machsch (sortiere, Bereichsprüefige, formatiere), demit alli Iiträg würkli echt, gültigi `Date`-Objekt sind und d Liste
nöd läär isch.

> **Hinwiis für TypeScript-Nutzer:**
>
> `areValidDates` git bi eme lääre Array `false` zrugg; stell sicher, dass s Array würkli als nöd läär gmeint isch,
> bevor du di druf als Validierigsschritt verlahsch.

### Vorteil

- Git `true` nume zrugg, wänn jedes Element e gültigi `Date`-Instanz isch (kei ungültigi Datume wie
  `new Date('invalid')`).
- Lehnt läärs Input ab, indem es `false` zrugg git, und stellt sicher, dass du nume sinnvolli, nöd-lääri Datums-Listene
  akzeptiersch.
- Bietet e eifachi Boolesch-Guard-Prüefig, wo sich guet mit andere Validierige zämesetze laht.

## Verwendig

### Syntax

Funktion:

- `areValidDates(array)`

Parameter:

- `array`: S Array, wo überprüeft werde söll, und wo möglicherwiis `Date`-Objekt enthält.

### Lokale Funktions-Import

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // wahr
console.log(areValidDates(b)); // falsch
console.log(areValidDates(c)); // falsch
console.log(areValidDates(d)); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areValidDates(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:31:50 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>