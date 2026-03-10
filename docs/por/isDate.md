# isDate

## Descrição

`isDate` determina se um valor fornecido é um `Date`, retornando `true` para instâncias de `Date` e `false` caso
contrário.

### Caso de uso

Validar e restringir valores desconhecidos (por exemplo, dados de requisição, valores de configuração ou JSON analisado)
antes de realizar operações com `Date`, como formatação, comparações ou chamar `toISOString()`.

> **Nota para utilizadores de TypeScript:**
>
> Use `isDate` para restringir `unknown` para `Date` em tempo de execução; ele retorna `true` apenas para instâncias
> reais de `Date` (não para strings de data).

### Vantagens

- Fornece uma verificação simples em tempo de execução para confirmar se um valor é um `Date`.
- Ajuda a evitar erros de tipo ao garantir que apenas instâncias de `Date` passem na validação.
- É útil para validar entradas desconhecidas (por exemplo, payloads de API) antes de usar métodos específicos de data.

## Uso

### Sintaxe

Função:

- `isDate(value)`

Parâmetros:

- `value`: O valor a ser verificado quanto ao tipo `Date`.

### Importação local da função

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input é uma Date aqui
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isDate(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isDate](../_analysis/isDate.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 15:47:26 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>