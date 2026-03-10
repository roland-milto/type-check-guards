# isIndexFound

## Bschrybig

`isIndexFound` bestimmt, öb en gegebene Wert e nöd-negativi Ganzzahl isch und demit aazeigt, dass en Index gfunde worde
isch.

### Aawändig

Validier, dass es Suechresultat en bruuchbare Index darstellt (Ganzzahl `>= 0`), bevor mer i es Array oder en String
indexiert, und verhinder so s'versehentliche Verwände vo `-1` oder nöd-numerische Wärte.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isIndexFound` nach Operatione wie `indexOf`, `findIndex` oder eigete Suechfunktione, wo `-1` (oder anderi
> ungültigi Wärte) „nöd gfunde“ cha aazeige. Wänn es `true` zruggit, isch de Wert e Zahl und sicher zum als
> Array-/String-Index z'bruuche.

### Vorteil

- Stellt e eifachi Type-Guard zur Verfüegig, zum erkenne, öb en Index gfunde worde isch, indem mer uf e nöd-negativi
  Ganzzahl prüeft.
- Git nume `true` zrugg für gültigi index-ähnligi Wärte (Ganzzahle `>= 0`) und lehnt negativi Wärte, nöd-Ganzzahle und
  nöd-numerischi Wärte ab.
- Hilft, Off-by-one- und Sentinel-Wärt-Fehler z'vermeide, wänn mer mit APIs schafft, wo `-1` für „nöd gfunde“ zrugggeh.

## Verwendig

### Syntax

Funktion:

- `isIndexFound(value)`

Parameter:

- `value`: De Wert, wo mer druf prüeft, öb er e nöd-negativi Ganzzahl isch.

### Lokale Funktions-Import

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx isch do e Zahl da und isch >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typischi Verwendig mit indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isIndexFound(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:45:56 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>