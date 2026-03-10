# isPlainObject

## Beskrivning

Kontrollerar om ett givet `value` är ett vanligt objekt och returnerar `true` om det är det, annars `false`.

### Användningsfall

Validera att en `unknown`-inmatning (t.ex. parsad JSON, extern data eller funktionsargument) är ett vanligt objekt innan
du läser nycklar eller mappar det till ett typat konfigurationsobjekt.

> **Notis för TypeScript-användare:**
>
> `isPlainObject` är användbar för att avgränsa `unknown` innan man behandlar det som ett record-liknande objekt; den
> returnerar `true` endast för värden vars interna tagg är `[object Object]`.

### Fördelar

- Ger en enkel och tillförlitlig kontroll av om ett värde är ett vanligt objekt (dvs. `Object` / `{}`), och returnerar
  `true` eller `false`.
- Hjälper till att skilja vanliga objekt från arrayer, funktioner, `null` och andra typer som inte är vanliga objekt.
- Användbart som en typvakt i TypeScript för att avgränsa `unknown`-värden innan man kommer åt objektegenskaper.

## Användning

### Syntax

Funktion:

- `isPlainObject(value)`

Parametrar:

- `value`: Värdet som ska testas för status som vanligt objekt.

### Lokal funktionsimport

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input är ett vanligt objekt här
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // sant
console.log(isPlainObject([])); // falskt
console.log(isPlainObject(null)); // falskt
```

### Global objektimport

För att importera funktionerna som globala objektmetoder, använd:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Följande metod kommer då att vara globalt tillgänglig:

- `Type.isPlainObject(value)`

## Funktionsanalys

Här finns en tabellanalys dokumenterad av den utdata som uppstår när olika parametrar matas in i
funktionerna: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Filen skapades 6 February 2026 at 12:20:00 (UTC) med användning av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>