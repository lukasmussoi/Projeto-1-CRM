<template>
  <div class="min-h-screen bg-primary-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b border-rosa-claro">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-rosa-escuro">Cidades</h1>
            <p class="text-gray-600 mt-1">Explore as principais cidades do Brasil</p>
          </div>
          <button class="bg-rosa-escuro hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Nova Cidade
          </button>
        </div>
      </div>
    </div>

    <!-- Filtros -->
    <div class="container mx-auto px-4 py-6">
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6 border border-rosa-claro">
        <div class="flex flex-wrap gap-4">
          <div class="flex-1 min-w-64">
            <input 
              type="text" 
              placeholder="Buscar cidades..." 
              class="w-full px-4 py-2 border border-rosa-claro rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent"
            />
          </div>
          <select class="px-4 py-2 border border-rosa-claro rounded-lg focus:ring-2 focus:ring-rosa-claro">
            <option>Todas as regiões</option>
            <option>Norte</option>
            <option>Nordeste</option>
            <option>Centro-Oeste</option>
            <option>Sudeste</option>
            <option>Sul</option>
          </select>
          <select class="px-4 py-2 border border-rosa-claro rounded-lg focus:ring-2 focus:ring-rosa-claro">
            <option>Todos os estados</option>
            <option>São Paulo</option>
            <option>Rio de Janeiro</option>
            <option>Minas Gerais</option>
            <option>Bahia</option>
            <option>Paraná</option>
          </select>
        </div>
      </div>

      <!-- Cards das Cidades -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- São Paulo -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-rosa-claro">
          <div class="h-48 bg-gradient-to-br from-rosa-claro to-rosa-escuro flex items-center justify-center">
            <div class="text-center text-white">
              <div class="text-4xl font-bold mb-2">SP</div>
              <div class="text-sm opacity-90">São Paulo</div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-rosa-escuro">São Paulo</h3>
              <span class="bg-primary-100 text-rosa-escuro text-xs px-2 py-1 rounded-full">Sudeste</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">A maior metrópole do Brasil e centro financeiro da América Latina</p>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">População:</span>
                <span class="font-semibold">12.3 milhões</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Área:</span>
                <span class="font-semibold">1.521 km²</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Fundação:</span>
                <span class="font-semibold">1554</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Rio de Janeiro -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-rosa-claro">
          <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <div class="text-center text-white">
              <div class="text-4xl font-bold mb-2">RJ</div>
              <div class="text-sm opacity-90">Rio de Janeiro</div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-rosa-escuro">Rio de Janeiro</h3>
              <span class="bg-primary-100 text-rosa-escuro text-xs px-2 py-1 rounded-full">Sudeste</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">Cidade Maravilhosa, famosa pelas praias e Christ Redentor</p>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">População:</span>
                <span class="font-semibold">6.7 milhões</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Área:</span>
                <span class="font-semibold">1.200 km²</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Fundação:</span>
                <span class="font-semibold">1565</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Belo Horizonte -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-rosa-claro">
          <div class="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <div class="text-center text-white">
              <div class="text-4xl font-bold mb-2">BH</div>
              <div class="text-sm opacity-90">Belo Horizonte</div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-rosa-escuro">Belo Horizonte</h3>
              <span class="bg-primary-100 text-rosa-escuro text-xs px-2 py-1 rounded-full">Sudeste</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">Capital planejada de Minas Gerais, conhecida pela arquitetura</p>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">População:</span>
                <span class="font-semibold">2.5 milhões</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Área:</span>
                <span class="font-semibold">331 km²</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Fundação:</span>
                <span class="font-semibold">1897</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Salvador -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-rosa-claro">
          <div class="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div class="text-center text-white">
              <div class="text-4xl font-bold mb-2">BA</div>
              <div class="text-sm opacity-90">Salvador</div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-rosa-escuro">Salvador</h3>
              <span class="bg-primary-100 text-rosa-escuro text-xs px-2 py-1 rounded-full">Nordeste</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">Primeira capital do Brasil, rica em cultura afro-brasileira</p>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">População:</span>
                <span class="font-semibold">2.9 milhões</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Área:</span>
                <span class="font-semibold">693 km²</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Fundação:</span>
                <span class="font-semibold">1549</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Curitiba -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-rosa-claro">
          <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <div class="text-center text-white">
              <div class="text-4xl font-bold mb-2">PR</div>
              <div class="text-sm opacity-90">Curitiba</div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-rosa-escuro">Curitiba</h3>
              <span class="bg-primary-100 text-rosa-escuro text-xs px-2 py-1 rounded-full">Sul</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">Cidade modelo em sustentabilidade e qualidade de vida</p>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">População:</span>
                <span class="font-semibold">1.9 milhões</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Área:</span>
                <span class="font-semibold">435 km²</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Fundação:</span>
                <span class="font-semibold">1693</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Brasília -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-rosa-claro">
          <div class="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
            <div class="text-center text-white">
              <div class="text-4xl font-bold mb-2">DF</div>
              <div class="text-sm opacity-90">Brasília</div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-rosa-escuro">Brasília</h3>
              <span class="bg-primary-100 text-rosa-escuro text-xs px-2 py-1 rounded-full">Centro-Oeste</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">Capital federal, patrimônio da humanidade pela UNESCO</p>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">População:</span>
                <span class="font-semibold">3.1 milhões</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Área:</span>
                <span class="font-semibold">5.802 km²</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Fundação:</span>
                <span class="font-semibold">1960</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Paginação -->
      <div class="flex items-center justify-between mt-8">
        <div class="text-sm text-gray-700">
          Mostrando <span class="font-medium">1</span> a <span class="font-medium">6</span> de <span class="font-medium">50</span> cidades
        </div>
        <div class="flex space-x-2">
          <button class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
            Anterior
          </button>
          <button class="px-3 py-1 text-sm bg-rosa-escuro text-white rounded">1</button>
          <button class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">2</button>
          <button class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">3</button>
          <button class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Definir metadados da página
useHead({
  title: 'Cidades - CRM',
  meta: [
    { name: 'description', content: 'Explore as principais cidades do Brasil no sistema CRM' }
  ]
})
</script>