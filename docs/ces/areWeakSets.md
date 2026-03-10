# areWeakSets

## Popis

Kontroluje, zda je vstup neprázdné pole, kde je každý prvek `WeakSet`, a vrací `true` pouze v tomto případě.

### Případ použití

Ověřte vstup za běhu (např. z API, konfigurace nebo dat poskytnutých uživatelem), abyste měli neprázdný seznam instancí
`WeakSet` před pokračováním v logice, která závisí na chování `WeakSet`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areWeakSets` k ověření neznámého vstupu předtím, než s ním budete zacházet jako s `WeakSet[]`. Pro prázdná
> pole a ne-pole vrací `false`.

### Výhody

- Zajišťuje, že každý prvek ve vstupním poli je `WeakSet`.
- Pro prázdná pole vrací `false`, čímž zabraňuje nechtěným výsledkům „vše platné“ při chybějících datech.
- Bezpečně selže vrácením `false`, když vstup není naplněné pole (včetně `null`).
- Užitečné jako ochranná kontrola před prováděním operací, které vyžadují instance `WeakSet`.

## Použití

### Syntaxe

Funkce:

- `areWeakSets(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, zda obsahuje objekty `WeakSet`.

### Lokální import funkce

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a je neprázdné pole instancí WeakSet
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areWeakSets(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:08:00 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>