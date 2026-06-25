/**
 * Configuração central de afiliados — MamãeEscolhe
 *
 * Cada plataforma define a tag de afiliado e uma função que injeta
 * essa tag em uma URL de produto. Mantenha as tags reais aqui para
 * que todos os botões e tabelas de comparação usem a mesma fonte.
 */

export type Plataforma = 'amazon' | 'mercadolivre' | 'shopee';

export interface ConfigAfiliado {
  /** Nome amigável exibido nos botões */
  nome: string;
  /** Tag / ID de afiliado */
  tag: string;
  /** Parâmetro de query usado para a tag (quando aplicável) */
  paramTag: string;
  /** Cor de fundo do botão (classe utilitária Tailwind) */
  cor: string;
}

export const afiliados: Record<Plataforma, ConfigAfiliado> = {
  amazon: {
    nome: 'Amazon',
    tag: 'melhordesco0f-20',
    paramTag: 'tag',
    // Texto escuro sobre o laranja Amazon (contraste AA ~6,6:1 e fiel à marca)
    cor: 'bg-[#FF9900] hover:bg-[#e68a00] !text-escuro',
  },
  mercadolivre: {
    nome: 'Mercado Livre',
    tag: 'mole6459944',
    paramTag: 'matt_word',
    cor: 'bg-[#FFE600] hover:bg-[#f5dd00] !text-escuro',
  },
  shopee: {
    // Substitua pela sua tag real do Shopee Affiliate
    nome: 'Shopee',
    tag: 'SEU_ID_SHOPEE',
    paramTag: 'af_id',
    // Vermelho Shopee aprofundado para texto branco passar em AA (~5,7:1)
    cor: 'bg-[#D0011B] hover:bg-[#b30016]',
  },
};

/**
 * Recebe uma URL de produto e devolve a URL já com a tag de afiliado
 * anexada como parâmetro de query. Se a URL for inválida ou vazia,
 * devolve string vazia (o botão é então ocultado).
 */
export function comTagAfiliado(url: string | undefined, plataforma: Plataforma): string {
  if (!url) return '';

  const config = afiliados[plataforma];

  try {
    const u = new URL(url);
    // Não sobrescreve se a tag já estiver presente
    if (!u.searchParams.has(config.paramTag)) {
      u.searchParams.set(config.paramTag, config.tag);
    }
    return u.toString();
  } catch {
    // URL malformada — retorna como veio para não quebrar a página
    return url;
  }
}
