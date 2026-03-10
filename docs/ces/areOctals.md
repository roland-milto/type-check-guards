# areOctals

## Popis

`areOctals` určuje, zda je poskytnutá hodnota neprázdné pole platných osmičkových řetězců.

### Případ použití

Použijte `areOctals` při validaci uživatelského vstupu, konfiguračních hodnot nebo API payloadů, které musí obsahovat
osmičkové literály (např. režimy oprávnění souborů jako `0o755`), a chcete odmítnout prázdná pole nebo jakékoli neplatné
položky vrácením `false`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areOctals`, abyste zajistili, že máte neprázdné `unknown[]`, kde každá položka je platný osmičkový řetězec,
> před převodem (např. přes `Number(...)` nebo vlastní parsování).

### Výhody

- Ověřuje, že hodnota je neprázdné pole, kde každý prvek je osmičkový řetězec, a vrací `true` pouze tehdy, když projdou
  všechny položky.
- Rychle selže: vrátí `false` hned, jakmile je nalezen neosmičkový prvek.
- Užitečné jako ochrana před parsováním nebo převodem osmičkových řetězců, aby se předešlo chybám za běhu a
  nekonzistentnímu zpracování vstupu.

## Použití

### Syntaxe

Funkce:

- `areOctals(array)`

Parametry:

- `array`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value je neprázdné pole osmičkových řetězců
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areOctals(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:44:20 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>