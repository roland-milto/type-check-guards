# areHexadecimals

## Descrição

Verifica se todos os elementos em um array são strings hexadecimais, retornando `true` apenas para arrays não vazios em
que cada item é válido.

### Caso de uso

Use `areHexadecimals` para validar entrada do usuário ou dados externos (por exemplo, IDs, checksums, códigos de cor sem
um '#' inicial) antes de realizar parsing hexadecimal ou processamento adicional.

> **Nota para utilizadores de TypeScript:**
>
> Use `areHexadecimals` para validar entrada desconhecida antes de fazer parsing ou converter valores (por exemplo,
> antes de `parseInt(value, 16)` ou conversões para BigInt).

### Vantagens

- Valida que cada elemento seja uma string hexadecimal e retorna `true` somente quando todos os itens correspondem.
- Rejeita arrays vazios por design, retornando `false` quando faltam dados de entrada.
- Fornece um resultado booleano simples (`true`/`false`) adequado para guards e validação com retorno antecipado.

## Uso

### Sintaxe

Função:

- `areHexadecimals(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos que sejam strings hexadecimais.

### Importação local da função

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areHexadecimals(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 23:07:33 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>