const ItemListadoPeliculas = ({ titulo, imagen, link }) => {
  return (
    <div className="pelicula-item">
      <img className="pelicula-item-img" src={imagen} />
      <p>{titulo}</p>
      <a href={link}> {">"} </a>
    </div>
  );
};

export default ItemListadoPeliculas;
