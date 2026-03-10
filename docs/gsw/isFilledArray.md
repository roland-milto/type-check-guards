# isFilledArray

## Bschrybig

Prüeft, öb `value` e Array mit mindeschtens eim Element isch, und git `true` oder `false` zrugg.

### Aawändig

Bruuch `isFilledArray`, zum iichommendi Date (z. B. API-Payloads, Formularwärt, Konfiguration) z'validiere, bevor du
drüber iteriersch, s erscht Element abruefsch oder Logik aawändisch, wo mindeschtens eis Item brucht.

> **Hinwiis für TypeScript-Nutzer:**
>
> `isFilledArray` isch e Laufzyt-Guard, wo e Boolean zrugg git; er schränkt d Element-Typen nöd wiiter ii, usser dass er
> bestätigt, dass d Array nöd läer isch.

### Vorteil

- Eifachi, schnälli Prüefig für e nöd-läeri Array mit `Array.isArray` und ere Längi-Prüefig.
- Hilft, Laufzyt-Fähler z'vermeide, wänn dr Code drvo usgaht, dass e Array mindeschtens eis Element het.
- Klar s Boolesche Resultat: git `true` zrugg für nöd-läeri Arrays und susch `false`.

## Verwendig

### Syntax

Funktion:

- `isFilledArray(value)`

Parameter:

- `value`: Dr Wert, wo prüeft wird, öb er e nöd-läeri Array isch.

### Lokale Funktions-Import

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input isch e nöd-läärs Array zur Laufzyt
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isFilledArray(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 11:47:15 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>