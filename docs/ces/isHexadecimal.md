# isHexadecimal

## Popis

`isHexadecimal` kontroluje, zda je daná hodnota hexadecimální řetězcový literál s povinnou předponou `0x`/`0X`.

### Případ použití

`isHexadecimal` použijte k ověření konfiguračních hodnot, polí v API payloadu nebo argumentů CLI, které musí být zadány
jako hexadecimální řetězcové literály (např. ID, masky nebo adresy) a nesmí obsahovat okolní bílé znaky.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isHexadecimal` použijte, když potřebujete před parsováním nebo převodem ověřit uživatelský vstup či serializovaná
> data jako přísný řetězcový hexadecimální literál (včetně předpony `0x`/`0X`).

### Výhody

- Ověřuje, že hodnota je řetězec a odpovídá přísnému formátu hexadecimálního literálu (vyžaduje předponu `0x`/`0X`).
- Odmítá řetězce s úvodními nebo koncovými bílými znaky, což pomáhá předejít nechtěnému přijetí doplněného vstupu.
- Podporuje volitelné znaménko a nerozlišuje velikost písmen u předpony i číslic, přičemž předvídatelně vrací `true`/
  `false`.

## Použití

### Syntaxe

Funkce:

- `isHexadecimal(value)`

Parametry:

- `value`: Hodnota, která má být zkontrolována.

### Lokální import funkce

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // pravda
isHexadecimal("-0Xff"); // pravda
isHexadecimal("1A2B"); // nepravda (chybí předpona)
isHexadecimal(" 0x1A2B"); // nepravda (úvodní mezera)
isHexadecimal(0x1a2b); // nepravda (není řetězec)
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isHexadecimal(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 22:58:04 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>