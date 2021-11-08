import Link from "next/link";
export default function List({ ownerList }) {
  return (
    <div>
      <ul>
        {ownerList.map((e) => (
          <li key={e.id}>
            <Link
              as={"/" + e.vehicle + "/" + e.ownerName}
              href="/[vehicle]/[person]"
            >
              <a>
                {e.ownerName} - {e.vehicle}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
List.getInitialProps = async () => {
  const response = await fetch("http://localhost:8080/owner-list");
  const ownerList = await response.json();
  return { ownerList: ownerList };
};
