import { useCtx } from "@/lib/Context";

function random(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

export default function Home() {
  const { state, dispatch } = useCtx();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return dispatch({
      type: "SET_USERNAME",
      payload: {
        username: event.currentTarget.miaw.value,
      },
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <p>This is the global state</p>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <div className="p-8 border border-blue-500">
        <p>Type somethin to change name</p>
        <form onSubmit={onSubmit}>
          <input
            name="miaw"
            className="border border-blue-500 p-2 rounded-md"
          />
          <input
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md shadow"
          />
        </form>
      </div>
      <div className="p-8 border border-blue-500">
        <p>click change generate random id</p>
        <button
          onClick={() =>
            dispatch({
              type: "SET_ID",
              payload: {
                id: random(8),
              },
            })
          }
          className="bg-blue-500 text-white p-2 rounded-md shadow"
        >
          Change Id
        </button>
      </div>
    </div>
  );
}
