# isMap

## Popis

Skontroluje, či je daná hodnota `value` typu `Map`, pričom vráti `true`, ak je, a `false` v opačnom prípade.

### Prípad použitia

Použite `isMap`, keď dostanete hodnotu typu `unknown` (napr. z parsovania JSON, externých API alebo používateľského
vstupu) a potrebujete sa uistiť, že ide o `Map` pred vykonaním operácií `Map`.

> **Poznámka pre používateľov TypeScriptu:**
>
> `isMap` je runtime guard, ktorý vráti `true`, keď je hodnota `Map`, a `false` v opačnom prípade; použite ho na zúženie
> typu `unknown` pred volaním API `Map`.

### Výhody

- Poskytuje rýchlu kontrolu za behu, či je hodnota `Map`.
- Pomáha predchádzať chybám typov tým, že stráži vetvy kódu, ktoré vyžadujú metódy `Map`, ako `get`, `set` a `has`.
- Dobre funguje ako ľahký validačný krok pri spracovaní vstupov typu `unknown`.

## Použitie

### Syntax

Funkcia:

- `isMap(value)`

Parametre:

- `value`: Hodnota, ktorú treba skontrolovať.

### Lokálny import funkcie

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

### Globálny import objektu

Na import funkcií ako globálnych metód objektu použite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nasledujúca metóda bude potom dostupná globálne:

- `Type.isMap(value)`

## Analýza funkcií

Tu je zdokumentovaná tabuľková analýza výstupu, ktorý vzniká pri dosadení rôznych parametrov do
funkcií: [isMap](../_analysis/isMap.md)

<br>

---

<small>Súbor bol vygenerovaný 31 January 2026 at 16:29:37 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>