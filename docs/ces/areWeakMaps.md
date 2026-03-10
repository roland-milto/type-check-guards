# areWeakMaps

## Popis

`areWeakMaps` kontroluje, zda je hodnota neprázdné pole, ve kterém je každý prvek `WeakMap`; vrací `true` pouze v tomto
případě, jinak vrací `false`.

### Případ použití

Ověřte data za běhu (např. parsované JSON, vstupy pluginů nebo volně typovanou konfiguraci), abyste zajistili, že jde o
neprázdné pole instancí `WeakMap` před iterací a voláním metod `WeakMap`; vrací `false`, pokud některý prvek není
`WeakMap` nebo pokud je pole prázdné.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areWeakMaps` k ověření neznámého vstupu před tím, než s ním budete zacházet jako s neprázdným `WeakMap[]`;
> pro prázdná pole vrací `false`.

### Výhody

- Zajišťuje, že každý prvek v poskytnutém poli je instancí `WeakMap`.
- Vrací `false` pro prázdná pole, čímž zabraňuje nechtěnému přijetí „žádných dat“ jako platného vstupu.
- Užitečné jako ochranná kontrola před prováděním operací specifických pro `WeakMap` na všech položkách.

## Použití

### Syntaxe

Funkce:

- `areWeakMaps(array)`

Parametry:

- `array`: Pole, u kterého se má ověřit, zda obsahuje instance `WeakMap`.

### Lokální import funkce

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list je neprázdné pole instancí WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // není to neprázdné WeakMap[]
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areWeakMaps(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:36:30 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>