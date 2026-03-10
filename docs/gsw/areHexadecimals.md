# areHexadecimals

## Bschrybig

Prüeft, öb alli Element i eme Array hexadezimali Strings sind, und git nume denn `true` zrugg für nöd-lääri Arrays, wo
jedes Item gültig isch.

### Aawändig

Bruuch `areHexadecimals`, zum User-Input oder externi Date (z.B. IDs, Checksums, Farbcode ohni es führends '#') z
validiere, bevor du hexadezimal parschisch oder wiiter verarbeitisch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areHexadecimals`, zum unbekannte Input z validiere, bevor du Wärte parschisch oder umwandelisch (zum Bispil
> vor `parseInt(value, 16)` oder BigInt-Umwandlige).

### Vorteil

- Validiert, dass jedes Element e hexadezimali String isch, und git nume denn `true` zrugg, wänn alli Items stimmed.
- Lehnt läär Arrays absichtlich ab und git bi fehlende Input-Daten `false` zrugg.
- Liferet es eifachs boolsches Resultat (`true`/`false`), geeignet für Guards und Validierig mit früehem Return.

## Verwendig

### Syntax

Funktion:

- `areHexadecimals(array)`

Parameter:

- `array`: S Array, wo uf hexadezimali String-Element söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areHexadecimals(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 23:06:12 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>