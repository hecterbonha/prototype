"use client";

import useSession from "@/packages/hooks/use-session";
import { defaultSession } from "@/packages/utils/iron-session-lib";

export function ConnectForm() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <p className="text-lg">Loading...</p>;
  }

  if (session.isLoggedIn) {
    return (
      <>
        <p className="text-lg">
          Logged in user: <strong>{session.username}</strong>
        </p>
        <LogoutButton />
      </>
    );
  }

  return <LoginForm />;
}

function LoginForm() {
  const { login } = useSession();

  return (
    <form
      onSubmit={function (event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string;
        login(username, {
          optimisticData: {
            isLoggedIn: true,
            username,
          },
        }).then(() => {
          console.log("Log In");
        });
      }}
      method="POST"
      className=""
    >
      <label className="block text-lg">
        <span className="">Username</span>
        <input
          type="text"
          name="username"
          className=""
          placeholder=""
          defaultValue="Alison"
          required
          // for demo purposes, disabling autocomplete 1password here
          autoComplete="off"
          data-1p-ignore=""
        />
      </label>
      <div>
        <input type="submit" value="Login" className="" />
      </div>
    </form>
  );
}

function LogoutButton() {
  const { logout } = useSession();

  return (
    <p>
      <a
        className=""
        onClick={(event) => {
          event.preventDefault();
          logout(null, {
            optimisticData: defaultSession,
          });
        }}
      >
        Logout
      </a>
    </p>
  );
}
