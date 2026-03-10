# areIntegers

## Bschrybig

`areIntegers` bestimmt, öb alli Element i eme gegebene Array Ganzzahle sind, und git `true` zrugg, wänn das so isch, und
suscht `false`.

### Aawändig

Bruuch `areIntegers`, zum vom Benutzer aagee oder externi Date (z.B. Query-Parameter, JSON-Payloads, CSV-Ziile)
z'validiere, wänn dini Logik e gfüllti Lischt vo Ganzzahl-Werte bruucht, wie z.B. IDs, Zähler, Pagination-Offsets oder
Array-Indizes.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areIntegers` als Runtime-Guard für `unknown[]`-Iigabe, bevor du sie als `number[]` behandlisch, wo nume
> Ganzzahle drin het. Wänn es `false` zrugg git, isch d Iigab entweder kei gfüllts Array oder sie enthält mindestens ein
> Wert, wo kei Ganzzahl isch.

### Vorteil

- Git nume `true` zrugg nume, wänn jedes Element e Ganzzahl isch; suscht git's `false` zrugg.
- Hilft, unbekannti Iigab z'validiere, bevor mer Operatione macht, wo nume mit Ganzzahle funktioniere (z.B. Indexierig,
  Zählige, IDs).
- Scheitert schnäll: hört uf z'prüefe, sobald es Element gfunde wird, wo kei Ganzzahl isch.

## Verwendig

### Syntax

Funktion:

- `areIntegers(array)`

Parameter:

- `array`: S Array, wo uf Ganzzahl-Element söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // wohr
console.log(areIntegers(b)); // wohr
console.log(areIntegers(c)); // falsch

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areIntegers(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:58:27 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>