import "./Form.css"

function Form({ name, room, handleInputChange, handleRoomAction }) {
  return (
    <>
    
    <div className="Form_container">
    <h1 className="Heading">Welcome to chat boom</h1>
      
      <div className="Input_form">
        <label  className="Input_label" htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => handleInputChange('name', event)} />
      </div>
        <div className="Input_form">
        <label  className="Input_label" htmlFor="room">Room:</label>
        <input type="text" id="room" value={room} onChange={(event) => handleInputChange('room', event)} />
      </div>
      <div className="Button_Group">
        <button onClick={() => handleRoomAction("joinroom")}>Join Room</button>
        <button onClick={() => handleRoomAction("createRoom")}>Create Room</button>
      </div>
      </div>
    </>
  )
}

export default Form