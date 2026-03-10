# isUndefined

## Beschreibung

Prüft, ob ein gegebener Wert `undefined` ist.

### Anwendungsfall

Verwende `isUndefined`, um optionale Eingaben abzusichern, fehlende Eigenschaften zu erkennen oder zwischen „nicht
bereitgestellt“ (`undefined`) und „explizit leer“ (`null`) zu unterscheiden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isUndefined`, wenn du gezielt `undefined` erkennen musst (nicht `null`). Es ist sicher, weil es auf
`typeof value === "undefined"` basiert.

### Vorteile

- Bietet eine klare, explizite Prüfung auf `undefined` mittels `typeof` und vermeidet Randfälle mit nicht deklarierten
  Variablen.
- Gibt ein einfaches boolesches Ergebnis (`true`/`false`) zurück, geeignet für Guards, Verzweigungen und
  Validierungslogik.
- Hilft, `undefined` von anderen „leeren“ Werten wie `null`, `0`, `""` oder `NaN` zu unterscheiden.

## Verwendung

### Syntax

Funktion:

- `isUndefined(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x ist hier undefiniert
} else {
  // x ist hier nicht undefiniert
}

const a = isUndefined(undefined); // wahr
const b = isUndefined(null);      // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isUndefined(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:02:30 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>