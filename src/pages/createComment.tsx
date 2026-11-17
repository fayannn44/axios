
import { useState } from "react";
import { useNavigate } from "react-router";
import { request } from "../axios";

function CreateComment() {
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!comment.trim() || !username.trim()) {
      alert("Nama dan komentar wajib diisi!");
      return;
    }

    try {
      await request.post("/comments", {
        body: comment,
        likes: 0,
        user: {
          username: username,
        },
      });

      alert("Komentar berhasil ditambahkan!");
      setComment("");
      setUsername("");
      navigate("/");
    } catch (error) {
      alert("Gagal menambahkan komentar!");
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-96 gap-3">
          <h1 className="font-bold text-xl">Tambah Komentar</h1>

          <label htmlFor="username">Nama</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded-lg"
            placeholder="Masukkan nama..."
          />

          <label htmlFor="komentar">Komentar</label>
          <textarea
            id="komentar"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-2 rounded-lg"
            placeholder="Tulis komentar..."
          />

          <button type="submit" className="border p-2 rounded-xl">
            Kirim
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="border p-2 rounded-xl"
          >
            Kembali
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateComment;
