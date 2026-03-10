# areSets

## Popis

Kontroluje, zda dané neprázdné pole obsahuje pouze instance `Set`; vrací `true`, pokud ano, jinak `false`.

### Případ použití

Ověřte, že hodnota (např. z uživatelského vstupu, parsování JSON nebo externích API) je neprázdné pole objektů `Set`
před zpracováním každé množiny.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areSets` k ověření neznámého vstupu před iterací a voláním API `Set` (např. `.size`, `.has`, `.add`) na
> každém prvku.

### Výhody

- Vrací `true` pouze tehdy, když je vstup neprázdné pole a každý prvek je instancí `Set`.
- Zabraňuje falešně pozitivním výsledkům u prázdných polí tím, že vrací `false`, když pole neobsahuje žádné prvky.
- Užitečné jako runtime kontrola před prováděním operací specifických pro `Set` na každém prvku.

## Použití

### Syntaxe

Funkce:

- `areSets(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, zda obsahuje instance `Set`.

### Lokální import funkce

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a je za běhu pole instancí Set
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // nepravda
console.log(areSets(c)); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areSets(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areSets](../_analysis/areSets.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 23:12:45 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>