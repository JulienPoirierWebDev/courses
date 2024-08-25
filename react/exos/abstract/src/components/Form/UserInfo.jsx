import { useEffect } from "react";

function UserInfo({ age, count, email }) {
  useEffect(() => {
    console.log("Je suis monté");
    return () => {
      console.log("je suis démonté");
    };
  }, []);
  return (
    <div>
      <p>
        Vous avez {age} ans et vous vous appelez {name}
      </p>
      <div>Compteur : {count}</div>
      <div>{email}</div>
    </div>
  );
}

export default UserInfo;
