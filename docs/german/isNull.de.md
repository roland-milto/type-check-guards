# isNull

Prüft, ob ein Wert strikt `null` ist.

## Wofür wird `isNull` verwendet?

In JavaScript repräsentiert `null` die absichtliche Abwesenheit eines Objekts.
Da `typeof null` fälschlicherweise `"object"` zurückgibt, bietet diese Funktion eine sichere und eindeutige Prüfung, um
`null` von tatsächlichen Objekten oder `undefined` zu unterscheiden.

> **Hinweis für TypeScript-Nutzer:** Diese Funktion agiert als Type Guard und verengt den Typ automatisch auf `null`.

## Verhalten

`isNull` gibt `true` zurück, wenn der Wert strikt gleich `null` ist.
In allen anderen Fällen (einschließlich `undefined`, `0` oder `false`) wird `false` zurückgegeben.

| Eingabe     | Ausgabe |
|-------------|---------|
| `null`      | `true`  |
| `undefined` | `false` |
| `0`         | `false` |
| `""`        | `false` |
| `{}`        | `false` |

## Verwendung

```ts
import { isNull } from "@type-check/strict";

isNull(null);      // true
isNull(undefined); // false

// TypeScript Beispiel
const data: string | null = null;

if (isNull(data)) {
  // data wird hier automatisch als null behandelt
  console.log("Daten sind explizit leer.");
}
```