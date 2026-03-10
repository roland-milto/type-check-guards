# areOctals

## Descrição

`areOctals` determina se o valor fornecido é um array não vazio de strings octais válidas.

### Caso de uso

Use `areOctals` ao validar entrada do usuário, valores de configuração ou payloads de API que devem conter literais
octais (por exemplo, modos de permissão de arquivo como `0o755`) e você quer rejeitar arrays vazios ou quaisquer
entradas inválidas retornando `false`.

> **Nota para utilizadores de TypeScript:**
>
> Use `areOctals` para garantir que você tenha um `unknown[]` não vazio em que cada entrada seja uma string octal válida
> antes de converter (por exemplo, via `Number(...)` ou análise personalizada).

### Vantagens

- Valida que um valor seja um array não vazio em que cada elemento é uma string octal, retornando `true` somente quando
  todos os itens passam.
- Falha rapidamente: retorna `false` assim que um elemento não octal é encontrado.
- Útil como uma verificação antes de analisar ou converter strings octais para evitar erros em tempo de execução e
  tratamento inconsistente de entradas.

## Uso

### Sintaxe

Função:

- `areOctals(array)`

Parâmetros:

- `array`: O valor a ser verificado.

### Importação local da função

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value é um array não vazio de strings octais
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areOctals(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:57:55 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>