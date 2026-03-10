# isOfType

## Descrição

Determina se um determinado `value` corresponde a uma string de tipo especificada, usando `typeof` para tipos primitivos
e uma alternativa para tipos complexos.

### Caso de uso

Validar e restringir (narrow) entradas `unknown` (por exemplo, respostas de API, entrada do usuário, JSON analisado)
verificando se um valor é de um tipo esperado em string antes de realizar operações específicas do tipo.

> **Nota para utilizadores de TypeScript:**
>
> Use `isOfType` para ramificar com base em tipos em tempo de execução ao trabalhar com valores `unknown`; ele retorna
`true`/`false` e trata `null` e `undefined` explicitamente.

### Vantagens

- Verifica tipos primitivos via `typeof` direto para velocidade e clareza.
- Lida corretamente com `null` e `undefined`, que o `typeof` sozinho não consegue distinguir como pretendido.
- Oferece suporte a strings de tipo complexas ou personalizadas por meio de uma comparação alternativa usando
  `getTypeOf`.
- Retorna um resultado booleano simples (`true`/`false`) adequado para guards e ramificações.

## Uso

### Sintaxe

Função:

- `isOfType(value, type)`

Parâmetros:

- `value`: O valor a ser testado em relação ao `type`.
- `type`: A representação em string do tipo a ser verificado.

### Importação local da função

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input é um número aqui
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input é uma string aqui
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isOfType(value, type)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 17:05:50 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>