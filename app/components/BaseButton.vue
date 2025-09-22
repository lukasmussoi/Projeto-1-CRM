<template>
  <button 
    :type="type"
    :disabled="disabled || loading"
    @click="$emit('click')"
    :class="[
      'px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      variantClasses,
      sizeClasses
    ]"
  >
    <div class="flex items-center justify-center space-x-2">
      <!-- Loading spinner -->
      <svg 
        v-if="loading" 
        class="animate-spin h-4 w-4" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      
      <!-- Ícone opcional -->
      <component :is="icon" v-if="icon && !loading" class="w-4 h-4" />
      
      <!-- Texto do botão -->
      <span v-if="!loading || showTextWhileLoading">
        <slot>{{ text }}</slot>
      </span>
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'

// Props do componente
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  text: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  showTextWhileLoading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [String, Object],
    default: null
  }
})

// Emits
defineEmits(['click'])

// Classes baseadas na variante
const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-rosa-escuro hover:bg-primary-700 text-white focus:ring-rosa-claro',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    outline: 'border-2 border-rosa-escuro text-rosa-escuro hover:bg-rosa-escuro hover:text-white focus:ring-rosa-claro'
  }
  return variants[props.variant]
})

// Classes baseadas no tamanho
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg'
  }
  return sizes[props.size]
})
</script>