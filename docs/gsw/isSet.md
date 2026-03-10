# isSet

## Bschrybig

Bestimmt, öb e gegebene Wert es `Set` isch.

### Aawändig

Validier Iigabe us externe Quelle (z.B. JSON-Parsing, Benutzereigab oder Drittanbieter-APIs), zum sicherstelle, dass e
Wert es `Set` isch, bevor du `Set`-Operatione usfüehrsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isSet`, zum `unknown`-Wert z verengere, bevor du `Set`-spezifischi APIs wie `.add`, `.has` oder `.size`
> ufrüefsch.

### Vorteil

- Bietet e eifachi Laufziit-Prüefig, zum bestätige, öb e Wert es `Set` isch.
- Hilft, Typfähler z verhindere, indem mer früeh cha abzweige, wänn e Wert kei `Set` isch.
- Funktioniert mit jedem `Set`-Inhalt (leer oder gfüllt) und git konsequent `true`/`false` zrugg.

## Verwendig

### Syntax

Funktion:

- `isSet(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a isch zur Laufzyyt es Set
  console.log(a.size);
}

console.log(isSet(b)); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isSet(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isSet](../_analysis/isSet.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:09:42 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>