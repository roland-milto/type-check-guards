# isPrimitive

## Beschreibung

`isPrimitive` bestimmt, ob ein gegebener Wert ein Primitive ist (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### Anwendungsfall

Validiere Eingaben zur Laufzeit (z. B. API-Payload-Felder, Konfigurationswerte oder vom Benutzer bereitgestellte Daten),
um sicherzustellen, dass ein Wert ein Primitive ist, bevor du ihn serialisierst, protokollierst oder ausschließlich für
Primitive vorgesehene Operationen anwendest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isPrimitive`, um `unknown`-Eingaben abzusichern, bevor du sie als Objekte oder Funktionen behandelst; es
> gibt `true` für Primitive und `false` für Objekte und Funktionen zurück.

### Vorteile

- Schnelle, allokationsfreie Prüfung, ob ein Wert ein JavaScript-Primitive ist.
- Behandelt `null` korrekt als Primitive (auch wenn `typeof null` `"object"` ist).
- Hilft dabei, `unknown`-Werte einzugrenzen, bevor ausschließlich für Objekte vorgesehene Operationen ausgeführt werden.

## Verwendung

### Syntax

Funktion:

- `isPrimitive(value)`

Parameter:

- `value`: Der Wert, der auf einen primitiven Typ geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isPrimitive(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:55:57 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>