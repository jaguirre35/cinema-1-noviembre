 let peliculas=[
    {
        nombre:"wakanda",
        duracion:261,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/wakanda.jpg?alt=media&token=23925e15-c020-44df-9a4c-daca89222d92"
    },
    {
        nombre:"tadeo3",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/tadeo3.jpg?alt=media&token=9674b3da-365d-4d36-8192-a2c3a49fd11c"
    },
    {
        nombre:"minions2",
        duracion:156,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/minions2.jpg?alt=media&token=afc9c456-f5cf-4463-aa79-90a9dc8bdb9e"
    },
    {
        nombre:"jeeppers",
        duracion:145,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/jeeppers.jpg?alt=media&token=bb7439cc-583f-47fa-a405-dd8c9d247892"
    },
    {
        nombre:"hallowen",
        duracion:123,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/hallowen.jpg?alt=media&token=bcfc9833-a2d7-4de6-bfad-83701c54f32e"
    },
    {
        nombre:"ONEPIECE",
        duracion:159,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/ONEPIECE.jpg?alt=media&token=aad463f5-6813-4851-b3e9-501c43568b9f"
    },
    {
        nombre:"Blackadam",
        duracion:86,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/Blackadam.jpg?alt=media&token=d4168a49-0d5d-4509-ab29-02a669b2acbd"
    },
    {
        nombre:"LAJAURIA",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAJAURIA.jpg?alt=media&token=a686c0be-5f9d-425e-9c09-47fc5cf395e1"
    },
    {
        nombre:"LAJAURIA",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAJAURIA.jpg?alt=media&token=a686c0be-5f9d-425e-9c09-47fc5cf395e1"
    },
    {
        nombre:"LAJAURIA",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAJAURIA.jpg?alt=media&token=a686c0be-5f9d-425e-9c09-47fc5cf395e1"
    },
    {
        nombre:"LAJAURIA",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAJAURIA.jpg?alt=media&token=a686c0be-5f9d-425e-9c09-47fc5cf395e1"
    },
    {
        nombre:"LAJAURIA",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAJAURIA.jpg?alt=media&token=a686c0be-5f9d-425e-9c09-47fc5cf395e1"
    },
    {
        nombre:"LAJAURIA",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/cimenajuan.appspot.com/o/LAJAURIA.jpg?alt=media&token=a686c0be-5f9d-425e-9c09-47fc5cf395e1"
    }
 ]

 let fila=document.getElementById("fila")

 peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)
 })

 