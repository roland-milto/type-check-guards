# isMap

## Popis

Kontroluje, zda je zadaná hodnota `value` typu `Map`; vrací `true`, pokud ano, jinak `false`.

### Případ použití

Použijte `isMap`, když obdržíte hodnotu typu `unknown` (např. z parsování JSON, externích API nebo uživatelského vstupu)
a potřebujete zajistit, že jde o `Map`, než provedete operace `Map`.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isMap` je runtime guard, který vrací `true`, když je hodnota `Map`, a `false` v opačném případě; použijte jej ke
> zúžení typu `unknown` před voláním API `Map`.

### Výhody

- Poskytuje rychlou kontrolu za běhu, zda je hodnota `Map`.
- Pomáhá předcházet chybám typů tím, že chrání větve kódu, které vyžadují metody `Map` jako `get`, `set` a `has`.
- Dobře funguje jako lehký validační krok při práci se vstupy typu `unknown`.

## Použití

### Syntaxe

Funkce:

- `isMap(value)`

Parametry:

- `value`: Hodnota, kterou je třeba zkontrolovat.

### Lokální import funkce

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

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isMap(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do funkcí: [isMap](../_analysis/isMap.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 16:03:51 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>