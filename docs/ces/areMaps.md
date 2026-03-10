# areMaps

## Popis

`areMaps` určuje, zda je dané pole neprázdné a zda jsou všechny jeho prvky instancemi `Map`.

### Případ použití

Ověřte neznámý vstup (např. z parsování JSON, externích API nebo dynamických zdrojů) předtím, než s ním budete zacházet
jako s neprázdným seznamem objektů `Map`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Vrací `false` pro prázdné pole; `true` vrátí pouze tehdy, když je pole zaplněné a každý prvek je `Map`.

### Výhody

- Zajišťuje, že každý prvek je instancí `Map`, a vrací `true` pouze tehdy, když kontrolou projde celé pole.
- Záměrně odmítá prázdná pole, čímž brání nechtěnému přijetí „žádných dat“ jako platného vstupu.
- Užitečné jako ochranná kontrola před prováděním operací specifických pro `Map` (např. `.get()`, `.set()`, iterace)
  napříč kolekcí.

## Použití

### Syntaxe

Funkce:

- `areMaps(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat.

### Lokální import funkce

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items je za běhu zaručeně neprázdné pole instancí Map
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false pro: prázdná pole nebo pole obsahující jakoukoli hodnotu, která není Map
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areMaps(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 16:11:54 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>