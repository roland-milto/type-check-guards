# isString

## Descrição

`isString` determina se um determinado valor é uma string.

### Caso de uso

Validar entrada do usuário, campos de payload de API ou valores de configuração em tempo de execução para garantir que
um valor seja uma string antes de aplicar operações de string (por exemplo, remover espaços, dividir, conversão de
maiúsculas/minúsculas).

> **Nota para utilizadores de TypeScript:**
>
> Use `isString` para validar valores `unknown` ou com tipagem frouxa antes de chamar métodos de string; ele retorna
`true` somente quando `typeof value === "string"`.

### Vantagens

- Verificação simples e rápida usando `typeof`.
- Retorna um resultado booleano previsível: `true` para strings, caso contrário `false`.
- Funciona tanto para strings vazias quanto não vazias.
- Útil como uma verificação leve em tempo de execução antes de realizar operações específicas de string.

## Uso

### Sintaxe

Função:

- `isString(value)`

Parâmetros:

- `value`: O valor a ser testado quanto ao tipo string.

### Importação local da função

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input é uma string aqui
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isString(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isString](../_analysis/isString.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:15:17 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>