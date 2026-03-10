# isValidDate

## Beschreibung

`isValidDate` prüft, ob ein gegebener Wert ein gültiges `Date`-Objekt ist, und gibt `true` nur für echte, nicht
ungültige Datumswerte zurück.

### Anwendungsfall

Validiere Benutzereingaben oder API-Daten, die Datumswerte enthalten können, und stelle sicher, dass der Wert eine echte
`Date`-Instanz ist und kein ungültiges Datum, bevor Datumsberechnungen, Formatierungen oder Vergleiche durchgeführt
werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isValidDate`, bevor du `Date`-Methoden (z. B. `toISOString`, `getTime`) auf Werten aufrufst, die als
`unknown` typisiert sind, um sicherzustellen, dass es sich um gültige `Date`-Objekte handelt.

### Vorteile

- Stellt sicher, dass ein Wert eine `Date`-Instanz ist und nicht nur eine datumsähnliche Zeichenkette oder Zahl.
- Lehnt ungültige Datumswerte (z. B. `new Date("invalid")`) ab, indem auf `NaN`-Zeitwerte geprüft wird.
- Ein einfacher boolescher Guard, der sich leicht in Bedingungen und Validierungs-Pipelines verwenden lässt.
- Hilft, Laufzeitfehler beim Aufruf von Datums-Methoden zu vermeiden, indem die Eingabe vorher verifiziert wird.

## Verwendung

### Syntax

Funktion:

- `isValidDate(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input ist eine gültige Date-Instanz
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // falsch
console.log(isValidDate("2025-12-22")); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isValidDate(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 16:39:35 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>