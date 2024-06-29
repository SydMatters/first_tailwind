import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <header className=" bg-white px-6 shadow">
        <div className="flex h-16 items-center justify-between">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
          <a href="#">logo</a>
          <div>
            <Button>theme</Button>
            <Button>user</Button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
