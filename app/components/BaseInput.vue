<template>
  <input 
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="[
      'px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rosa-claro focus:border-transparent transition-colors',
      'placeholder-gray-400 text-gray-900',
      disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white',
      error ? 'border-red-500 focus:ring-red-500' : 'border-rosa-claro'
    ]"
    :disabled="disabled"
  />
</template>

<script setup>
// Props do componente
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  }
})

// Emits
defineEmits(['update:modelValue'])
</script>