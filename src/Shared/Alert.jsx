import useAuth from "../Hooks/useAuth";

const Alert = () => {
  const { user, logout } = useAuth();
  const handleLogOut = () => {
    logout().then(() => console.log("User is logged out"));
  };
  return (
    <div role="alert" className="alert alert-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-center mx-auto">Logged in as {user.email} </span>
      <span className="cursor-default bg-slate-200 p-4" onClick={handleLogOut}>
        Logout
      </span>
    </div>
  );
};

export default Alert;