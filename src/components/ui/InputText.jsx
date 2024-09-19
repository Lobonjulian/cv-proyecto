import "../../styles/ui.css"

const InputText = ({ labelName, type="text", manipular, estado, placeholder="escribe algo aquí ..."}) => {
  return (
    <label className="inputText">
      <span>{labelName}</span>
      <input type={type} onChange={(e) => manipular(e.target.value)} placeholder={placeholder} value={estado} />
    </label>
  );
}

export default InputText