# isEmpty

## Bschrybig

Bestimmt, öb en gegebene Wert läär isch, und git `true` zrugg für `null`, `undefined`, lääri/nume us Läärzeiche
bestehendi Strings, lääri Arrays, lääri `Map`/`Set`, oder Objäkt ohni eigeti enumerable Eigeschafte.

### Aawändig

Bruuch `isEmpty`, zum Inputs z'validiere und fehlendi/leeri Wert über mehri Datetypä z'erkenne (z.B. Formularfälder,
API-Payloads, Konfigurationsobjäkt), wo `null`, `undefined`, Whitespace-Strings, lääri Sammlige und Objäkt ohni
Eigeschafte als läär söllte behandle wärde.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isEmpty` isch es Hilfs-Utility, wo es Boolean zrugg git (kei TypeScript-Type-Predicate), drum verengt es d'Typä nöd
> vo sich us; bruuch es für Validierig/Branching statt fürs Compile-Time-Narrowing.

### Vorteil

- Behandlet `null` und `undefined` bi Läärheitsprüefige als `true`.
- Luegt Strings, wo nume us Läärzeiche bestönd, als läär a, will vor em Prüefe d'Längi trimmt wird.
- Unterstützt gängigi Container-Typä (Arrays, `Map`, `Set`) und eifachi Objäkt ohni eigeti enumerable Eigeschafte.
- Verhindert, dass vererbti Eigeschafte mitzellt wärde, indem `hasOwnProperty`-Prüefige bruucht wärde.
- Git es eifachs boolsches Resultat (`true`/`false`) zrugg, passend für Guards und Validierig.

## Verwendig

### Syntax

Funktion:

- `isEmpty(value)`

Parameter:

- `value`: De Wert, wo uf Läärheit söll prüeft wärde.

### Lokale Funktions-Import

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

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isEmpty(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 16:18:34 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>