# isEmpty

## Descrição

Determina se um determinado valor está vazio, retornando `true` para `null`, `undefined`, strings vazias/compostas por
espaços em branco, arrays vazios, `Map`/`Set` vazios ou objetos sem propriedades enumeráveis próprias.

### Caso de uso

Use `isEmpty` para validar entradas e detectar valores ausentes/em branco em vários tipos de dados (por exemplo, campos
de formulário, payloads de API, objetos de configuração) em que `null`, `undefined`, strings com espaços em branco,
coleções vazias e objetos sem propriedades devem ser tratados como vazios.

> **Nota para utilizadores de TypeScript:**
>
> `isEmpty` é um utilitário que retorna booleano (não um predicado de tipo do TypeScript), portanto não restringe tipos
> por si só; use-o para validação/ramificação em vez de restrição em tempo de compilação.

### Vantagens

- Trata `null` e `undefined` como `true` em verificações de vazio.
- Considera strings compostas apenas por espaços em branco como vazias ao remover espaços antes de verificar o
  comprimento.
- Oferece suporte a tipos de contêiner comuns (arrays, `Map`, `Set`) e a objetos simples sem propriedades enumeráveis
  próprias.
- Evita contar propriedades herdadas ao usar verificações com `hasOwnProperty`.
- Retorna um resultado booleano simples (`true`/`false`) adequado para guards e validação.

## Uso

### Sintaxe

Função:

- `isEmpty(value)`

Parâmetros:

- `value`: O valor a ser verificado quanto a vazio.

### Importação local da função

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isEmpty(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 16:20:25 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>