# isSymbol

## Beschreibung

`isSymbol` bestimmt, ob ein gegebener Wert vom Typ `symbol` ist, und gibt für Symbole `true` und andernfalls `false`
zurück.

### Anwendungsfall

Validiere, dass ein `unknown`-Wert ein `symbol` ist, bevor du ihn als eindeutige Kennung, als Registry-Schlüssel oder
als berechneten Property-Schlüssel in Objekten und Maps verwendest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isSymbol`, um `unknown` zu `symbol` einzugrenzen, bevor symbolbezogene Funktionen aufgerufen oder es als
> berechneter Property-Schlüssel verwendet wird.

### Vorteile

- Bietet eine einfache, zuverlässige Laufzeitprüfung für den JavaScript-Primitive-Typ `symbol`.
- Hilft dabei, `unknown`-Werte einzugrenzen, bevor symbol-spezifische APIs verwendet oder sie als Schlüssel gespeichert
  werden.
- Vermeidet Fehlalarme durch die Verwendung von `typeof`, der kanonischen Methode zur Erkennung von `symbol`-Werten.

## Verwendung

### Syntax

Funktion:

- `isSymbol(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input ist hier ein Symbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isSymbol(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:26:26 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>