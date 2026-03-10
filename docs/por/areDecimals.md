# areDecimals

## Descrição

Verifica se todos os elementos em um array são números decimais e se o array está preenchido, retornando `true` ou
`false`.

### Caso de uso

Validar listas fornecidas pelo usuário (por exemplo, colunas CSV ou entradas de formulário) para garantir que o array
não esteja vazio e que cada entrada seja um valor decimal antes de fazer parsing ou cálculos.

> **Nota para utilizadores de TypeScript:**
>
> Use `areDecimals` quando você precisar de uma verificação booleana rápida de que um `unknown[]` não está vazio e que
> cada elemento é uma representação decimal.

### Vantagens

- Garante que a entrada seja um array preenchido antes de validar os itens, evitando a aceitação acidental de listas
  vazias.
- Valida cada elemento com `isDecimal`, portanto valores mistos ou inválidos resultam imediatamente em `false`.
- Fornece um resultado booleano simples (`true`/`false`) adequado para guards e fluxos de validação com retorno
  antecipado.

## Uso

### Sintaxe

Função:

- `areDecimals(array)`

Parâmetros:

- `array`: O array a ser verificado.

### Importação local da função

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // verdadeiro
console.log(areDecimals(b)); // falso
console.log(areDecimals(c)); // falso
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areDecimals(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 15:58:45 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>