# isError

## Descrição

Verifica se um determinado `value` é uma instância de `Error`.

### Caso de uso

Use `isError` quando você receber um valor `unknown` (como de um bloco `catch`, um callback ou uma biblioteca externa) e
precisar determinar com segurança se ele é um `Error` antes de ler `message`, `name` ou `stack`.

> **Nota para utilizadores de TypeScript:**
>
> Use `isError` para proteger valores `unknown` (por exemplo, vindos de `catch`) antes de tratá-los como um `Error`.

### Vantagens

- Fornece uma verificação simples em tempo de execução para saber se um valor é uma instância de `Error`.
- Ajuda a restringir entradas desconhecidas antes de acessar propriedades de `Error`, como `message` ou `stack`.
- Reduz o risco de exceções em tempo de execução ao lidar com valores vindos de `catch`, APIs externas ou fontes sem
  tipagem.

## Uso

### Sintaxe

Função:

- `isError(value)`

Parâmetros:

- `value`: O valor a ser verificado em relação ao tipo `Error`.

### Importação local da função

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isError(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isError](../_analysis/isError.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 12:46:48 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>