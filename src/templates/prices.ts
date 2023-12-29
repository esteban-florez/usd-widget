interface PricesTemplateData {
  monitor: string
  bcv: string
}

export const prices = ({ monitor, bcv }: PricesTemplateData) => `
  <section class="grid grid-cols-2 gap-2 w-full h-full">
    <div class="flex flex-col items-center w-full bg-gray-800 rounded-lg p-2">
      <h2 class="font-bold">EnParaleloVzla</h2>
      <p>Bs ${monitor}</p>
    </div>
    <div class="flex flex-col items-center w-full bg-gray-800 rounded-lg p-2">
      <h2 class="font-bold">Banco Central</h2>
      <p>Bs ${bcv}</p>
    </div>
  </section>
`
