import "./cabecera.css"

export function Cabecera() {
  return (
    <div className="contenedorCabecera">
        <header className="cabeceraPrincipal"> 
            <h1>SAPSOFT</h1>
            <nav className="menuPrincipal">
                <a href="#"> Inventario </a>
                <a href="#"> Ventas </a>
                <a href="#"> Reportes </a>
                <a href="#"> Consultas </a>
                <a href="#"> Login </a>
            </nav>
        </header>
    </div>
  );
}

