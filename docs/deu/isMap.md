# isMap

## Beschreibung

Prüft, ob der angegebene `value` eine `Map` ist, und gibt `true` zurück, wenn dies der Fall ist, andernfalls `false`.

### Anwendungsfall

Verwende `isMap`, wenn du einen `unknown`-Wert erhältst (z. B. aus JSON-Parsing, externen APIs oder Benutzereingaben)
und sicherstellen musst, dass es sich um eine `Map` handelt, bevor du `Map`-Operationen ausführst.

> **Hinweis für TypeScript-Nutzer:**
>
> `isMap` ist ein Laufzeit-Guard, der `true` zurückgibt, wenn der Wert eine `Map` ist, andernfalls `false`; verwende
> ihn, um `unknown` einzugrenzen, bevor du `Map`-APIs aufrufst.

### Vorteile

- Bietet eine schnelle Laufzeitprüfung, ob ein Wert eine `Map` ist.
- Hilft, Typfehler zu vermeiden, indem Codepfade abgesichert werden, die `Map`-Methoden wie `get`, `set` und `has`
  erfordern.
- Eignet sich gut als leichter Validierungsschritt beim Umgang mit `unknown`-Eingaben.

## Verwendung

### Syntax

Funktion:

- `isMap(value)`

Parameter:

- `value`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isMap(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isMap](../_analysis/isMap.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 16:04:12 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>