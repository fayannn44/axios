
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { request } from "@/axios";

interface CommentForm {
  body: string;
  username: string;
}

function EditComment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm<CommentForm>();

  useEffect(() => {
    const getCommentByID = async () => {
      try {
        const response = await request.get(`/comments/${id}`);

        reset({
          body: response.data.body,
          username: response.data.user.username,
        });
      } catch (error) {
        alert("Gagal mengambil komentar!");
        console.log(error);
      }
    };

    if (id) getCommentByID();
  }, [id, reset]);

  const onSave = async (data: CommentForm) => {
    try {
      await request.patch(`/comments/${id}`, {
        body: data.body,
        user: {
          username: data.username,
        },
      });

      alert("Komentar berhasil diubah!");
      navigate("/");
    } catch (error) {
      alert("Gagal mengubah komentar!");
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit(onSave)}>
        <div className="flex flex-col gap-3 w-96">
          <h1 className="font-bold text-xl">Ubah Komentar</h1>

          <label htmlFor="username">Nama</label>
          <input
            id="username"
            {...register("username", { required: true })}
            className="border p-2 rounded-lg"
            placeholder="Masukkan nama..."
          />

          <label htmlFor="body">Komentar</label>
          <textarea
            id="body"
            {...register("body", { required: true })}
            className="border p-2 rounded-lg"
            placeholder="Ubah komentar..."
          />

          <button type="submit" className="border p-2 rounded-xl">
            Simpan Perubahan
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

export default EditComment;
