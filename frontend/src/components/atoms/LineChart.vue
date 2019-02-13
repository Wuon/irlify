<script>
  import { Line } from 'vue-chartjs';
  import store from '@/store';
  import moment from 'moment';

  export default {
    name: "LineChart",
    extends: Line,
    props: ['anger', 'joy', 'fear', 'sadness', 'surprise', 'range'],
    mounted () {
      this.renderChart({
        labels: this.range,
        datasets: [
          {
            label: 'Anger',
            backgroundColor: '#ffb3ba',
            borderColor:'#ffb3ba',
            data: this.anger,
            fill: false,
          },
          {
            label: 'Joy',
            backgroundColor: '#ffd84d',
            borderColor:'#ffd84d',
            data: this.joy,
            fill: false,
          },
          {
            label: 'Fear',
            backgroundColor: '#3eff70',
            borderColor:'#3eff70',
            data: this.fear,
            fill: false,
          },
          {
            label: 'Sadness',
            backgroundColor: '#bae1ff',
            borderColor:'#bae1ff',
            data: this.sadness,
            fill: false,
          },
          {
            label: 'Surprise',
            backgroundColor: '#ff9336',
            borderColor:'#ff9336',
            data: this.surprise,
            fill: false,
          }
        ]
      }, {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              suggestedMax: 1,
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false,
        onClick:this.handle,
      });
      this.$forceUpdate();
    },
    methods: {
      handle (point, event) {
        if(event.length !== 0){
          const item = event[0];
          store.commit('setBody', '');
          store.commit('setEmotion', {});
          store.commit('setDate', moment(this.range[item._index]).startOf('day').toDate());
          this.$router.push('/');
        }
      }
    }
  }
</script>

<style scoped>

</style>
