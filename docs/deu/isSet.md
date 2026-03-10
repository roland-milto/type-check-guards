# isSet

## Beschreibung

Bestimmt, ob ein gegebener Wert ein `Set` ist.

### Anwendungsfall

Validiere Eingaben aus externen Quellen (z. B. JSON-Parsing, Benutzereingaben oder APIs von Drittanbietern), um
sicherzustellen, dass ein Wert ein `Set` ist, bevor `Set`-Operationen ausgeführt werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isSet`, um `unknown`-Werte einzugrenzen, bevor du `Set`-spezifische APIs wie `.add`, `.has` oder `.size`
> aufrufst.

### Vorteile

- Bietet eine einfache Laufzeitprüfung, um zu bestätigen, ob ein Wert ein `Set` ist.
- Hilft, Typfehler zu vermeiden, indem frühes Verzweigen ermöglicht wird, wenn ein Wert kein `Set` ist.
- Funktioniert mit beliebigen `Set`-Inhalten (leer oder befüllt) und gibt konsistent `true`/`false` zurück.

## Verwendung

### Syntax

Funktion:

- `isSet(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a ist zur Laufzeit ein Set
  console.log(a.size);
}

console.log(isSet(b)); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isSet(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isSet](../_analysis/isSet.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:09:25 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>