import { SnackbarProvider, enqueueSnackbar } from "notistack";

const App = () => {
  return (
    <div>
      <SnackbarProvider />
      <button onClick={() => enqueueSnackbar("That was easy!")}>
        Show snackbar
      </button>
    </div>
  );
};
export default App;
