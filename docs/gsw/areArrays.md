# areArrays

## Bschrybig

`areArrays` bestimmt, öb e Wert e gfüllti zweidimensionali Array isch, wo alli Items Arrays sind.

### Aawändig

Bruuch `areArrays`, zum tabellarischi oder matrix-ähnlichi Iigabe (z.B. CSV-Zeile, Grid-Date oder gruppierti Liste) z
validiere, bevor du Zeile-/Spalte-Operatione machsch; es git `false` zrugg, wänn d Iigab kei Array isch, läer isch oder
irgend es Element enthält, wo kei Array isch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areArrays`, wänn du sicherstelle muesch, dass e Wert e nid-läeri 2D-Array isch und dass jedi Zeile e Array
> isch, bevor du über verschachtleti Arrays iteriersch oder dri indexiersch.

### Vorteil

- Validiert, dass d Iigab e nid-läeri zweidimensionali Array isch, wo jedes Element e Array isch.
- Git es eifachs booleschs Resultat (`true`/`false`) zrugg, geeignet für Guards und früehi Abbrüch.
- Hilft, Laufziit-Fehler z verhindere, wänn spätere Code verschachtleti Array-Operatione voraussetzt (z.B. Zeile mappe).

## Verwendig

### Syntax

Funktion:

- `areArrays(array)`

Parameter:

- `array`: D Iigab, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value isch es 2D-Array mit Array als Element
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areArrays(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 13:39:40 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>