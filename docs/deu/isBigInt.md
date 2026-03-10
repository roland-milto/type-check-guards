# isBigInt

## Beschreibung

`isBigInt` prüft, ob ein gegebener Wert vom Typ `bigint` ist, und gibt für BigInt-Primitiven `true` und andernfalls
`false` zurück.

### Anwendungsfall

Werte aus untypisierten Quellen (z. B. JSON-Parsing, Benutzereingaben, externe APIs) validieren und eingrenzen, bevor
BigInt-spezifische Berechnungen durchgeführt oder sie in ausschließlich BigInt-Feldern gespeichert werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isBigInt`, um `unknown` zu `bigint` einzugrenzen, bevor du BigInt-Arithmetik (z. B. `+`, `*`) ausführst, die
> BigInt-Operanden erfordert.

### Vorteile

- Bietet eine einfache, zuverlässige Laufzeitprüfung für den primitiven Typ `bigint`.
- Hilft dabei, `unknown`-Werte einzugrenzen, bevor ausschließlich für BigInt vorgesehene Operationen ausgeführt werden.
- Vermeidet Fehlalarme: Normale Zahlen, Strings und andere Typen geben `false` zurück.

## Verwendung

### Syntax

Funktion:

- `isBigInt(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // wahr
console.log(isBigInt(10));  // falsch
console.log(isBigInt("10")); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isBigInt(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 23:31:33 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>