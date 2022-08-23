import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../Redux/LoginSignUp/login.action";
import {
  createNoteAPI,
  deleteNoteAPI,
  getNotesAPI,
  updateNoteAPI,
} from "../Redux/Notes/notes.action";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [label, setLabel] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { notes } = useSelector((state) => state.note);
  console.log("notes:", notes);

  let token = localStorage.getItem("token");

  const handleAddNote = () => {
    let NewNote = {
      title: title,
      note: note,
      label: label,
    };

    dispatch(createNoteAPI(NewNote, token)).then((res) => {
      dispatch(getNotesAPI(token));
    });
  };

  const handleUpdateNote = (Note) => {
    let id = Note._id;
    let payload = {
      title: title,
      note: note,
      label: label,
      userId: Note.userId,
    };
    dispatch(updateNoteAPI(id, payload, token)).then((res) => {
      dispatch(getNotesAPI(token));
    });
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNoteAPI(id, token)).then((res) => {
      dispatch(getNotesAPI(token));
    });
  };

  const handleLogOut = () => {
    dispatch(logoutAPI());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(getNotesAPI(token));
  }, [dispatch]);

  useEffect(() => {}, []);

  if (!token) {
    return (
      <div>
        <h1>Please Loagin</h1>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleLogOut}>LogOut</button>
      <div
        style={{
          display: "flex",
          gap: "180px",
          padding: "20px",
          border: "1px solid black",
        }}
      >
        <div>
          <h1>Create Note</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <br />
          <br />
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note"
          />
          <br />
          <br />
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Label"
          />
          <br />
          <br />
          <button onClick={handleAddNote}>Create Note</button>
        </div>
        <div
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto",
            gap: "50px",
          }}
        >
          {notes.length > 0 &&
            notes.map((el, idx) => (
              <div
                key={el._id}
                style={{
                  border: "1px solid blue",
                  width: "100%",
                  height: "auto",
                  padding: "10px",
                }}
              >
                <div>{el.title}</div>
                <div>{el.note}</div>
                <div>{el.label}</div>
                <div
                  style={{ display: "flex", gap: "20px", marginTop: "10px" }}
                >
                  <button onClick={() => handleUpdateNote(el)}>
                    Update Note
                  </button>
                  <button onClick={() => handleDeleteNote(el._id)}>
                    Remove Note
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
