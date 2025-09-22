import { ref, type Ref } from 'vue'
import type { CepResponse, CepError } from '~/types/cep'

// Interface para item do histórico
interface HistoricoCepItem extends CepResponse {
  dataPesquisa: Date
}

export const useCep = () => {
  const dadosCep: Ref<CepResponse | null> = ref(null)
  const loading: Ref<boolean> = ref(false)
  const error: Ref<string | null> = ref(null)
  const historicoCeps: Ref<HistoricoCepItem[]> = ref([])

  const buscarCep = async (cep: string): Promise<void> => {
    // Limpar dados anteriores
    dadosCep.value = null
    error.value = null
    
    // Validar formato do CEP
    const cepLimpo = cep.replace(/\D/g, '')
    
    if (cepLimpo.length === 0) {
      // Se o campo original não estava vazio mas ficou vazio após remover não-dígitos
      if (cep.trim().length > 0) {
        error.value = 'Onde voce viu que existe letra em CEP seu burro!'
        return
      }
      // Se o campo original estava realmente vazio
      error.value = 'Tem que digitar o cep né seu esperto!?'
      return
    }
    
    if (cepLimpo.length !== 8) {
      error.value = 'CEP deve ter 8 dígitos'
      return
    }

    loading.value = true

    try {
      const response = await $fetch<CepResponse | CepError>(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      
      // Verificar se a resposta contém erro
      if ('erro' in response && response.erro) {
        error.value = 'CEP não encontrada'
        return
      }

      // Garantir que temos uma resposta válida
      if ('cep' in response) {
        dadosCep.value = response
        // Adicionar ao histórico se não existir
        adicionarAoHistorico(response)
      } else {
        error.value = 'Resposta inválida da API'
      }
    } catch (err) {
      console.error('Erro ao buscar CEP:', err)
      error.value = 'Erro ao consultar CEP. Tente novamente.'
    } finally {
      loading.value = false
    }
  }

  const adicionarAoHistorico = (cepResponse: CepResponse): void => {
    // Verificar se o CEP já existe no histórico
    const cepExiste = historicoCeps.value.some(item => item.cep === cepResponse.cep)
    
    if (!cepExiste) {
      const novoItem: HistoricoCepItem = {
        ...cepResponse,
        dataPesquisa: new Date()
      }
      // Adicionar no início da lista (mais recente primeiro)
      historicoCeps.value.unshift(novoItem)
      
      // Limitar histórico a 10 itens
      if (historicoCeps.value.length > 10) {
        historicoCeps.value = historicoCeps.value.slice(0, 10)
      }
    }
  }

  const selecionarCepDoHistorico = (cepItem: HistoricoCepItem): void => {
    dadosCep.value = cepItem
    error.value = null
  }

  const limparHistorico = (): void => {
    historicoCeps.value = []
  }

  const limparDados = (): void => {
    dadosCep.value = null
    error.value = null
    loading.value = false
  }

  return {
    dadosCep: readonly(dadosCep),
    loading: readonly(loading),
    error: readonly(error),
    historicoCeps: readonly(historicoCeps),
    buscarCep,
    selecionarCepDoHistorico,
    limparHistorico,
    limparDados
  }
}