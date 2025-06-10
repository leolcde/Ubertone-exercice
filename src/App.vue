<script setup lang="ts">
import { ref, onMounted, VueElement } from 'vue' // Importation of vue and OnMounted
import Plotly from 'plotly.js-dist' // Importation of plotly - for make some graph
import NumberUtils from './utils/number'
import Sin from './utils/sinusoid'
import SinForm from './components/SinForm.vue'

/* 
** Var for store frequency,
** amplitude and the reference
** to the graph element
*/
const frequency = ref('')
const amplitude = ref('')
const plotContainer = ref(null)

/*
** Manages form submit
*/
function handleSubmit(event: Event)
{
  event.preventDefault() // Prevents page reloading

  if (!NumberUtils.isNumeric(frequency.value) || !NumberUtils.isNumeric(amplitude.value)) { // Error handling - verify if the value is not numeric
    console.error('Fields must contain only numbers.')
    return
  }

  // convert value to float
  const f = parseFloat(frequency.value)
  const a = parseFloat(amplitude.value)

  // Generates the sinusoid data
  const { x, y } = Sin.generateSinusoid(f, a)

  // Display the curve with plotly
  Plotly.newPlot(plotContainer.value, [{
    x, y, type: 'scatter', mode: 'lines', name: 'Sinusoide'
  }], {
    title: 'Sinusoid',
    xaxis: { title: 'Fréquence' },
    yaxis: { title: 'Amplitude' }
  })

  console.log('graph update')
}
</script>

<template>
  <!-- Display the title -->
  <h1 class="title">Enter your data !</h1>
  <!-- Dipslay the form input, for put the data -->
  <form class="form" @submit="handleSubmit">
    <input class="input" type="text" v-model="frequency" placeholder="Frequency" required inputmode="decimal" />
    <input class="input" type="text" v-model="amplitude" placeholder="Amplitude" required inputmode="decimal" />

    <!-- Diplay the button for submit -->
    <button type="submit">Create Sinusoide</button>
  </form>
  <!-- Display the sinusoid -->
  <div class="Sin" ref="plotContainer"></div>
</template>

<style>

/* CSS for background/body */
body
{
  background-color: rgb(189, 201, 255);
}

/* CSS for Sinusoide */
.Sin
{
  width: 100%;
  height: 500px;
  margin-top: 30px;
  border-radius: 10px;
}

/* CSS for title */
.title
{
  color: rgb(255, 255, 255);
}

/* CSS for form */
.form
{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* CSS for button */
button {
  background-color: #f3f7fe;
  color: #3b82f6;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;
}

button:hover {
  background-color: #3b82f6;
  box-shadow: 0 0 0 5px #3b83f65f;
  color: #fff;
}

/* CSS for input text field */
.input
{
  border: 2px solid transparent;
  height: 2.5em;
  padding-left: 0.8em;
  outline: none;
  overflow: hidden;
  background-color: #F3F3F3;
  border-radius: 10px;
  transition: all 0.5s;
}

.input:hover,
.input:focus
{
  border: 2px solid #4A9DEC;
  box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
  background-color: white;
}

</style>