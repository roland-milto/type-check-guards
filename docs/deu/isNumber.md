# isNumber

## Beschreibung

`isNumber` prüft, ob ein Wert eine endliche, nicht-`NaN` Zahl ist.

### Anwendungsfall

Validiere numerische Eingaben aus nicht vertrauenswürdigen Quellen (Formulare, Query-Parameter, JSON-Payloads) vor
Berechnungen, Speicherung oder Bereichsprüfungen, sodass nur endliche Zahlen durchgelassen werden (`true`) und alles
andere `false` zurückgibt.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isNumber`, um `unknown`-Werte vor arithmetischen Operationen zu validieren; es lehnt `NaN`, `Infinity` und
`-Infinity` ab.

### Vorteile

- Gibt `true` nur für echte JavaScript-Zahlen zurück (Typprüfung plus Ablehnung von `NaN` und Unendlichkeit).
- Verhindert häufige Validierungsfehler, bei denen `NaN`, `Infinity` oder `-Infinity` versehentlich als Zahlen
  durchgehen.
- Eignet sich gut als Laufzeit-Guard für unbekannte Eingaben (z. B. JSON, Benutzereingaben, externe APIs).
- Einfach, schnell und ohne Nebenwirkungen.

## Verwendung

### Syntax

Funktion:

- `isNumber(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input ist eine gültige endliche Zahl
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 12:27:27 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>