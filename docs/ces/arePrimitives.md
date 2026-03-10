# arePrimitives

## Popis

`arePrimitives` vyhodnocuje, zda jsou všechny prvky v poskytnutém neprázdném poli primitivní typy.

### Případ použití

Ověřte, že příchozí data (např. parametry dotazu, hodnoty řádku CSV nebo seznam ID/štítků) obsahují pouze primitivní
hodnoty před serializací, hashováním, logováním nebo předáním do API, které nesmí přijímat objekty.

> **Poznámka pro uživatele TypeScriptu:**
>
> `arePrimitives` použijte, když potřebujete před dalším zpracováním zajistit, že `unknown[]` obsahuje pouze primitivní
> hodnoty (string, number, bigint, boolean, symbol, undefined nebo null).

### Výhody

- Vrací `true` pouze tehdy, když je každý prvek primitivní hodnota, takže slouží jako přísná kontrola pro pole „bez
  objektů/funkcí“.
- Rychle selže: vrátí `false` hned, jakmile je nalezen neprimitivní prvek.
- Vrací `false` také pro ne-pole a prázdná pole (přes kontrolu naplněného pole), čímž zabraňuje nechtěnému přijetí
  neplatného vstupu.

## Použití

### Syntaxe

Funkce:

- `arePrimitives(array)`

Parametry:

- `array`: Pole, u kterého se má zkontrolovat, zda obsahuje prvky primitivního typu.

### Lokální import funkce

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // pravda
const r2 = arePrimitives(b); // pravda
const r3 = arePrimitives(c); // nepravda
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.arePrimitives(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 00:00:31 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>