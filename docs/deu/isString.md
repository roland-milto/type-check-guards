# isString

## Beschreibung

`isString` bestimmt, ob ein gegebener Wert ein String ist.

### Anwendungsfall

Validiere Benutzereingaben, API-Payload-Felder oder Konfigurationswerte zur Laufzeit, um sicherzustellen, dass ein Wert
ein String ist, bevor String-Operationen angewendet werden (z. B. Trimmen, Splitten, Groß-/Kleinschreibung ändern).

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isString`, um `unknown` oder locker typisierte Werte zu validieren, bevor du String-Methoden aufrufst; es
> gibt nur dann `true` zurück, wenn `typeof value === "string"`.

### Vorteile

- Einfache und schnelle Prüfung mit `typeof`.
- Gibt ein vorhersehbares boolesches Ergebnis zurück: `true` für Strings, andernfalls `false`.
- Funktioniert sowohl für leere als auch für nicht-leere Strings.
- Nützlich als leichtgewichtige Runtime-Guard, bevor string-spezifische Operationen ausgeführt werden.

## Verwendung

### Syntax

Funktion:

- `isString(value)`

Parameter:

- `value`: Der Wert, der auf den Typ String geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input ist hier eine Zeichenkette
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isString](../_analysis/isString.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 12:26:26 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>