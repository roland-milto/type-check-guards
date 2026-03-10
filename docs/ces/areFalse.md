# areFalse

## Popis

`areFalse` kontroluje, zda jsou všechny prvky v poskytnutém poli striktně booleovská hodnota `false`.

### Případ použití

Ověřte, že seznam feature flagů, kontrol nebo výsledků guardů je celý `false` před pokračováním (např. potvrďte, že
nejsou přítomny žádné blokující podmínky).

> **Poznámka pro uživatele TypeScriptu:**
>
> `areFalse` použijte, když potřebujete striktní validaci, že pole není prázdné a obsahuje pouze booleovskou hodnotu
`false`.

### Výhody

- Zajišťuje, že každý prvek je striktně `false` (bez převodu truthy/falsey).
- Vrací `false` pro ne-pole nebo prázdná pole tím, že vyžaduje naplněné pole přes `isFilledArray`.
- Pro efektivitu skončí dříve při prvním prvku, který není `false`.

## Použití

### Syntaxe

Funkce:

- `areFalse(array)`

Parametry:

- `array`: Pole ke kontrole, obsahující prvky libovolného typu.

### Lokální import funkce

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // pravda
const b = areFalse([false, true, false]);  // nepravda
const c = areFalse([false, "false", false]); // nepravda
const d = areFalse([]); // nepravda
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areFalse(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 16:16:28 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>