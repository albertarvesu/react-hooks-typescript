import React from "react";

interface IUser {
  username?: string;
  email?: string;
  password?: string;
}

interface IWithUseStateProps {
  currentUser?: IUser;
}

const WithUseState: React.FC<IWithUseStateProps> = ({ currentUser }) => {
  const [user, setUser] = React.useState<IUser | undefined>(currentUser);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>
      <div>
        <label>Username</label>
        <input
          name="username"
          value={user ? user.username : ""}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user ? user.email : ""}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user ? user.password : ""}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default WithUseState;
