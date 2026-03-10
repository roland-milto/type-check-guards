# isOneOfType

## Beschreibung

`isOneOfType` bestimmt, ob ein gegebener `value` mindestens einem der bereitgestellten Typ-Strings entspricht, und gibt
`true` zurück, wenn eine Übereinstimmung gefunden wird, andernfalls `false`.

### Anwendungsfall

Validiere locker typisierte oder externe Daten (z. B. geparstes JSON, Query-Parameter), indem du mehrere akzeptable
Laufzeittypen (wie `number` oder `string`) zulässt, bevor du mit weiterer Logik fortfährst.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isOneOfType`, wenn du eine Laufzeitprüfung möchtest, dass ein Wert einem von mehreren zulässigen Typen
> entspricht; es gibt `true` zurück, wenn mindestens ein Typ passt, andernfalls `false`.

### Vorteile

- Prüft einen Wert in einem einzigen Aufruf gegen mehrere zulässige Typen und gibt beim ersten Treffer `true` zurück.
- Funktioniert mit `unknown`-Eingaben und ist dadurch an Laufzeitgrenzen nützlich (z. B. externe Daten,
  Benutzereingaben).
- Einfaches boolesches Ergebnis (`true`/`false`), das sich gut mit bedingter Logik und frühen Rückgaben kombinieren
  lässt.

## Verwendung

### Syntax

Funktion:

- `isOneOfType(value, types)`

Parameter:

- `value`: Der Wert, der gegen die angegebenen Typen geprüft werden soll.
- `types`: Ein Array von Typ-Strings, die die möglichen Typen des Werts repräsentieren.

### Lokaler Funktionen-Import

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input ist zur Laufzeit ein Objekt
}

console.log(isOneOfType(3, ["number", "string"])); // wahr
console.log(isOneOfType("hello", ["number", "boolean"])); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isOneOfType(value, types)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 23:42:59 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>