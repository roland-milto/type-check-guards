# isWeakMap

## Beschreibung

Bestimmt, ob ein gegebener `value` eine `WeakMap`-Instanz ist.

### Anwendungsfall

Verwende `isWeakMap`, wenn du einen `unknown`-Wert akzeptierst (z. B. aus einer öffentlichen API, einem Plugin-System
oder einer dynamischen Konfiguration) und vor der Nutzung von `WeakMap`-spezifischem Verhalten verifizieren musst, dass
es sich um eine `WeakMap` handelt.

> **Hinweis für TypeScript-Nutzer:**
>
> `isWeakMap` führt eine `instanceof WeakMap`-Prüfung durch; es ist ein Laufzeit-Guard, der nur für tatsächliche
`WeakMap`-Instanzen `true` zurückgibt.

### Vorteile

- Einfache Laufzeitprüfung, ob ein Wert eine `WeakMap` ist.
- Hilft, die falsche Verwendung von APIs zu verhindern, die eine `WeakMap` erfordern, indem `true`/`false` zurückgegeben
  wird, statt eine Exception zu werfen.
- Funktioniert mit `unknown`-Eingaben, was es an Modulgrenzen praktisch macht (z. B. beim Parsen, bei externen Daten
  oder in untypisiertem Code).

## Verwendung

### Syntax

Funktion:

- `isWeakMap(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a ist zur Laufzeit eine WeakMap
}

console.log(isWeakMap(a)); // wahr
console.log(isWeakMap(b)); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isWeakMap(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 13:24:45 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>