<template>
  <div class="board-column">
    <draggable
      :list="list"
      v-bind="$attrs"
      class="sort-list"
      :set-data="setData"
    >
      <div  v-for="element in list" :key="element.id" class="sort-item flex">
        <span>{{ element.name }}</span>
        <el-button type="text" size="large"><i class="el-icon-s-operation" /></el-button>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DragKanbanDemo',
  components: {
    draggable
  },
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    setData(dataTransfer) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData('Text', '')
      this.$emit('listChange', this.list)
    }
  }
}
</script>
<style lang="scss" scoped>
  .sort-list {
    .sort-item {
      cursor: pointer;
      border-bottom: 1px dashed #5F5F5F;
    }
  }
/*}*/
</style>

