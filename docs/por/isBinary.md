# isBinary

## Descrição

`isBinary` determina se um valor é uma string binária (opcionalmente prefixada com `0b`/`0B`) e retorna `true` ou
`false`.

### Caso de uso

Validar strings fornecidas pelo usuário (por exemplo, campos de formulário, argumentos de CLI, valores de configuração)
para garantir que representem apenas dígitos binários, opcionalmente com um prefixo `0b`/`0B`, antes de processamento
adicional.

> **Nota para utilizadores de TypeScript:**
>
> Use `isBinary` como um type guard antes de analisar ou converter uma string para `BigInt`/`Number` para evitar
> entradas inválidas.

### Vantagens

- Aceita strings binárias com ou sem o prefixo `0b`/`0B`.
- Rejeita strings vazias e strings com espaços em branco no início/fim (ASCII ≤ 32).
- Retorna `true`/`false` sem lançar exceções, tornando-o seguro para entradas desconhecidas.

## Uso

### Sintaxe

Função:

- `isBinary(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // verdadeiro
const b = isBinary("1010");   // verdadeiro
const c = isBinary("0b1020"); // falso
const d = isBinary(0b1010);     // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isBinary(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 23:11:04 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>