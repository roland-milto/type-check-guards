# areBooleans

## Popis

`areBooleans` kontroluje, zda dané neprázdné pole obsahuje pouze boolean hodnoty; vrací `true`, pokud ano, jinak
`false`.

### Případ použití

Ověřte data poskytnutá uživatelem nebo z externích zdrojů (např. JSON payloady, parametry dotazu, konfigurační pole),
abyste zajistili, že neprázdný seznam obsahuje pouze booleany, než na něj aplikujete boolean logiku nebo jej předáte
API, která očekávají `boolean[]`.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areBooleans` k ověření `unknown[]` před tím, než s ním budete zacházet jako s `boolean[]`; pro prázdná pole
> vrací `false`, takže tento případ výslovně ošetřete, pokud má být prázdný seznam povolen.

### Výhody

- Vrací `true` pouze tehdy, když je každý prvek boolean a vstup je neprázdné pole.
- Zabraňuje falešně pozitivním výsledkům tím, že odmítá prázdná pole (vrací `false`).
- Dobře funguje jako runtime guard před operacemi určenými pouze pro booleany (např. `every`, `some`, logické redukce).

## Použití

### Syntaxe

Funkce:

- `areBooleans(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat na boolean prvky.

### Lokální import funkce

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areBooleans(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Soubor byl vytvořen 30 January 2026 at 14:39:32 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>