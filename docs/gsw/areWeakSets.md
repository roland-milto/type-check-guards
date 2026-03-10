# areWeakSets

## Bschrybig

Prüeft, öb e Iigab es nöd-leers Array isch, wo jedes Element es `WeakSet` isch, und git nume denn `true` zrugg.

### Aawändig

Validier Runtime-Iigabe (z. B. vo APIs, Konfiguration oder user-gelieferte Date), zum sicher z stelle, dass du e
nöd-leeri Lischt vo `WeakSet`-Instanze hesch, bevor du mit Logik wiitermachsch, wo vom `WeakSet`-Verhalte abhängt.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areWeakSets`, zum unbekannti Iigabe z validiere, bevor du si als `WeakSet[]` behandlisch. Es git bi leere
> Arrays und bi nöd-Arrays `false` zrugg.

### Vorteil

- Stellt sicher, dass jedes Element im Iigab-Array esch `WeakSet` isch.
- Git bi leere Arrays `false` zrugg und verhindert so zuefälligi «alli gültig»-Resultat bi fehlende Date.
- Schlaat sicher fehl, indem `false` zrugggeh wird, wenn d Iigab kei gfüllts Array isch (inklusive `null`).
- Nützlich als Guard, bevor Operatione usgführt werde, wo `WeakSet`-Instanze erfordere.

## Verwendig

### Syntax

Funktion:

- `areWeakSets(array)`

Parameter:

- `array`: S Array, wo uf `WeakSet`-Objekt söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a isch es nöd-läärs Array vo WeakSet-Instanze
}

console.log(areWeakSets(a)); // wahr
console.log(areWeakSets(b)); // falsch
console.log(areWeakSets(c)); // falsch
console.log(areWeakSets(null as unknown)); // falsch
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areWeakSets(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:08:42 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>