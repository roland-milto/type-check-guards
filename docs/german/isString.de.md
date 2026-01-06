# isString

Prüft, ob ein Wert vom Typ `string` ist.

## Wofür wird `isString` verwendet?

Die Funktion validiert, ob ein Wert eine Zeichenkette ist.
Dies ist essenziell für die Verarbeitung von Benutzereingaben, Texten aus APIs oder zur Sicherstellung, dass
String-Methoden wie `.split()`, `.trim()` oder `.toLowerCase()` sicher aufgerufen werden können.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `string`.

## Verhalten

`isString` gibt `true` zurück, wenn der Wert vom Typ `string` ist.
In allen anderen Fällen (z. B. Zahlen, Objekte, `null` oder `undefined`) wird `false` zurückgegeben.

| Eingabe      | Ausgabe |
|--------------|---------|
| `"Hallo"`    | `true`  |
| `""` (leer)  | `true`  |
| `"123"`      | `true`  |
| `123` (Zahl) | `false` |
| `null`       | `false` |
| `undefined`  | `false` |

## Verwendung

```ts
import {isString} from "@type-check/guards";

isString("Roland Milto"); // true
isString(2025);           // false

// TypeScript Beispiel
const input: unknown = "  Hello World  ";

if (isString(input)) {
  // input wird hier automatisch als string behandelt
  console.log(input.trim());
}
```