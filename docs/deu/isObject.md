# isObject

## Beschreibung

Bestimmt, ob ein gegebener `value` ein `object` ist (ohne `null`).

### Anwendungsfall

Verwende `isObject`, um unbekannte Eingaben (z. B. geparstes JSON, API-Antworten, Event-Payloads) zu validieren, bevor
du auf Properties zugreifst, und stelle sicher, dass der Wert ein Objekt und nicht `null` ist.

> **Hinweis für TypeScript-Nutzer:**
>
> `isObject` ist ein Laufzeit-Guard, der einen Boolean zurückgibt; er grenzt nicht auf eine bestimmte Objektform ein.
> Kombiniere ihn mit zusätzlichen Prüfungen (z. B. Existenz von Properties), wenn du eine stärkere Typisierung benötigst.

### Vorteile

- Gibt `true` nur für nicht-`null`-Werte zurück, deren `typeof` `"object"` ist.
- Verhindert die häufige JavaScript-Falle, bei der `null` andernfalls als Objekt behandelt würde.
- Funktioniert für einfache Objekte und integrierte Objektinstanzen (z. B. `Date`, `RegExp`).
- Einfache, schnelle Laufzeitprüfung, geeignet für defensives Programmieren und Eingabevalidierung.

## Verwendung

### Syntax

Funktion:

- `isObject(value)`

Parameter:

- `value`: Der Wert, der darauf geprüft werden soll, ob er ein `object` ist.

### Lokaler Funktionen-Import

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input ist zur Laufzeit ein nicht-null Objekt
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isObject(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isObject](../_analysis/isObject.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:18:09 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>