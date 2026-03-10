# isFloat

## Descrição

`isFloat` determina se um determinado `value` é um número de ponto flutuante finito (um `number` que não é um inteiro).

### Caso de uso

Validar entrada numérica fornecida pelo usuário quando valores fracionários são necessários (por exemplo, preços,
medições, taxas) e rejeitar inteiros, `NaN` e infinitos.

> **Nota para utilizadores de TypeScript:**
>
> Use `isFloat` quando você precisar aceitar apenas entradas numéricas finitas e não inteiras; ele rejeita inteiros e
> números não finitos.

### Vantagens

- Retorna `true` apenas para números finitos e não inteiros (exclui inteiros, `NaN`, `Infinity` e `-Infinity`).
- Funciona com qualquer tipo de entrada (`unknown`) e restringe com segurança ao verificar `typeof value === "number"`.
- Usa guardas numéricos embutidos (`Number.isInteger`, `Number.isFinite`) para um comportamento previsível.

## Uso

### Sintaxe

Função:

- `isFloat(value)`

Parâmetros:

- `value`: O valor a ser verificado para saber se é um número de ponto flutuante.

### Importação local da função

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // o valor é um número em tempo de execução; é finito e não é um inteiro
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isFloat(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 16:09:21 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>