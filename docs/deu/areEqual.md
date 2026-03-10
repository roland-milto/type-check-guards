# areEqual

## Beschreibung

`areEqual` prüft, ob alle Elemente in einem Array einem gegebenen erwarteten Wert entsprechen, und gibt nur für nicht
leere Arrays `true` zurück, bei denen jedes Element übereinstimmt.

### Anwendungsfall

Validiere, dass eine Liste nur einen einzigen erlaubten Wert enthält (z. B. alle Status-Flags sind `true`, alle Rollen
sind `"admin"` oder alle numerischen Einträge entsprechen einer erforderlichen Konstante), wobei leere Eingaben als
ungültig (`false`) behandelt werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areEqual`, wenn du eine strikte Prüfung aller Elemente benötigst; es gibt `false` für leere Arrays sowie für
> jede Eingabe zurück, die kein Array oder kein gefülltes Array ist.

### Vorteile

- Gibt nur dann `true` zurück, wenn jedes Element dem erwarteten Wert entspricht; andernfalls `false`.
- Schnelles Scheitern: bricht die Prüfung ab, sobald ein nicht übereinstimmendes Element gefunden wird.
- Schützt vor ungültiger Eingabe, indem `false` zurückgegeben wird, wenn die Eingabe kein gefülltes Array ist.

## Verwendung

### Syntax

Funktion:

- `areEqual(value, expected)`

Parameter:

- `value`: Das zu prüfende Array.
- `expected`: Das Element, mit dem jedes Array-Element verglichen wird.

### Lokaler Funktionen-Import

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areEqual(value, expected)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 23:50:17 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>