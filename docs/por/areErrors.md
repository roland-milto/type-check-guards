# areErrors

## Descrição

Verifica se um array não está vazio e contém apenas objetos `Error`, retornando `true` ou `false`.

### Caso de uso

Validar que um `unknown[]` fornecido em tempo de execução (por exemplo, falhas agregadas, resultados de validação ou
dados desserializados) é uma lista não vazia de objetos `Error` antes de iterar, registrar ou relançar.

> **Nota para utilizadores de TypeScript:**
>
> `areErrors` retorna `true` apenas para um array preenchido em que cada item é um `Error`; retorna `false` para um
> array vazio ou se algum elemento não for um `Error`.

### Vantagens

- Garante que cada elemento seja uma instância de `Error`, permitindo tratamento e registro de erros com segurança.
- Rejeita arrays vazios, evitando que estados acidentais de “sem erros” sejam tratados como listas de erros válidas.
- Funciona bem como uma guarda em tempo de execução ao lidar com entradas `unknown[]` (por exemplo, de APIs ou de blocos
  `catch`).

## Uso

### Sintaxe

Função:

- `areErrors(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a objetos `Error`.

### Importação local da função

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value é um array não vazio de objetos Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areErrors(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 12:35:14 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>