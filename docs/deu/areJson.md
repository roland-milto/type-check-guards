# areJson

## Beschreibung

Prüft, ob alle Elemente eines Arrays JSON-Strings sind, und gibt nur dann `true` zurück, wenn das Array befüllt ist und
jedes Element gültiges JSON ist; andernfalls wird `false` zurückgegeben.

### Anwendungsfall

Validiere eingehende Daten (z. B. aus Query-Parametern, Umgebungsvariablen oder externen APIs), bei denen du ein Array
aus JSON-kodierten Strings erwartest und leere Arrays oder beliebige Nicht-JSON-Einträge ablehnen möchtest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areJson`, wenn du validieren musst, dass ein `unknown[]` ausschließlich JSON-Strings enthält, bevor du sie
> parst (z. B. mit `JSON.parse`).

### Vorteile

- Gibt nur dann `true` zurück, wenn jedes Element ein gültiger JSON-String ist; andernfalls wird `false` zurückgegeben.
- Bricht früh ab: Stoppt die Prüfung, sobald ein Nicht-JSON-Element gefunden wird.
- Lehnt leere Arrays absichtlich ab und gibt für nicht befüllte Eingaben `false` zurück.

## Verwendung

### Syntax

Funktion:

- `areJson(array)`

Parameter:

- `array`: Das Array, das auf JSON-String-Elemente geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // wahr
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // falsch
const empty = areJson([]); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areJson(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areJson](../_analysis/areJson.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 16:15:34 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>