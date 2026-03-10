# isTrue

## Bschrybig

`isTrue` bestimmt, öb e gegebene Wärt strikt gliich wie `true` isch.

### Aawändig

Bruuch `isTrue` zum Validierä vo Flags, Feature-Toggles oder Konfigurationswärt, wo nume s Literal `true` söll
akzeptiert werde und alles andere als `false` muess behandelt werde.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isTrue`, wänn du nume s Boolesche Literal `true` akzeptiere wotsch, nöd nume truthy Wärt.

### Vorteil

- Bietet e strängi Prüefig uf s Boolesche Literal `true` (kei Typumwandlig).
- Hilft, `true` vo truthy Wärt wie `1`, `"true"` oder `{}` z unterscheide.
- Eifachs, vorusgsehbars Verhalte, guet geeignet für Guards und Validierigspipelines.

## Verwendig

### Syntax

Funktion:

- `isTrue(value)`

Parameter:

- `value`: De Wärt, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // wahr
const b = isTrue(1);         // falsch
const c = isTrue("true");   // falsch

if (isTrue(a)) {
  // a isch do wahr
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isTrue(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:42:22 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>