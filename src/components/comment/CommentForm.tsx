
import { useNavigate } from "react-router";

function CommentForm() {
  const navigate = useNavigate();

  return (
    <form>
      <div className="flex flex-col w-96">
        <label htmlFor="Komentar" className="text-sm">
          Komentar
        </label>

        <button
          type="button"
          onClick={() => navigate("/create")}
          className="border p-2 mt-5 rounded-xl text-xs"
        >
          tambah komennnnnnn
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
