# isSymbol

## Bschrybig

`isSymbol` bestimmt, öb e gegebene Wärt vom Typ `symbol` isch, und git für Symbols `true` zrugg und susch `false`.

### Aawändig

Validier, dass e `unknown`-Wärt e `symbol` isch, bevor du ne als e einzigartigi Identifikator, e Registry-Key oder e
berechnete Property-Key i Objekte und Maps bruuchsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isSymbol`, zum `unknown` uf `symbol` z verengere, bevor du symbol-bezogeni Funktione ufrüefsch oder s als
> berechnete Property-Key bruuchsch.

### Vorteil

- Bietet e eifachi, zueverlässigi Runtime-Prüefig für de JavaScript-Primitive-Typ `symbol`.
- Hilft, `unknown`-Wärt z verengere, bevor mer symbol-spezifischi APIs bruucht oder si als Schlissel speicheret.
- Verhindert falschi Treffer dur d Verwändig vo `typeof`, wo d kanonisch Art isch, `symbol`-Wärt z erkenne.

## Verwendig

### Syntax

Funktion:

- `isSymbol(value)`

Parameter:

- `value`: De Wärt, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input isch do es Symbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isSymbol(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:26:48 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>