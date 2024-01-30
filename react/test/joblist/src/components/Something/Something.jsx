import { useParams } from "react-router-dom";

function Something() {
  const { infos, name } = useParams();
  return (
    <div>
      <p>infos:{infos}</p>
      <p>name:{name}</p>
    </div>
  );
}

export default Something;
