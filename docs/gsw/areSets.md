# areSets

## Bschrybig

Prüeft, öb e gegebni nöd-lääri Array nume `Set`-Instanze enthaltet, und git `true` zrugg, wänn das so isch, und susch
`false`.

### Aawändig

Validiere, dass e Wert (z. B. us Benutzereingab, JSON-Parsing oder externe APIs) e nöd-lääri Array vo `Set`-Objekt isch,
bevor du jedes Set verarbeitisch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areSets`, zum unbekannti Iigabe z validiere, bevor du drüber iteriersch und `Set`-APIs (z. B. `.size`, `.has`,
`.add`) uf jedem Element uufrüefsch.

### Vorteil

- Git `true` nume zrugg, wänn d Iigab e nöd-lääri Array isch und jedes Element e `Set`-Instanz isch.
- Verhindert falsch-positivi bi lääre Arrays, indem `false` zrugggeh wird, wänn d Array kei Element hät.
- Nützlich als Runtime-Guard, bevor mer `Set`-spezifischi Operatione uf jedem Element uusführt.

## Verwendig

### Syntax

Funktion:

- `areSets(array)`

Parameter:

- `array`: D Array, wo uf `Set`-Instanze söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a isch es Array vo Set-Instanze zur Laufzyyt
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // falsch
console.log(areSets(c)); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areSets(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areSets](../_analysis/areSets.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 23:13:30 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>