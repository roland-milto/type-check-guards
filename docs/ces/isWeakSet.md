# isWeakSet

## Popis

Určuje, zda je daná `value` `WeakSet` objektů.

### Případ použití

Použijte `isWeakSet` při přijímání netypovaného vstupu (např. z externích API, dynamické konfigurace nebo hodnot typu
`unknown`), když potřebujete ověřit, že jde o `WeakSet`, před použitím operací specifických pro `WeakSet`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isWeakSet` k zúžení hodnoty typu `unknown` na `WeakSet<object>` za běhu; všimněte si, že `WeakSet` může
> obsahovat pouze reference na objekty.

### Výhody

- Poskytuje jednoduchou kontrolu za běhu, zda je hodnota `WeakSet`.
- Pomáhá předcházet chybám typů tím, že zajišťuje, že jako `WeakSet` jsou považovány pouze instance `WeakSet`.
- Funguje s jakýmkoli vstupem typu `unknown` a vrací jasný booleovský výsledek (`true`/`false`).

## Použití

### Syntaxe

Funkce:

- `isWeakSet(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a je za běhu WeakSet
}
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isWeakSet(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:14:13 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>