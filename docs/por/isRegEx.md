# isRegEx

## Descrição

Determina se um valor fornecido é uma instância de `RegExp`.

### Caso de uso

Validar valores fornecidos pelo usuário ou dinâmicos (por exemplo, configuração, payload de API, entradas de plugin)
antes de tratá-los como uma expressão regular.

> **Nota para utilizadores de TypeScript:**
>
> Use `isRegEx` para restringir valores `unknown` (ou de união) antes de usar propriedades ou métodos específicos de
> RegExp; ele retorna `true` apenas para valores que são instâncias de `RegExp`.

### Vantagens

- Fornece um simples type guard em tempo de execução para verificar se um valor é um `RegExp`.
- Ajuda a evitar erros quando o código espera uma expressão regular (por exemplo, antes de chamar `test`, `exec` ou ler
  `source`).
- Funciona tanto com literais de regex quanto com instâncias criadas via `new RegExp(...)`.
- Retorna um resultado booleano claro (`true`/`false`) sem lançar exceções para entradas que não sejam regex.

## Uso

### Sintaxe

Função:

- `isRegEx(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input é uma RegExp aqui
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isRegEx(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:30:45 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>