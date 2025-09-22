import { ref, type Ref } from 'vue'
import type { CepResponse, CepError } from '~/types/cep'

export const useCep = () => {
  const dadosCep: Ref<CepResponse | null> = ref(null)
  const loading: Ref<boolean> = ref(false)
  const error: Ref<string | null> = ref(null)

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

  const limparDados = (): void => {
    dadosCep.value = null
    error.value = null
    loading.value = false
  }

  return {
    dadosCep: readonly(dadosCep),
    loading: readonly(loading),
    error: readonly(error),
    buscarCep,
    limparDados
  }
}