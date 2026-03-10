# isHexadecimal

## Descrição

`isHexadecimal` verifica se um determinado valor é um literal de string hexadecimal com o prefixo obrigatório `0x`/`0X`.

### Caso de uso

Use `isHexadecimal` para validar valores de configuração, campos de payload de API ou argumentos de CLI que devem ser
fornecidos como literais de string hexadecimal (por exemplo, IDs, máscaras ou endereços) e não devem conter espaços em
branco ao redor.

> **Nota para utilizadores de TypeScript:**
>
> Use `isHexadecimal` quando você precisar validar entrada do usuário ou dados serializados como uma string literal
> hexadecimal estrita (incluindo o prefixo `0x`/`0X`) antes de fazer parsing ou convertê-la.

### Vantagens

- Valida que um valor é uma string e corresponde a um formato estrito de literal hexadecimal (requer o prefixo `0x`/
  `0X`).
- Rejeita strings com espaços em branco no início ou no fim, ajudando a evitar a aceitação acidental de entrada com
  preenchimento.
- Suporta sinal opcional e não diferencia maiúsculas de minúsculas para o prefixo e os dígitos, retornando `true`/
  `false` de forma previsível.

## Uso

### Sintaxe

Função:

- `isHexadecimal(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // true
isHexadecimal("-0Xff"); // true
isHexadecimal("1A2B"); // false (prefixo ausente)
isHexadecimal(" 0x1A2B"); // false (espaço em branco à esquerda)
isHexadecimal(0x1a2b); // false (não é uma string)
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isHexadecimal(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 23:00:28 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>