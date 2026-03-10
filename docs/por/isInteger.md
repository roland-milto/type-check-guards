# isInteger

## Descrição

Determina se um determinado `value` é um número inteiro seguro.

### Caso de uso

Valide entradas não confiáveis (por exemplo, parâmetros de query, payloads JSON, variáveis de ambiente) antes de usá-las
como um inteiro para índices de array, paginação, contadores ou IDs de banco de dados.

> **Nota para utilizadores de TypeScript:**
>
> Use `isInteger` para validar uma entrada desconhecida antes de tratá-la como um inteiro numérico; ele retorna `true`
> somente para valores em que `typeof value === "number"` e `Number.isSafeInteger(value)`.

### Vantagens

- Verifica tanto o tipo quanto a segurança numérica: retorna `true` somente quando a entrada é um número e um inteiro
  seguro.
- Evita armadilhas comuns com coerção numérica: strings como "5" corretamente retornam `false`.
- Rejeita não inteiros e inteiros inseguros, tornando-o adequado para IDs, contadores e indexação de arrays.

## Uso

### Sintaxe

Função:

- `isInteger(value)`

Parâmetros:

- `value`: O valor a ser verificado quanto ao status de inteiro.

### Importação local da função

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // verdadeiro
const b = isInteger(-100);   // verdadeiro
const c = isInteger("5");    // falso
const d = isInteger(5.5);    // falso
const e = isInteger(null);   // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isInteger(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 00:51:07 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>