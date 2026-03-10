# isBigInt

## Descrição

`isBigInt` verifica se um determinado valor é do tipo `bigint`, retornando `true` para primitivos BigInt e `false` caso
contrário.

### Caso de uso

Validar e restringir valores provenientes de fontes não tipadas (por exemplo, parsing de JSON, entrada do usuário, APIs
externas) antes de realizar cálculos específicos de BigInt ou armazená-los em campos exclusivos de BigInt.

> **Nota para utilizadores de TypeScript:**
>
> Use `isBigInt` para restringir `unknown` a `bigint` antes de fazer aritmética com BigInt (por exemplo, `+`, `*`), que
> exige operandos BigInt.

### Vantagens

- Fornece uma verificação simples e confiável em tempo de execução para o tipo primitivo `bigint`.
- Ajuda a restringir valores `unknown` antes de realizar operações exclusivas de BigInt.
- Evita falsos positivos: números comuns, strings e outros tipos retornam `false`.

## Uso

### Sintaxe

Função:

- `isBigInt(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // verdadeiro
console.log(isBigInt(10));  // falso
console.log(isBigInt("10")); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isBigInt(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 23:33:01 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>