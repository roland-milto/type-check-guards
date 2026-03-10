# isWeakSet

## Bschrybig

Bestimmt, öb s'gäbne `value` es `WeakSet` vo Objäkt isch.

### Aawändig

Bruuch `isWeakSet`, wänn du untypisierte Input aanehsch (z.B. vo externe APIs, dynamiischer Konfiguration oder `unknown`
-Werte) und du muesch überprüefe, dass es es `WeakSet` isch, bevor du `WeakSet`-spezifischi Operatione bruuchsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isWeakSet`, zum en `unknown`-Wert zur Laufzyt uf `WeakSet<object>` iizschränke; beachte, dass es `WeakSet`
> nume Objäkt-Referänze cha enthalte.

### Vorteil

- Bietet eifachi Laufzyt-Prüefig, öb en Wert es `WeakSet` isch.
- Hilft, Typfähler z'vermeide, indem nume `WeakSet`-Instanze au als solchi behandelt wärde.
- Funktioniert mit jedem `unknown`-Input und git es klaars Boolesches Resultat zrugg (`true`/`false`).

## Verwendig

### Syntax

Funktion:

- `isWeakSet(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // wahr
console.log(isWeakSet(b)); // falsch

if (isWeakSet(a)) {
  // a isch zur Laufzyt es WeakSet
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isWeakSet(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:14:54 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>