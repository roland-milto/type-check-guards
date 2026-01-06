# isRegEx

Prüft, ob ein Wert ein regulärer Ausdruck (`RegExp`) ist.

## Wofür wird `isRegEx` verwendet?

Die Funktion stellt sicher, dass ein Wert ein gültiges reguläres Ausdrucks-Objekt ist.
Dies ist wichtig, um sicherzustellen, dass Methoden wie `.test()` oder `.exec()` ohne Laufzeitfehler aufgerufen werden
können, insbesondere wenn Muster dynamisch verarbeitet werden.

> **Hinweis für TypeScript-Nutzer:**
> Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `RegExp`.

## Verhalten

`isRegEx` gibt `true` zurück, wenn der Wert eine Instanz von `RegExp` ist.
In allen anderen Fällen (z. B. Strings, die wie ein RegEx aussehen, Objekte oder `null`) wird `false` zurückgegeben.

| Eingabe             | Ausgabe |
|---------------------|---------|
| `/abc/`             | `true`  |
| `new RegExp("abc")` | `true`  |
| `"/abc/"` (String)  | `false` |
| `{}`                | `false` |
| `null`              | `false` |

## Verwendung

```ts
import {isRegEx} from "@type-check/guards";

isRegEx(/[a-z]/);      // true
isRegEx("/[a-z]/");    // false

// TypeScript Beispiel
const pattern: unknown = /^[0-9]+$/;

if (isRegEx(pattern)) {
  // pattern wird hier automatisch als RegExp behandelt
  console.log(pattern.test("123"));
}
```