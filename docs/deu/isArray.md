# isArray

## Beschreibung

`isArray` prüft, ob ein gegebener Wert ein Array ist, und gibt `true` zurück, wenn dies der Fall ist, andernfalls
`false`.

### Anwendungsfall

Validiere unbekannte Daten (z. B. geparstes JSON oder API-Antworten), um sicherzustellen, dass ein Wert ein Array ist,
bevor du iterierst, indexierst oder auf `.length` zugreifst.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isArray`, wenn du eine Laufzeitprüfung für Arrays benötigst; es gibt einen booleschen Wert zurück und kann
> sicher mit `unknown`-Werten aufgerufen werden.

### Vorteile

- Verwendet das integrierte `Array.isArray` für eine zuverlässige Array-Erkennung über verschiedene Realms hinweg (z. B.
  iframes).
- Gibt ein einfaches boolesches Ergebnis (`true`/`false`) zurück, geeignet für Guards und Verzweigungslogik.
- Funktioniert mit jedem Eingabetyp, da der Parameter `unknown` ist.

## Verwendung

### Syntax

Funktion:

- `isArray(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input ist zur Laufzeit ein Array
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isArray(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isArray](../_analysis/isArray.md)

<br>

---

<small>Datei wurde erzeugt am 6. Februar 2026 um 11:30:09 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>