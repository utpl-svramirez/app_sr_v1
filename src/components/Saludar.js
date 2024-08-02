import "./saludar.css";

export function Saludar({title,name="User"}){
    console.log(title, name);
    /*const titulo ='Nueva información desde un componente externo';*/
    return (
    <section>
        <h2> 
            Saludo {title} {name} 
        </h2>
        <p>Contenido de la noticia va aquí</p>
    </section>
    );
 }

 export function UserCard({name, amount, married, address}){
    /*console.log(props);*/
    return (
        <div>
            <h2 className="titulos">{name}</h2>
            <p>{amount}</p>
            <p>{married? "married" : "single"}</p>
            <form>
                <fieldset>
                    <legend>Módulo de consultas</legend>
                        <p>
                            <input
                                type="text"
                                name="size"
                                id="size_1"
                                placeholder="Ingrese el usuario"
                            />
                            <label for="size_1">Pequeño</label>
                        </p>
                        <p>
                            <input
                                type="password"
                                name="size"
                                id="size_2"
                                placeholder="Ingresar contraseña"
                            />
                            <label for="size_2">Mediano</label>
                        </p>
                        <p>
                            <button>Ingresar</button>
                        </p>
                </fieldset>
            </form>
        </div>
    );

 }