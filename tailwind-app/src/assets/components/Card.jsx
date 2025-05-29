function Card() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
      <h2 className="text-xl font-bold mb-2">Pumas</h2>
      <div className="text-left mb-4">
          Equipo de futbol de Mexico 
          <ul className="list-disc list-inside">
          <li>
            <ul className="list-disc list-inside ml-4">
              <li>Ultima vez campeones en el clausura 2011</li>
              <li>Su mascota es un puma y se llama goyo</li>
              <li>Juegan en el Estadio Olimpico Universitario</li>
            </ul>
          </li>
          <li> Son un equipo muy popular
            <ul className="list-disc list-inside ml-4">
              <li>Son de la CDMX</li>
              <li>El mayor rival de pumas es el América</li>
            </ul>
          </li>
        </ul>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Click aquí</button>
    </div>
  );
}

export default Card;
