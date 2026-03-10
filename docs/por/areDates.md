# areDates

## Descrição

`areDates` determina se um determinado array está preenchido e contém apenas objetos `Date`, retornando `true` somente
quando todos os elementos são datas válidas.

### Caso de uso

Use `areDates` para validar entradas desconhecidas (por exemplo, JSON analisado, dados de formulário, payloads de API)
antes de executar lógica específica de datas, como ordenar por tempo, formatar ou calcular intervalos.

> **Nota para utilizadores de TypeScript:**
>
> Retorna `true` apenas para arrays não vazios em que cada elemento é um `Date`; arrays vazios retornam `false`.

### Vantagens

- Garante que um array não esteja vazio antes de validar seu conteúdo, evitando retornar `true` para entradas vazias.
- Verifica se cada elemento é uma instância de `Date`, retornando `false` imediatamente na primeira divergência.
- Útil como uma verificação no estilo guard antes de realizar operações específicas de data nos itens do array.

## Uso

### Sintaxe

Função:

- `areDates(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a objetos `Date`.

### Importação local da função

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // verdadeiro
console.log(areDates(b)); // falso
console.log(areDates(c)); // falso

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areDates(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areDates](../_analysis/areDates.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 15:31:57 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>