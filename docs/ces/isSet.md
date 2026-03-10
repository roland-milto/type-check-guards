# isSet

## Popis

Určuje, zda je daná hodnota `Set`.

### Případ použití

Validujte vstupy z externích zdrojů (např. parsování JSON, uživatelský vstup nebo API třetích stran), abyste zajistili,
že hodnota je `Set` před prováděním operací se `Set`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `isSet` k zúžení hodnot typu `unknown` před voláním API specifických pro `Set`, jako jsou `.add`, `.has` nebo
`.size`.

### Výhody

- Poskytuje jednoduchou kontrolu za běhu pro potvrzení, zda je hodnota `Set`.
- Pomáhá předcházet chybám typů tím, že umožňuje včasné větvení, když hodnota není `Set`.
- Funguje s libovolným obsahem `Set` (prázdným i naplněným) a konzistentně vrací `true`/`false`.

## Použití

### Syntaxe

Funkce:

- `isSet(value)`

Parametry:

- `value`: Hodnota ke kontrole.

### Lokální import funkce

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a je za běhu Set
  console.log(a.size);
}

console.log(isSet(b)); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isSet(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do funkcí: [isSet](../_analysis/isSet.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:09:07 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>