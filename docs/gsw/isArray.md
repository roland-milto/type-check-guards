# isArray

## Bschrybig

`isArray` prüeft, öb en gegebene Wert es Array isch, und git `true` zrugg, wänn ja, susch `false`.

### Aawändig

Unbekannti Date (z. B. parsti JSON oder API-Antworte) validiere, zum sicherstelle, dass en Wert es Array isch, bevor du
drüber iteriersch, indexiersch oder uf `.length` zuegriffscht.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isArray`, wänn du e Runtime-Prüefig für Arrays bruuchsch; es git es Boolean zrugg und isch sicher zum Ufruefe
> mit `unknown`-Werte.

### Vorteil

- Bruucht s iigebaute `Array.isArray` für zueverlässiigi Array-Erkenning über verschideni Realms (z. B. iframes).
- Git es eifachs boolsches Resultat (`true`/`false`) zrugg, guet für Guards und Verzweigungslogik.
- Funktioniert mit jedere Input-Art, will dr Parameter `unknown` isch.

## Verwendig

### Syntax

Funktion:

- `isArray(value)`

Parameter:

- `value`: Dr Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input isch es Array zur Laufzyyt
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isArray(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isArray](../_analysis/isArray.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 11:30:30 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>