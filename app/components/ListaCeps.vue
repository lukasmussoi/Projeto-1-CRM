<template>
  <div v-if="historicoCeps.length > 0" class="bg-white rounded-lg shadow-lg p-6 mt-6 border border-rosa-claro">
    <div class="border-b border-rosa-claro pb-4 mb-4">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold text-rosa-escuro">Histórico de CEPs</h3>
        <button 
          @click="limparHistorico"
          class="text-sm text-rosa-escuro hover:text-primary-700 transition-colors"
        >
          Limpar histórico
        </button>
      </div>
      <p class="text-sm text-gray-500 mt-1">{{ historicoCeps.length }} CEP(s) pesquisado(s)</p>
    </div>

    <div class="space-y-3 max-h-80 overflow-y-auto">
      <div 
        v-for="(cepItem, index) in historicoCeps" 
        :key="index"
        class="border border-rosa-claro rounded-lg p-4 hover:border-rosa-escuro hover:shadow-sm transition-all cursor-pointer"
        @click="selecionarCep(cepItem)"
      >
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <div class="flex items-center space-x-3">
              <span class="text-lg font-semibold text-rosa-escuro">{{ cepItem.cep }}</span>
              <span class="text-sm text-gray-500">{{ formatarDataPesquisa(cepItem.dataPesquisa) }}</span>
            </div>
            <div class="text-gray-700 mt-1">
              <span class="font-medium">{{ cepItem.logradouro || 'Logradouro não informado' }}</span>
              <span v-if="cepItem.bairro" class="text-gray-500"> - {{ cepItem.bairro }}</span>
            </div>
            <div class="text-sm text-gray-600">
              {{ cepItem.localidade }}/{{ cepItem.uf }}
              <span v-if="cepItem.complemento" class="ml-2 text-gray-500">({{ cepItem.complemento }})</span>
            </div>
          </div>
          
          <!-- Ícone de seta -->
          <div class="text-gray-400">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Estado vazio -->
  <div v-else class="bg-gray-50 rounded-lg p-6 mt-6 text-center">
    <div class="w-12 h-12 mx-auto mb-4 text-gray-300">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
      </svg>
    </div>
    <p class="text-gray-500">Nenhum CEP pesquisado ainda</p>
    <p class="text-sm text-gray-400 mt-1">Pesquise um CEP para começar seu histórico</p>
  </div>
</template>

<script setup lang="ts">
import type { CepResponse } from '~/types/cep'

// Interface para item do histórico
interface HistoricoCepItem extends CepResponse {
  dataPesquisa: Date
}

// Props
defineProps<{
  historicoCeps: HistoricoCepItem[]
}>()

// Emits
const emit = defineEmits<{
  selecionarCep: [cep: HistoricoCepItem]
  limparHistorico: []
}>()

// Funções
const selecionarCep = (cepItem: HistoricoCepItem) => {
  emit('selecionarCep', cepItem)
}

const limparHistorico = () => {
  emit('limparHistorico')
}

const formatarDataPesquisa = (data: Date) => {
  const agora = new Date()
  const diffMs = agora.getTime() - data.getTime()
  const diffMinutos = Math.floor(diffMs / (1000 * 60))
  const diffHoras = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMinutos < 1) return 'Agora'
  if (diffMinutos < 60) return `${diffMinutos}min atrás`
  if (diffHoras < 24) return `${diffHoras}h atrás`
  if (diffDias < 7) return `${diffDias}d atrás`
  
  return data.toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: '2-digit',
    year: '2-digit'
  })
}
</script>