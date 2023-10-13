const d = document;
const $contenedorJugadores = d.querySelector(".jugadores");

async function obtenerJugadores(api) {
  try {
    let response = await fetch(api);
    let data = await response.json();

    data.forEach((jugador) => {
      const $jugador = d.createElement("div");

      const jugadorPlantilla = `
      <div class="jugador" id=${jugador.id}>
      <img src="${jugador.imagen}" alt="${jugador.nombre}" class="imgj" />
      <div class="divinfo">
        <div>
          <h3>${jugador.nombre}</h3>
          <p>${jugador.posicion}</p>
          <h3>${jugador.equipo}</h3>
        </div>
        <div class="divp">
          <div>
            <h4>Altura</h4>
            <p>${jugador.altura}</p>
          </div>
          <div>
            <h4>Peso</h4>
            <p>${jugador.peso}</p>
          </div>
          <div>
            <h4>Edad</h4>
            <p>${jugador.edad}</p>
          </div>
          <div>
            <h4>Draft</h4>
            <p>${jugador.draft}</p>
          </div>
        </div>

        <div class="divp">
          <div>
            <h4>PPG</h4>
            <p>${jugador.puntos_por_partido}</p>
          </div>
          <div>
            <h4>RPG</h4>
            <p>${jugador.rebotes_por_partido}</p>
          </div>
          <div>
            <h4>APG</h4>
            <p>${jugador.asistencias_por_partido}</p>
          </div>
          <div>
            <h4>EF</h4>
            <p>${jugador.eficiencia}</p>
          </div>
        </div>
      </div>
    </div>
      `;
      $jugador.innerHTML = jugadorPlantilla;
      $contenedorJugadores.appendChild($jugador);
    });
  } catch (error) {
    console.log(error.message);
    alert("No se pudieron cargar los jugadores, intentelo más tarde");
  }
}

d.addEventListener("DOMContentLoaded", () => {
  obtenerJugadores("https://mackay-cassowary-kgtq.2.us-1.fl0.io/player");
});

const btnDc = document.querySelector(".btn-dc");
const aside = document.querySelector("aside");

btnDc.addEventListener("click", () => {
  aside.classList.toggle("animation");
});

// let headersList = {
//   Accept: "*/*",
//   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//   "Content-Type": "application/json",
// };

// let bodyContent = JSON.stringify({
//   nombre: d.querySelector("#nombre").value,
//   equipo: d.querySelector("#equipo").value,
//   posicion: d.querySelector("#posicion").value,
//   altura: d.querySelector("#altura").value,
//   peso: d.querySelector("#peso").value,
//   edad: d.querySelector("#edad").value,
//   nacionalidad: d.querySelector("#nacionalidad").value,
//   colegio: d.querySelector("#colegio").value,
//   draft: d.querySelector("#draft").value,
//   puntos_por_partido: d.querySelector("#puntos").value,
//   rebotes_por_partido: d.querySelector("#rebotes").value,
//   asistencias_por_partido: d.querySelector("#asistencias").value,
//   eficiencia: d.querySelector("#eficiencia").value,
//   imagen: d.querySelector("#imagen").value,
// });

// let response = await fetch(
//   "https://mackay-cassowary-kgtq.2.us-1.fl0.io/player",
//   {
//     method: "POST",
//     body: bodyContent,
//     headers: headersList,
//   }
// );

// let data = await response.json();
// console.log(data);

// const headersList = {
//   Accept: "*/*",
//   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//   "Content-Type": "application/json",
// };

// const bodyContent = JSON.stringify({
//   nombre: d.querySelector("#nombre").value,
//   equipo: d.querySelector("#equipo").value,
//   posicion: d.querySelector("#posicion").value,
//   altura: d.querySelector("#altura").value,
//   peso: d.querySelector("#peso").value,
//   edad: d.querySelector("#edad").value,
//   nacionalidad: d.querySelector("#nacionalidad").value,
//   colegio: d.querySelector("#colegio").value,
//   draft: d.querySelector("#draft").value,
//   puntos_por_partido: d.querySelector("#puntos").value,
//   rebotes_por_partido: d.querySelector("#rebotes").value,
//   asistencias_por_partido: d.querySelector("#asistencias").value,
//   eficiencia: d.querySelector("#eficiencia").value,
//   imagen: d.querySelector("#imagen").value,
// });

// (async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: bodyContent,
//       headers: headersList,
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("Respuesta exitosa:", data);
//     } else {
//       console.error(
//         "Error en la solicitud:",
//         response.status,
//         response.statusText
//       );
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();

const btnC = d.querySelector(".button");

btnC.addEventListener("click", (event) => {
  event.preventDefault();

  // const headersList = {
  //   Accept: "*/*",
  //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //   "Content-Type": "application/json",
  // };

  // const bodyContent = JSON.stringify({
  //   nombre: d.querySelector("#nombre").value,
  //   equipo: d.querySelector("#equipo").value,
  //   posicion: d.querySelector("#posicion").value,
  //   altura: d.querySelector("#altura").value,
  //   peso: d.querySelector("#peso").value,
  //   edad: d.querySelector("#edad").value,
  //   nacionalidad: d.querySelector("#nacionalidad").value,
  //   colegio: d.querySelector("#colegio").value,
  //   draft: d.querySelector("#draft").value,
  //   puntos_por_partido: d.querySelector("#puntos").value,
  //   rebotes_por_partido: d.querySelector("#rebotes").value,
  //   asistencias_por_partido: d.querySelector("#asistencias").value,
  //   eficiencia: d.querySelector("#eficiencia").value,
  //   imagen: d.querySelector("#imagen").value,
  // });

  // (async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         method: "POST",
  //         body: bodyContent,
  //         headers: headersList,
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Respuesta exitosa:", data);
  //     } else {
  //       console.error(
  //         "Error en la solicitud:",
  //         response.status,
  //         response.statusText
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // })();

  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https:www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    nombre: d.querySelector("#nombre").value,
    equipo: d.querySelector("#equipo").value,
    posicion: d.querySelector("#posicion").value,
    altura: d.querySelector("#altura").value,
    peso: d.querySelector("#peso").value,
    edad: d.querySelector("#edad").value,
    nacionalidad: d.querySelector("#nacionalidad").value,
    colegio: d.querySelector("#colegio").value,
    draft: d.querySelector("#draft").value,
    puntos_por_partido: d.querySelector("#puntos").value,
    rebotes_por_partido: d.querySelector("#rebotes").value,
    asistencias_por_partido: d.querySelector("#asistencias").value,
    eficiencia: d.querySelector("#eficiencia").value,
    imagen: d.querySelector("#imagen").value,
  });

  let response = fetch("https://mackay-cassowary-kgtq.2.us-1.fl0.io/player", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  aside.classList.toggle("animation");
  console.log(d.querySelector("#nombre").value);
});
