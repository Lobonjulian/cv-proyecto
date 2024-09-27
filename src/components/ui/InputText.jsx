import "../../styles/ui.css";

const InputText = ({ labelName, type = "text", manipular, estado }) => {
  return (
    <label className="inputText">
      <span>{labelName}</span>
      {estado.length <= 200 || type === "tel" ? (
        <input
        className="sombra"
          type={type}
          onChange={(e) => manipular(e.target.value)}
          value={estado}
        />
      ) : (
        <textarea
          className="sombra"
          rows={10}
          cols={30}
          onChange={(e) => manipular(e.target.value)}
          value={estado}
        ></textarea>
      )}
    </label>
  );
};

export default InputText;
