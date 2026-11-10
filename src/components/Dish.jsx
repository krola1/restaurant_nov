export default function Dish({ tittel, pris, ingredienser, kategori }) {
  return (
    <div style={{ border: "solid white" }}>
      <h3>{tittel}</h3>
      <p>Inneholder: {ingredienser}</p>
      <p>Kategori: {kategori}</p>
      <p>Pris: {pris},-</p>
    </div>
  );
}
