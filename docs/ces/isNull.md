# isNull

## Popis

Určuje, zda je poskytnutá hodnota `value` rovna `null`.

### Případ použití

`isNull` použijte k validaci vstupů nebo polí v API payloadu, kde je `null` smysluplná sentinelová hodnota a musí se
zpracovat jinak než `undefined` nebo jiné hodnoty.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isNull` použijte, když potřebujete odlišit `null` od `undefined` a dalších falsy hodnot; vrací `true` pouze pro
`null`.

### Výhody

- Poskytuje přesnou kontrolu na `null`, aniž by jej zaměňoval s `undefined`.
- Funguje spolehlivě pro jakýkoli typ vstupu, protože přijímá `unknown`.
- Jednoduché, rychlé a bez vedlejších účinků; vrací pouze `true` nebo `false`.

## Použití

### Syntaxe

Funkce:

- `isNull(value)`

Parametry:

- `value`: Hodnota, u které se kontroluje, zda je `null`.

### Lokální import funkce

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // pravda
console.log(isNull(b)); // nepravda

if (isNull(a)) {
  // a je zde null
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isNull(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isNull](../_analysis/isNull.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 15:38:48 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>