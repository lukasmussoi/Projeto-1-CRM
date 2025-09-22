<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Consulta CEP
        </h1>
        <p class="text-gray-600">
          Digite o CEP para buscar informações
        </p>
      </div>

      <!-- Formulário de busca -->
      <div class="max-w-md mx-auto">
        <div class="flex space-x-4">
          <BaseInput 
            v-model="cep"
            type="text"
            placeholder="Digite o CEP (ex: 83260-000)"
            class="flex-1"
            :disabled="loading"
          />
          <BaseButton 
            text="Buscar"
            :loading="loading"
            @click="buscarCepHandler"
          />
        </div>
        
        <!-- Mensagem de erro -->
        <div v-if="error" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {{ error }}
        </div>
      </div>

      <!-- Componente de detalhes -->
      <div class="max-w-2xl mx-auto">
        <DetalhesCep :dados-cep="dadosCep" />
      </div>

      <!-- Componente de histórico -->
      <div class="max-w-2xl mx-auto">
        <ListaCeps 
          :historico-ceps="[...historicoCeps]"
          @selecionar-cep="handleSelecionarCep"
          @limpar-historico="handleLimparHistorico"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '~/components/BaseInput.vue'
import BaseButton from '~/components/BaseButton.vue'
import DetalhesCep from '~/components/DetalhesCep.vue'
import ListaCeps from '~/components/ListaCeps.vue'

// Composable para CEP
const { dadosCep, loading, error, historicoCeps, buscarCep, selecionarCepDoHistorico, limparHistorico } = useCep()

// Estado reativo
const cep = ref('')

// Função de busca
const buscarCepHandler = () => {
  buscarCep(cep.value)
}

// Função para selecionar CEP do histórico
const handleSelecionarCep = (cepItem: any) => {
  selecionarCepDoHistorico(cepItem)
  cep.value = cepItem.cep
}

// Função para limpar histórico
const handleLimparHistorico = () => {
  limparHistorico()
}

// Definir metadados da página
useHead({
  title: 'Consulta CEP - CRM',
  meta: [
    { name: 'description', content: 'Consulta de CEP no sistema CRM' }
  ]
})
</script>