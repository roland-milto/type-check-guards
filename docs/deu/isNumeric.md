# isNumeric

## Beschreibung

`isNumeric` bestimmt, ob ein gegebener `value` als numerisch gilt, indem der aufgelöste Typ gegen `NUMERIC_TYPES`
geprüft wird.

### Anwendungsfall

Verwende `isNumeric`, um Eingaben (z. B. API-Payloads, Formularwerte, Konfiguration) zu validieren, bevor numerische
Operationen ausgeführt werden, und um numerikähnliche Typen (wie `BigInt`) gemäß `NUMERIC_TYPES` konsistent zu
akzeptieren.

> **Hinweis für TypeScript-Nutzer:**
>
> `isNumeric` ist ein Prädikat, das einen Boolean zurückgibt; behandle es als Laufzeitprüfung dafür, ob ein Wert zur von
> der Bibliothek definierten Menge numerischer Typen gehört.

### Vorteile

- Verwendet `getTypeOf` zusammen mit `NUMERIC_TYPES`, um die Logik zur Erkennung numerischer Typen zu zentralisieren und
  Prüfungen über eine Codebasis hinweg konsistent zu halten.
- Gibt ein einfaches Boolean (`true`/`false`) zurück, für leichtes Verzweigen sowie Guard-ähnliche Verwendung.
- Unterstützt mehrere numerische Repräsentationen (z. B. `number`, `BigInt`), wie in `NUMERIC_TYPES` definiert.

## Verwendung

### Syntax

Funktion:

- `isNumeric(value)`

Parameter:

- `value`: Der Wert, der auf einen numerischen Typ geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v wird gemäß den Typregeln der Bibliothek als numerisch betrachtet
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isNumeric(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 15:52:15 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>