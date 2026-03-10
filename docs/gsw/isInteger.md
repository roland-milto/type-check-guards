# isInteger

## Bschrybig

Bestimmt, öb e gegebnigs `value` e sichere Ganzzahl isch.

### Aawändig

Validier nöd vertrauenswürdigi Iigabe (z.B. Query-Params, JSON-Payloads, Umgebigsvariable), bevor du si als Ganzzahl für
Array-Indizes, Pagination, Zähler oder Datenbank-IDs bruuchsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isInteger`, zum unbekannti Iigab z validiere, bevor du si als numerischi Ganzzahl behandlisch; es git nume
`true` zrugg für Wärte, bi dene `typeof value === "number"` und `Number.isSafeInteger(value)` gilt.

### Vorteil

- Prüeft sowohl d Typ- wie au d Zahlensicherheit: git nume `true` zrugg, wänn d Iigab e Zahl und e sichere Ganzzahl
  isch.
- Verhindert tüüfeli Fallstrick bi numerischer Umwandlig: Strings wie "5" gäbed korrekt `false` zrugg.
- Lehnt Nicht-Ganzzahle und unsicheri Ganzzahle ab, drum isch es guet für IDs, Zähler und s Indexiere vo Arrays.

## Verwendig

### Syntax

Funktion:

- `isInteger(value)`

Parameter:

- `value`: Dr Wert, wo uf Ganzzahl-Status söll prüeft werde.

### Lokale Funktions-Import

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // wahr
const b = isInteger(-100);   // wahr
const c = isInteger("5");    // falsch
const d = isInteger(5.5);    // falsch
const e = isInteger(null);   // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isInteger(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:49:56 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>