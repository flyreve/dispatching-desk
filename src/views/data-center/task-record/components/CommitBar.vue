<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['小组1概况', '小组1概况', '小组1概况', '小组1概况', '小组1概况', '小组1概况', '小组1概况', '小组1概况', '小组1概况', '小组1概况'],
      datasets: [
        {
          width: '100%',
          label: 'GitHub Commits',
          backgroundColor: '#6A73CA',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12]
        }
      ]
    })
  }
}
</script>

<style scoped></style>
