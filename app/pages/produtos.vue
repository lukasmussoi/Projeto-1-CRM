<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Produtos</h1>
            <p class="text-gray-600 mt-1">Gerencie seu catálogo de produtos</p>
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Novo Produto
          </button>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="container mx-auto px-4 py-6">
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div class="flex flex-wrap gap-4">
          <div class="flex-1 min-w-64">
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Todas as categorias</option>
            <option>Eletrônicos</option>
            <option>Roupas</option>
            <option>Casa & Jardim</option>
            <option>Esportes</option>
          </select>
          <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Todos os status</option>
            <option>Ativo</option>
            <option>Inativo</option>
            <option>Esgotado</option>
          </select>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <!-- Produto 1 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div class="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ativo</span>
              <span class="text-sm text-gray-500">#001</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Notebook Gamer Pro</h3>
            <p class="text-gray-600 text-sm mb-3">Laptop high-performance para jogos</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900">R$ 3.299,00</span>
              <span class="text-sm text-gray-500">Est: 15</span>
            </div>
          </div>
        </div>

        <!-- Produto 2 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div class="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
            </svg>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ativo</span>
              <span class="text-sm text-gray-500">#002</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Smartphone Ultra</h3>
            <p class="text-gray-600 text-sm mb-3">Celular com câmera profissional</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900">R$ 1.899,00</span>
              <span class="text-sm text-gray-500">Est: 32</span>
            </div>
          </div>
        </div>

        <!-- Produto 3 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div class="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Esgotado</span>
              <span class="text-sm text-gray-500">#003</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Tablet Design</h3>
            <p class="text-gray-600 text-sm mb-3">Tablet para designers e artistas</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900">R$ 899,00</span>
              <span class="text-sm text-red-500">Est: 0</span>
            </div>
          </div>
        </div>

        <!-- Produto 4 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div class="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ativo</span>
              <span class="text-sm text-gray-500">#004</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Fones Bluetooth Pro</h3>
            <p class="text-gray-600 text-sm mb-3">Audio de alta qualidade sem fio</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900">R$ 449,00</span>
              <span class="text-sm text-gray-500">Est: 28</span>
            </div>
          </div>
        </div>

        <!-- Produto 5 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div class="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Inativo</span>
              <span class="text-sm text-gray-500">#005</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Monitor 4K Ultra</h3>
            <p class="text-gray-600 text-sm mb-3">Monitor profissional de alta resolução</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900">R$ 1.599,00</span>
              <span class="text-sm text-gray-500">Est: 8</span>
            </div>
          </div>
        </div>

        <!-- Produto 6 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div class="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ativo</span>
              <span class="text-sm text-gray-500">#006</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Teclado Mecânico</h3>
            <p class="text-gray-600 text-sm mb-3">Teclado gamer com switches mecânicos</p>
            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900">R$ 349,00</span>
              <span class="text-sm text-gray-500">Est: 42</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex items-center justify-between mt-8">
        <div class="text-sm text-gray-700">
          Mostrando <span class="font-medium">1</span> a <span class="font-medium">6</span> de <span class="font-medium">24</span> produtos
        </div>
        <div class="flex space-x-2">
          <button class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
            Anterior
          </button>
          <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</button>
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

<script setup>
// Definir metadados da página
useHead({
  title: 'Produtos - CRM',
  meta: [
    { name: 'description', content: 'Gerencie seu catálogo de produtos no sistema CRM' }
  ]
})
</script>
