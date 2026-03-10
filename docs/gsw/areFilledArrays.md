# areFilledArrays

## Bschrybig

`areFilledArrays` prüeft, öb es zweidimensionali Array nöd läär isch und alli sini Subarrays nöd läär sind.

### Aawändig

Bruuch `areFilledArrays`, zum tabellarischi oder matrix-ähnlichi Inputs (z. B. CSV-Zeile, Grid-Date, gruppierti
Resultat) z validiere, demit du sicher chasch drvo usgah, dass es mindeschtens e Subarray git und kei Subarray läär
isch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areFilledArrays`, wänn du sicherstelle muesch, dass es 2D-Array mindeschtens e Zeile het und jedi Zeile
> mindeschtens es Element het, bevor du drüber iteriersch oder druf zuegriffsch (Indexing).

### Vorteil

- Validiert, dass s äussere Array nöd läär isch und dass jedi innere Array au nöd läär isch, und git nume denn `true`
  zrugg, wänn beidi Bedingige erfüllt sind.
- Funktioniert mit allne Element-Typen i de Subarrays (z. B. Zahle, Strings, Objekte, verschachtleti Arrays), wil s nume
  prüeft, öb d Array „gfüllt“ sind, nöd dr Inhalt vo de Elemente.
- Liferet es eifachs boolsches Resultat (`true`/`false`), wo sich guet als Guard eignet, bevor mer zweidimensionali Date
  verarbeit.

## Verwendig

### Syntax

Funktion:

- `areFilledArrays(array)`

Parameter:

- `array`: S zweidimensionali Array, wo überprüeft werde söll.

### Lokale Funktions-Import

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // wahr
console.log(areFilledArrays(b)); // wahr
console.log(areFilledArrays(c)); // wahr
console.log(areFilledArrays(d)); // falsch
console.log(areFilledArrays(e)); // falsch
console.log(areFilledArrays(f)); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areFilledArrays(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 11:56:43 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>