# Regras de Codificação - Projeto CRM

## 🎯 Importações Explícitas
- **OBRIGATÓRIO:** Todos os componentes Vue devem ser importados explicitamente
- Use `import ComponentName from '~/components/ComponentName.vue'`
- Não dependa apenas do auto-import do Nuxt
- Mantenha todas as dependências visíveis no código

## 📝 Exemplo Correto:
```javascript
<script setup>
import BaseInput from '~/components/BaseInput.vue'
import BaseButton from '~/components/BaseButton.vue'
</script>
```

Esta regra garante código mais explícito, legível e fácil de manter.