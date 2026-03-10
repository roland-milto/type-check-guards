# areFinite

## Bschrybig

`areFinite` prüeft, öb en Wert e nöd-lääri Array isch, wo sini Element alli endli Zahle sind, und git denn `true` zrugg,
susch `false`.

### Aawändig

Validier numerischi Yygab-Arrays (z. B. Chart-Serië, Koordinate-Lischte, Messwert-Stichprobe), bevor du Rechnige
machsch, und stell sicher, dass s Resultat nume denn `true` isch, wänn alli Wert endli Zahle sind.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areFinite`, wänn du sicherstelle wotsch, dass es Array nöd lääri isch und nume endli Zahle enthaltet; es git
`false` zrugg für lääri Arrays und für Arrays, wo `NaN` oder Unendliche drin hend.

### Vorteil

- Git `true` zrugg nume, wänn d’Yygab e nöd-lääri Array isch und jedes Element e endli Zahl isch.
- Lehnt `Infinity`, `-Infinity` und `NaN` ab, indem für jedes Element `isFinite`-Prüefige bruucht wärde.
- Liferet es eifachs boolesch Resultat (`true`/`false`), passend für Guards und Validierig-Flows.

## Verwendig

### Syntax

Funktion:

- `areFinite(array)`

Parameter:

- `array`: S Array, wo söll überprüeft werde, öb alli sini Element endli sind.

### Lokale Funktions-Import

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // wahr
console.log(areFinite(b)); // falsch
console.log(areFinite(c)); // falsch

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areFinite(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 16:34:46 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>