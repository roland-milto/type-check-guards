# isWeakMap

## Popis

Určuje, zda je daná hodnota `value` instancí `WeakMap`.

### Případ použití

Použijte `isWeakMap`, když přijímáte hodnotu typu `unknown` (např. z veřejného API, plugin systému nebo dynamické
konfigurace) a potřebujete ověřit, že jde o `WeakMap`, než použijete chování specifické pro `WeakMap`.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isWeakMap` provádí kontrolu `instanceof WeakMap`; je to runtime guard, který vrací `true` pouze pro skutečné instance
`WeakMap`.

### Výhody

- Jednoduchá kontrola za běhu, zda je hodnota `WeakMap`.
- Pomáhá předcházet nesprávnému použití API, která vyžadují `WeakMap`, tím, že vrací `true`/`false` místo vyhození
  výjimky.
- Funguje se vstupy typu `unknown`, což je praktické na hranicích modulů (např. při parsování, externích datech nebo
  netypovaném kódu).

## Použití

### Syntaxe

Funkce:

- `isWeakMap(value)`

Parametry:

- `value`: Hodnota ke kontrole.

### Lokální import funkce

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a je za běhu WeakMap
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isWeakMap(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:24:27 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>