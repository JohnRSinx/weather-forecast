export function Dash() {
  return (
    <div className="mt-4 flex flex-col gap-24 rounded-md bg-secondary p-4">
      <div className="flex justify-between gap-16">
        <div>
          <h2>Aracaju, SE</h2>
          <p>Segunda-feira, 15 de maio de 2023</p>
        </div>
        <p>Horario</p>
      </div>
      <div className="flex justify-between ">
        <div className="flex  flex-col">
          <h2>Temperatura</h2>
          <span>Max/Min</span>
          <span>main</span>
        </div>
        <div>icone</div>
      </div>
    </div>
  )
}
