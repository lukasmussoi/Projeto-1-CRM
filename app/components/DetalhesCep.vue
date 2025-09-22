<template>
  <div v-if="dadosCep" class="bg-white rounded-lg shadow-lg p-6 mt-6 border border-rosa-claro">
    <div class="border-b border-rosa-claro pb-4 mb-4">
      <h3 class="text-xl font-semibold text-rosa-escuro">Detalhes do CEP</h3>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <!-- CEP -->
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">CEP</label>
        <span class="text-lg font-semibold text-gray-900">{{ dadosCep.cep }}</span>
      </div>

      <!-- Logradouro -->
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">Logradouro</label>
        <span class="text-lg text-gray-900">{{ dadosCep.logradouro || 'Não informado' }}</span>
      </div>

      <!-- Complemento -->
      <div v-if="dadosCep.complemento" class="flex flex-col">
        <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">Complemento</label>
        <span class="text-lg text-gray-900">{{ dadosCep.complemento }}</span>
      </div>

      <!-- Bairro -->
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">Bairro</label>
        <span class="text-lg text-gray-900">{{ dadosCep.bairro || 'Não informado' }}</span>
      </div>

      <!-- Cidade -->
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">Cidade</label>
        <span class="text-lg text-gray-900">{{ dadosCep.localidade }}</span>
      </div>

      <!-- Estado -->
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">Estado</label>
        <span class="text-lg text-gray-900">{{ dadosCep.estado }} ({{ dadosCep.uf }})</span>
      </div>

      <!-- Região -->
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">Região</label>
        <span class="text-lg text-gray-900">{{ dadosCep.regiao }}</span>
      </div>

      <!-- DDD -->
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">DDD</label>
        <span class="text-lg text-gray-900">({{ dadosCep.ddd }})</span>
      </div>
    </div>

    <!-- Informações adicionais em seção separada -->
    <div class="border-t border-gray-200 pt-4 mt-6">
      <h4 class="text-lg font-medium text-gray-900 mb-3">Códigos de Referência</h4>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">IBGE</label>
          <span class="text-base text-gray-900">{{ dadosCep.ibge }}</span>
        </div>

        <div v-if="dadosCep.gia" class="flex flex-col">
          <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">GIA</label>
          <span class="text-base text-gray-900">{{ dadosCep.gia }}</span>
        </div>

        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-500 uppercase tracking-wide">SIAFI</label>
          <span class="text-base text-gray-900">{{ dadosCep.siafi }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Estado vazio -->
  <div v-else class="text-center py-8">
    <div class="w-16 h-16 mx-auto mb-4 text-gray-300">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </div>
    <p class="text-gray-500">Tem que digitar o cep né seu esperto!?</p>
  </div>
</template>

<script setup lang="ts">
import type { CepResponse } from '~/types/cep'

// Props
defineProps<{
  dadosCep: CepResponse | null
}>()
</script>