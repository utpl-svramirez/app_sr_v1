import "./login.css";

export function Ingresar(){
    return (
        <div>
            <h2 className="loguearse">{}</h2>
            <form>
                <fieldset>
                    <legend className="leyenda">Iniciar Sesión</legend>
                        <p>
                            <input
                                type="text"
                                name="size"
                                id="size_1"
                                placeholder="Ingrese el usuario"
                            />
                        </p>
                        <p>
                            <input
                                type="password"
                                name="size"
                                id="size_2"
                                placeholder="Ingresar contraseña"
                            />
                        </p>
                        <p>
                            <button className="boton">Log In</button>
                        </p>
                </fieldset>
            </form>
        </div>
    );
}