# areTrue

## Popis

Kontroluje, zda neprázdné pole obsahuje pouze booleovské hodnoty `true`.

### Případ použití

Použijte `areTrue` k ověření, že sada předpokladů nebo feature flagů je celá zapnutá (všechny hodnoty jsou `true`) před
pokračováním, přičemž prázdné nebo chybně utvořené vstupy se považují za nesplněné (`false`).

> **Poznámka pro uživatele TypeScriptu:**
>
> `areTrue` vrací `false` pro prázdné pole a pro pole obsahující jakoukoli hodnotu, která není striktně `true`.

### Výhody

- Vrátí `true` pouze tehdy, když je každý prvek striktně `true` a pole není prázdné.
- Rychle selže: vrátí `false` hned, jakmile je nalezena hodnota, která není `true`.
- Odmítá neplatné vstupy (nepole nebo prázdná pole) vrácením `false`.

## Použití

### Syntaxe

Funkce:

- `areTrue(array)`

Parametry:

- `array`: Pole, u kterého se kontroluje, zda obsahuje samé hodnoty `true`.

### Lokální import funkce

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areTrue(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 13:50:37 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>