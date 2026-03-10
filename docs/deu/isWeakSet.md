# isWeakSet

## Beschreibung

Bestimmt, ob der angegebene `value` ein `WeakSet` von Objekten ist.

### Anwendungsfall

Verwende `isWeakSet`, wenn du untypisierte Eingaben (z. B. aus externen APIs, dynamischer Konfiguration oder `unknown`
-Werten) akzeptierst und vor der Verwendung von `WeakSet`-spezifischen Operationen überprüfen musst, ob es sich um ein
`WeakSet` handelt.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isWeakSet`, um einen `unknown`-Wert zur Laufzeit auf `WeakSet<object>` einzugrenzen; beachte, dass `WeakSet`
> nur Objektreferenzen enthalten kann.

### Vorteile

- Bietet eine einfache Laufzeitprüfung, ob ein Wert ein `WeakSet` ist.
- Hilft, Typfehler zu vermeiden, indem sichergestellt wird, dass nur `WeakSet`-Instanzen als solche behandelt werden.
- Funktioniert mit jeder `unknown`-Eingabe und liefert ein klares boolesches Ergebnis (`true`/`false`).

## Verwendung

### Syntax

Funktion:

- `isWeakSet(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // wahr
console.log(isWeakSet(b)); // falsch

if (isWeakSet(a)) {
  // a ist zur Laufzeit ein WeakSet
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isWeakSet(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:14:28 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>