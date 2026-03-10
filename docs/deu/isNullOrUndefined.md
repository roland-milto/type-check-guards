# isNullOrUndefined

## Beschreibung

Prüft, ob ein gegebener Wert `null` oder `undefined` ist.

### Anwendungsfall

Verwende `isNullOrUndefined`, wenn du sowohl `null` als auch `undefined` als „kein Wert“ behandeln musst, z. B. beim
Validieren optionaler Eingaben, beim Normalisieren von API-Payloads oder beim Absichern von Codepfaden, bevor ein
potenziell fehlender Wert dereferenziert wird.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isNullOrUndefined`, um dich vor fehlenden Werten zu schützen, bevor du auf Eigenschaften zugreifst oder
> Methoden aufrufst; es gibt nur für `null` und `undefined` `true` zurück.

### Vorteile

- Bietet eine klare, wiederverwendbare Guard-Funktion, um `null` und `undefined` an einer Stelle zu erkennen.
- Gibt einen einfachen booleschen Wert (`true`/`false`) zurück, der sich leicht in Bedingungen und Validierungen
  kombinieren lässt.
- Hilft, häufige Laufzeitfehler zu vermeiden, indem vor dem Zugriff auf Eigenschaften oder dem Aufruf von Methoden auf
  fehlende Werte geprüft wird.

## Verwendung

### Syntax

Funktion:

- `isNullOrUndefined(value)`

Parameter:

- `value`: Der Wert, der auf `null` oder `undefined` geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // fehlenden Wert behandeln
}

console.log(isNullOrUndefined(b)); // wahr
console.log(isNullOrUndefined(c)); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isNullOrUndefined(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:33:30 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>