import React from "react";

function App() {
  return (
    <div className="container">
      {/* Navbar - start */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary><i className="bi bi-translate"></i></summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a className="text-nowrap">English</a>
                  </li>
                  <li>
                    <a className="text-nowrap">Russian</a>
                  </li>
                  <li>
                    <a className="text-nowrap">Korean</a>
                  </li>
                  <li>
                    <a className="text-nowrap">O'zbek</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      {/* Navbar - end */}

      <div className="border flex justify-center items-center">
        <p className="p-4">
          Hello, World!
        </p>
      </div>

    </div>
  );
}

export default App;
