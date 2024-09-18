import "../../styles/ui.css"

const InputText = ({name, type="text" , onChange, placeholder="escribe algo aqui ..."}) => {
  return (
    <div className="inputText">
      <label>{name} nombre</label>
      <input type={type} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

export default InputText