# isPlainObject

## Popis

Kontroluje, zda je daná `value` prostý objekt, a vrátí `true`, pokud ano, jinak `false`.

### Případ použití

Ověřit, že vstup typu `unknown` (např. parsované JSON, externí data nebo argumenty funkcí) je prostý objekt, než se
budou číst klíče nebo mapovat do typovaného konfiguračního objektu.

> **Poznámka pro uživatele TypeScriptu:**
>
> `isPlainObject` je užitečné pro zúžení `unknown` před tím, než s ním budete zacházet jako s objektem typu record;
> vrací `true` pouze pro hodnoty, jejichž interní tag je `[object Object]`.

### Výhody

- Poskytuje jednoduchou a spolehlivou kontrolu, zda je hodnota prostý objekt (tj. `Object` / `{}`), a vrací `true` nebo
  `false`.
- Pomáhá rozlišit prosté objekty od polí, funkcí, `null` a dalších typů, které nejsou prostými objekty.
- Užitečné jako type guard v TypeScriptu pro zúžení hodnot `unknown` před přístupem k vlastnostem objektu.

## Použití

### Syntaxe

Funkce:

- `isPlainObject(value)`

Parametry:

- `value`: Hodnota, u které se testuje, zda je prostým objektem.

### Lokální import funkce

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input je zde prostý objekt
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // pravda
console.log(isPlainObject([])); // nepravda
console.log(isPlainObject(null)); // nepravda

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.isPlainObject(value)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Soubor byl vytvořen 6 February 2026 at 12:16:49 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>