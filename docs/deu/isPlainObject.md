# isPlainObject

## Beschreibung

Prüft, ob ein gegebener `value` ein Plain Object ist, und gibt `true` zurück, wenn dies der Fall ist, andernfalls
`false`.

### Anwendungsfall

Validieren, dass eine `unknown`-Eingabe (z. B. geparstes JSON, externe Daten oder Funktionsargumente) ein Plain Object
ist, bevor Schlüssel gelesen oder in ein typisiertes Konfigurationsobjekt gemappt werden.

> **Hinweis für TypeScript-Nutzer:**
>
> `isPlainObject` ist nützlich, um `unknown` einzugrenzen, bevor es als record-ähnliches Objekt behandelt wird; es gibt
> nur für Werte `true` zurück, deren interner Tag `[object Object]` ist.

### Vorteile

- Bietet eine einfache, zuverlässige Prüfung, ob ein Wert ein Plain Object (d. h. `Object` / `{}`) ist, und gibt `true`
  oder `false` zurück.
- Hilft, Plain Objects von Arrays, Funktionen, `null` und anderen Nicht-Plain-Object-Typen zu unterscheiden.
- Nützlich als Type Guard in TypeScript, um `unknown`-Werte einzugrenzen, bevor auf Objekteigenschaften zugegriffen
  wird.

## Verwendung

### Syntax

Funktion:

- `isPlainObject(value)`

Parameter:

- `value`: Der zu prüfende Wert hinsichtlich des Plain-Object-Status.

### Lokaler Funktionen-Import

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input ist hier ein einfaches Objekt
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // wahr
console.log(isPlainObject([])); // falsch
console.log(isPlainObject(null)); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isPlainObject(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 12:17:09 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>