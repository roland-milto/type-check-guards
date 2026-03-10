# isValidDate

## Descrição

`isValidDate` verifica se um determinado valor é um objeto `Date` válido e retorna `true` apenas para datas reais e não
inválidas.

### Caso de uso

Validar entrada do usuário ou dados de API que possam conter datas, garantindo que o valor seja uma instância real de
`Date` e não uma data inválida antes de realizar cálculos, formatação ou comparações de datas.

> **Nota para utilizadores de TypeScript:**
>
> Use `isValidDate` antes de chamar métodos de `Date` (por exemplo, `toISOString`, `getTime`) em valores tipados como
`unknown` para garantir que sejam objetos `Date` válidos.

### Vantagens

- Garante que um valor seja uma instância de `Date` e não apenas uma string ou número semelhante a data.
- Rejeita datas inválidas (por exemplo, `new Date("invalid")`) verificando valores de tempo `NaN`.
- Proteção booleana simples que é fácil de usar em condicionais e pipelines de validação.
- Ajuda a evitar erros em tempo de execução ao chamar métodos de data, verificando a entrada primeiro.

## Uso

### Sintaxe

Função:

- `isValidDate(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input é uma instância válida de Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // falso
console.log(isValidDate("2025-12-22")); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isValidDate(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 16:52:24 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>