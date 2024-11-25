import { useEffect, useState } from "react";


function ModalLogin(props) {
  const { loginFunction } = props;
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");

  function logins(e) {
    const HideLoginModal = document.getElementById("HideLoginModal");
    if (formPassword == "password" && formUsername == "rdwn") {
      loginFunction(true);
      HideLoginModal.click();
      Swal.fire({
        icon: "success",
        text: "Berhasil Masuk",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "Gagal Username atau password salah",
      });
      setFormPassword("");
    }
  }

  return (
    <div
      class="modal modal-lg fade"
      id="modalLogin"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <button data-bs-dismiss="modal" id="HideLoginModal" hidden></button>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body py-5">
            <div className="row py-5">
              <div className="col-6">
                <img
                  className="w-100"
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="col-6 container">
                <h4 className="text-center">Welcome Back!</h4>
                <p className="text-center text-muted text-small">
                  Please enter your detail
                </p>
                <div className="p-2">
                  <div className="mb-3">
                    <label>Username (rdwn) </label>
                    <input
                      onChange={(e) => setFormUsername(e.target.value)}
                      type="text"
                      required
                      value={formUsername}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Password (password)</label>
                    <input
                      onChange={(e) => setFormPassword(e.target.value)}
                      type="password"
                      required
                      value={formPassword}
                      className="form-control"
                    />
                  </div>
                  <button onClick={logins} className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
