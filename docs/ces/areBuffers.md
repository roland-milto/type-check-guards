# areBuffers

## Popis

`areBuffers` kontroluje, zda je poskytnutá hodnota neprázdné, vyplněné pole, kde je každý prvek `Buffer`, a pokud ano,
vrací `true`, jinak `false`.

### Případ použití

Ověřte příchozí pole chunků (např. ze streamů, nahrávání souborů nebo síťových paketů), abyste zajistili, že všechny
části jsou instance `Buffer` před zřetězením, dekódováním nebo předáním kryptografickým či binárně-zpracovatelským
funkcím.

> **Poznámka pro uživatele TypeScriptu:**
>
> Použijte `areBuffers` k ověření `unknown[]` před voláním API specifických pro Buffer, jako je `Buffer.concat`, a
> zajistěte, že funkce vrátí `true` pouze tehdy, když je každý prvek `Buffer`.

### Výhody

- Zajišťuje, že každý prvek ve vstupu je instancí Node.js `Buffer`, a vrací `true` pouze tehdy, když odpovídá celé pole.
- Odmítá neplatné vstupy včas tím, že vyžaduje neprázdné, vyplněné pole; pro prázdná pole nebo ne-pole vrací `false`.
- Užitečné jako ochranná kontrola před prováděním operací určených pouze pro buffery (např. zřetězení, hashování,
  binární protokoly).

## Použití

### Syntaxe

Funkce:

- `areBuffers(array)`

Parametry:

- `array`: Pole, které se má zkontrolovat na instance bufferu.

### Lokální import funkce

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globální import objektu

Pro import funkcí jako globálních metod objektu použijte:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Následující metoda bude poté dostupná globálně:

- `Type.areBuffers(array)`

## Analýza funkcí

Zde je zdokumentována tabulková analýza výstupu při dosazení různých parametrů do
funkcí: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Soubor byl vytvořen 31 January 2026 at 16:24:35 (UTC) použitím *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>